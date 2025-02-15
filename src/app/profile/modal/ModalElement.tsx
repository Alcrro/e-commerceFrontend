'use client';
import React, { ReactNode } from 'react';
import style from './modalElement.module.scss';
import ModalCloseButton from '@/components/buttons/ModalCloseButton';

const ModalElement = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.modal_container}>
      <div className={style.modal_header}>
        <ModalCloseButton />
      </div>
      <div className={style.profile_modal_body}>{children}</div>
    </div>
  );
};

export default ModalElement;
