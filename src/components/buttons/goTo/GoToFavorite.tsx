import React from 'react';
import ButtonLink from '../defaultButton/Button';

const GoToFavorite = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <ButtonLink
      isLink={true}
      href={!isLoggedIn ? '/favorite' : '/profile/favorite'}
      label={'Favorite'}
    />
  );
};

export default GoToFavorite;
