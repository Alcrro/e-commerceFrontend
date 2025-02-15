import React from 'react';
import ButtonLink from '../defaultButton/Button';

const ProductButton = () => {
  return (
    <ButtonLink
      isLink={true}
      href="/products/main-department"
      label={'Products'}
      variant="none"
    />
  );
};

export default ProductButton;
