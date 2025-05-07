import React from 'react';
import ContentList from './ContentList';

const ModalContent = ({ product }: { product: ICartProductList }) => {
  return <ContentList product={product} action="deleteProductCart" />;
};

export default ModalContent;
