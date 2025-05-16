import React from 'react';
import SkeletonLine from '../defaultSkeletonLine/SkeletonLine';
import style from './caroAdSkeleton.module.scss';
const CarouselAdSkeleton = () => {
  return (
    <div className={style.carousel_ad_container}>
      <div className={style.image}>
        <SkeletonLine className="bg-[var(--container-bg)]" />
      </div>
      <div className={style.prev_button}></div>
      <div className={style.next_button}></div>

      <div className={style.dots_container}>
        <div className={style.dot_current}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
    </div>
  );
};

export default CarouselAdSkeleton;
