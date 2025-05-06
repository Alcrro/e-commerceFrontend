import React, { ReactNode } from 'react';
import style from './modalElementsList.module.scss';

const ModalElementsList = ({ children }: { children: ReactNode }) => {
  return <div className={`${style.modal_item}`}>{children}</div>;
};

export default ModalElementsList;
