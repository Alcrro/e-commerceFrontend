import React, { useState } from 'react';
import style from './carouselAd.module.scss';
import Carousel from '../ui/carousel/Carousel';
import AdImage from './AdImage';
import Dots from './dots/Dots';

const CarouselAd = () => {
  const ads = [
    'me.png',
    'me2.jpg',
    'me3.jpg',
    'photo.jpg',
    'photo2.jpg',
    'photo3.jpg',
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={style.carousel_ad_container}>
      <Carousel
        items={ads}
        renderItem={(item) => <AdImage image={item} />}
        infiniteLoop={true}
        autoPlayInterval={5000}
        onSlideChange={setActiveIndex}
        variant="variant_one"
      />
      <Dots ads={ads} activeIndex={activeIndex} />
    </div>
  );
};

export default CarouselAd;
