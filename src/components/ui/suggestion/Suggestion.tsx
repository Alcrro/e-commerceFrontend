import React from 'react';
import SuggestionTitle from './title/SuggestionTitle';
import SuggestionList from './list/SuggestionList';
import { productsApi } from '@/service/productsApi';

const Suggestion = async () => {
  const data = await productsApi();

  const products: IProduct[] = data?.data?.products ?? [];

  return (
    <>
      <SuggestionTitle description="Istoric" />
      <SuggestionList data={products} />
    </>
  );
};

export default Suggestion;
