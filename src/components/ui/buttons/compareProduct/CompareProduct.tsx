'use client';

import React, { useState } from 'react';
import ButtonLink from '../defaultButton/Button';
import style from './compareProduct.module.scss';
const CompareProduct = ({ product }: { product: IProduct }) => {
  const [exist, setExist] = useState<IProduct[]>([]);

  if (!product) return null;

  const addToArrayHandler = () => {
    setExist((prev) => {
      const isAlreadyAdded = prev.some((item) => item._id === product._id);
      if (isAlreadyAdded) {
        return prev;
      }

      return [...prev, product];
    });
  };

  const isChecked = exist.some((item) => item._id === product._id);

  const icon = isChecked ? (
    <div className={style.isChecked}>compare</div>
  ) : (
    <div className={style.isDefault}>compare</div>
  );
  return (
    <div className="bg-gray-300 p-1 text-sm rounded-xl font-bold text-black">
      <ButtonLink
        variant="none"
        label=""
        ariaLabel="compare"
        icon={icon}
        onClick={addToArrayHandler}
      />
    </div>
  );
};

export default CompareProduct;
