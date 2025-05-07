import React from 'react';
import style from './adImage.module.scss';
import Image from 'next/image';
const AdImage = ({ image }: { image: string }) => {
  return (
    <div className={`${style.ad_content} w-full h-[360x]`}>
      <Image src={`/${image}`} alt="ad" width={1000} height={1000} />
    </div>
  );
};

export default AdImage;
