import React from 'react';
import NavigationButton from '../buttons/navigationButton/NavigationButton';
import style from './carousel.module.scss';

interface CarouselNavigationProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
  variant: 'variant_one' | 'variant_two';
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  direction,
  onClick,
  disabled,
  variant,
}) => {
  return (
    <div
      className={`${
        direction === 'prev'
          ? style.prev_button_container
          : style.next_button_container
      } ${style[variant]}`}
    >
      <NavigationButton
        direction={direction}
        navigationButtonHandler={onClick}
        disabled={disabled}
      />
    </div>
  );
};

export default CarouselNavigation;
