interface IProduct {
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
  thumbnail: string;
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

interface IBaseProduct {
  _id: string;
  name: string; // Name of the product
  description: string; // Detailed description
  price: number; // Price of the product
  category: ProductCategories; // Category to which the product belongs
  brand: string;
  stock: number; // Quantity available in stock
  images: string[]; // Optional array of image URLs
  thumbnail: string; // image URLs
  attributes: Record<string, any>; // Dynamic attributes stored here!
  createdAt: Date; // Date when the product was added
  updatedAt: Date; // Date when the product details were last updated
}
