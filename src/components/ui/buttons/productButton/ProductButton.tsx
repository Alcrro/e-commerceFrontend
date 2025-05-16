import React from 'react';
import ButtonLink from '../defaultButton/Button';

const ProductButton = () => {
  return (
    <ButtonLink
      isLink={true}
      href="/products/main-departments"
      label={'Products'}
      variant="none"
      ariaLabel="product button"
    />
  );
};

export default ProductButton;
