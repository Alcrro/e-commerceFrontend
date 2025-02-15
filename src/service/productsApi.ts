import { apiService } from './apiServiceData/apiService';

export interface IProduct {
  cameraSpecs: Record<string, any>; // Replace with specific fields if known
  dimensions: Record<string, any>; // Replace with specific fields if known
  storageOptions: any[]; // Replace `any` with the correct type if known
  colorOptions: any[]; // Replace `any` with the correct type if known
  batteryCapacity: string;
  connectivity: any[]; // Replace `any` with the correct type if known
  weight: string;
  warranty: string;
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  isActive: boolean;
  images: string[]; // Assuming images is an array of URLs or paths
  productType: string;
  processor: string;
  ram: string;
  storage: string;
  screenSize: number;
  batteryLife: string;
  createdAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
  __v: number;
}

export async function productsApi(): Promise<IApiResponse<IProduct[]> | null> {
  const result = await apiService<IProduct[]>('/product/get-products', 'GET');

  if (result) {
    return result;
  } else {
    return null;
  }
}
