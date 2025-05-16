import { productsApi } from '@/service/productsApi';
import CarouselClient from './CarouselClientV2';
import { favoriteApi } from '@/service/favoriteApi';

const CarouselV2 = async () => {
  const product = await productsApi();
  const favorite = await favoriteApi('');
  const products = product?.data?.products || [];
  const favorites = favorite?.data?.productCartList || [];

  return <CarouselClient products={products} favorites={favorites} />;
};

export default CarouselV2;
