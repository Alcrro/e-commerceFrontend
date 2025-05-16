import React from 'react';
import style from './dots.module.scss';

const Dots = ({ ads, activeIndex }: { ads: string[]; activeIndex: number }) => {
  return (
    <div className={style.ads_container}>
      <div className={style.ads_inner}>
        {ads.map((_, index) => (
          <div
            key={index}
            className={
              index === activeIndex ? style.dot_ad_current : style.dot_ad
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Dots;
