import React from 'react';
import ButtonLink from '../defaultButton/Button';

const GoToCart = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <ButtonLink
      label={'Cart'}
      isLink={true}
      variant="primary"
      href={`${!isLoggedIn ? '/cart' : '/profile/cart'}`}
    />
  );
};

export default GoToCart;
