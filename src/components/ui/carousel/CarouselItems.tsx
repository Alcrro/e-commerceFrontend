import React from 'react';
import style from './carousel.module.scss';

interface CarouselItemsProps<T> {
  items: T[];
  startIndex: number;
  visibleItems: number;
  renderItem: (item: T, allItems: T[]) => React.ReactNode;
  getKey?: (item: T) => string | number; // Optional unique key function
}

const CarouselItems = <T,>({
  items,
  startIndex,
  visibleItems,
  renderItem,
  getKey,
}: CarouselItemsProps<T>) => {
  return (
    <div className={style.carousel_content}>
      {items
        .slice(startIndex, Math.min(startIndex + visibleItems, items.length)) // Prevent overflow
        .map((item, index) => (
          <div
            key={getKey ? getKey(item) : index}
            className={style.carousel_item}
          >
            {renderItem(item, items)}
          </div>
        ))}
    </div>
  );
};

export default CarouselItems;
