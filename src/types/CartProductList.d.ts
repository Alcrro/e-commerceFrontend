interface ICartData {
  _id: string;
  userId: string;
  nameList: string[];
  productCartList: ICartProductList[];
  totalPrice: number;
}
interface ICartProductList {
  productId: string;
  price: number;
  quantity: number;
  listName: string;
  productDetails: {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    isActive: boolean;
    images: string[];
    thumbnail: string;
    createdAt: Date;
    updatedAt: Date;
  };
}
