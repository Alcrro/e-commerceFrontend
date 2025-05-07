import { Item } from '@/hooks/indexedProvider/IndexedProvider';

export type IStories = 'cart' | 'favorite' | 'settings';
const DB_NAME = 'MyDataBase';
const DB_VERSION = 1;
const STORES: IStories[] = ['cart', 'favorite'];

export const openDB = async (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      STORES.forEach((store) => {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store, { keyPath: 'meta.id' });
        }
      });
    };

    request.onsuccess = (event: any) => resolve(event?.target.result);
    request.onerror = (event: any) => reject(event?.target.error);
  });
};

export const addItemDB = async (storeName: IStories, item: Item) => {
  const db = await openDB();
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  store.put(item);
};

export const getItemsDB = async (storeName: IStories) => {
  const db = await openDB();
  const transaction = db.transaction(storeName, 'readonly');
  const store = transaction.objectStore(storeName);

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const removeItemFromDB = async (storeName: IStories, id: string) => {
  const db = await openDB();
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);
  store.delete(id);
};

export const updateItemDB = async (
  storeName: IStories,
  id: string,
  quantity: number,
  subTotalPrice: number
) => {
  const db = await openDB();
  const transaction = db.transaction(storeName, 'readwrite');
  const store = transaction.objectStore(storeName);

  return new Promise((resolve, reject) => {
    const request = store.get(id);

    request.onsuccess = () => {
      const item = request.result;
      if (!item) {
        reject('Item not found');
        return;
      }
      item.meta.quantity = quantity;
      item.meta.subTotalPrice = subTotalPrice;

      const updateRequest = store.put(item);
      updateRequest.onsuccess = () => resolve(item);
      updateRequest.onerror = () => reject(updateRequest.error);
    };

    request.onerror = () => reject(request.error);
  });
};
