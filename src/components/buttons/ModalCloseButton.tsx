'use client';
import ButtonLink from '@/components/buttons/defaultButton/Button';
import React from 'react';

const ModalCloseButton = () => {
  return (
    <div className="close_btn">
      <ButtonLink
        label=""
        variant="none"
        onClick={() => window.history.back()}
        classname="close_modal"
      />
    </div>
  );
};

export default ModalCloseButton;
