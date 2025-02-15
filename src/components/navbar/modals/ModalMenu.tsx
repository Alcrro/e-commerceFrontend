import React, { ReactNode } from 'react';
import style from './modalMenu.module.scss';

const ModalMenu = ({ children }: { children: ReactNode }) => {
  return <div className={`${style.account_inner} relative`}>{children}</div>;
};

export default ModalMenu;
