import React from 'react';
import style from './skeletonProductCard.module.scss';
import SkeletonLine from '../defaultSkeletonLine/SkeletonLine';

const SkeletonProductCard = () => {
  return (
    <div className={style.product_card}>
      <div className={`${style.group_container} relative`}>
        <div className="h-full absolute top-[5px] right-0 ">
          <SkeletonLine className="w-[25px] h-[25px]" />
        </div>
        <SkeletonLine className="mx-auto m-4 w-[175px] h-[175px]" />
      </div>
      <div className={style.description_container}>
        <div className="h-full">
          <SkeletonLine className="mb-2 w-[100%] h-[12px]" />
          <SkeletonLine className="w-[75%] h-[12px]" />
        </div>
      </div>
      <div className="w-fit flex gap-1">
        <SkeletonLine className="w-24 h-6" />
      </div>

      <SkeletonLine className="w-24 h-3" />
      <SkeletonLine className="w-24 h-3" />

      <div className="button w-12 ml-auto">
        <SkeletonLine className="h-10" />
      </div>
    </div>
  );
};

export default SkeletonProductCard;
