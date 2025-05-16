import { addToCartApi, cartApi } from '@/service/cartApi';
import { addItemDB, getItemsDB, updateItemDB } from './indexedDB';
import { Item } from '@/hooks/indexedProvider/IndexedProvider';
import { ICartProductList } from '@/types/CartProductList';

export const syncCartWithDB = async (): Promise<Item[]> => {
  try {
    // Fetch Local Cart (IndexedDB)
    const localCart = (await getItemsDB('cart')) as Item[];

    // Fetch Remote Cart (MongoDB)
    const response = await cartApi();
    const remoteCart: ICartProductList[] =
      response?.data?.productCartList || [];

    // Convert Remote Cart to IndexedDB Compatible Format
    const formattedRemoteCart: Item[] = remoteCart.map((item) => ({
      product: item, // Store full product data
      meta: {
        id: item.productId,
        productId: item.productId,
        subTotalPrice: item.price * item.quantity,
        quantity: item.quantity,
      },
    }));

    // Convert Local Cart to a Map for Faster Lookups
    const localCartMap = new Map(localCart.map((item) => [item.meta.id, item]));

    // Convert Remote Cart to a Map for Faster Lookups
    const remoteCartMap = new Map(
      formattedRemoteCart.map((item) => [item.meta.id, item])
    );

    // 🛠 Batch API Requests to Reduce Network Calls
    const itemsToAddToRemote: { productId: string; price: string }[] = [];
    const itemsToUpdateRemote: {
      id: string;
      quantity: number;
      price: number;
    }[] = [];

    // 🔄 Sync Local → Remote
    for (const localItem of localCart) {
      const remoteItem = remoteCartMap.get(localItem.meta.id);

      if (!remoteItem) {
        // Item exists locally but not in MongoDB → Add to batch request
        itemsToAddToRemote.push({
          productId: localItem.product.productId,
          price: localItem.meta.subTotalPrice.toString(),
        });
      } else if (remoteItem.meta.quantity !== localItem.meta.quantity) {
        // Quantity mismatch → Add to update batch
        itemsToUpdateRemote.push({
          id: localItem.meta.id,
          quantity: localItem.meta.quantity,
          price: localItem.meta.subTotalPrice,
        });
      }
    }

    // 🚀 Send Batch Requests
    if (itemsToAddToRemote.length) {
      await Promise.all(
        itemsToAddToRemote.map((item) =>
          addToCartApi(item.productId, item.price)
        )
      );
    }

    if (itemsToUpdateRemote.length) {
      await Promise.all(
        itemsToUpdateRemote.map((item) =>
          updateItemDB('cart', item.id, item.quantity, item.price)
        )
      );
    }

    // 🔄 Sync Remote → Local
    for (const remoteItem of formattedRemoteCart) {
      const localItem = localCartMap.get(remoteItem.meta.id);

      if (!localItem) {
        // Item exists in MongoDB but not in IndexedDB → Add locally
        await addItemDB('cart', remoteItem);
      } else if (localItem.meta.quantity !== remoteItem.meta.quantity) {
        // Quantity mismatch → Update locally
        await updateItemDB(
          'cart',
          remoteItem.meta.id,
          remoteItem.meta.quantity,
          remoteItem.meta.subTotalPrice
        );
      }
    }

    // Return Updated Local Cart
    return (await getItemsDB('cart')) as Item[]; // Fetch updated cart from IndexedDB
  } catch (error) {
    console.error('Error syncing cart:', error);
    return [];
  }
};
