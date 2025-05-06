'use client';
import React, { useState } from 'react';
import style from './navigationButton.module.scss';
import ButtonLink from '../defaultButton/Button';

type ButtonDirection = 'next' | 'prev';

const NavigationButton = ({
  direction,
  navigationButtonHandler,
  disabled,
}: {
  direction: ButtonDirection;
  navigationButtonHandler: () => void;
  disabled: boolean;
}) => {
  const icon =
    direction === 'next' ? (
      <div
        className={`${style.next_btn} ${style.right} ${disabled && style.isDisabled}`}
      />
    ) : (
      <div
        className={`${style.prev_btn} ${style.left} ${disabled && style.isDisabled}`}
      />
    );

  return (
    <ButtonLink
      variant="none"
      label=""
      onClick={navigationButtonHandler}
      ariaLabel={direction === 'next' ? 'Next image' : 'Previous image'}
      classname="p-0"
      icon={icon}
      disabled={disabled}
    />
  );
};

export default NavigationButton;
