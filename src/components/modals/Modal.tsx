import React, { ReactNode } from 'react';
import styleModal from './modal.module.scss';

// Utility to extract valid SCSS class names (keys) from styleModal
type ExtractClassNames<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

type ClassName = ExtractClassNames<typeof styleModal>;

interface IModalProps {
  children: ReactNode;
  classname: ClassName; // This will be a specific valid SCSS class name
}

const Modal = ({ children, classname }: IModalProps) => {
  return <div className={`${styleModal[classname]}`}>{children}</div>;
};

export default Modal;
