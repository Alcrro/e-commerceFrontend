'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import NavigationButton from '../buttons/navigationButton/NavigationButton';
import style from './carousel.module.scss';

interface CarouselProps<T> {
  items?: T[];
  renderItem: (item: T) => React.ReactNode;
  max_item_width?: number;
  infiniteLoop?: boolean;
  autoPlayInterval?: number;
  onSlideChange?: (index: number) => void;
  variant: 'variant_one' | 'variant_two';
}

const Carousel = <T,>({
  items = [],
  renderItem,
  max_item_width = 233,
  infiniteLoop = false,
  autoPlayInterval,
  onSlideChange,
  variant,
}: CarouselProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [cardWidth, setCardWidth] = useState(233);
  const [visibleItems, setVisibleItems] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const clonedItems = infiniteLoop ? [...items, ...items, ...items] : items;
  const totalItems = clonedItems.length;
  const originalItemCount = items.length;

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 300); // You can adjust this delay
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const updateCardSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const minCardWidth = 193;
        const maxCardWidth = max_item_width;
        const gap = 6;

        let itemsPerView = infiniteLoop
          ? 1
          : Math.floor((containerWidth + gap) / (maxCardWidth + gap)) || 1;
        let adjustedCardWidth =
          (containerWidth - (itemsPerView - 1) * gap) / itemsPerView;

        if (adjustedCardWidth < minCardWidth) {
          itemsPerView = infiniteLoop
            ? 1
            : Math.floor((containerWidth + gap) / (minCardWidth + gap));
          adjustedCardWidth =
            (containerWidth - (itemsPerView - 1) * gap) / itemsPerView;
        }

        setVisibleItems(itemsPerView);
        setCardWidth(adjustedCardWidth);
      }
    };

    const timeout = setTimeout(updateCardSize, 300);
    window.addEventListener('resize', updateCardSize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updateCardSize);
    };
  }, [infiniteLoop, max_item_width]);

  // Center carousel at the middle of cloned items in infinite loop mode
  useEffect(() => {
    if (!infiniteLoop || !containerRef.current) return;
    const middleIndex = Math.floor(originalItemCount);
    containerRef.current.scrollLeft = middleIndex * cardWidth;
  }, [cardWidth, infiniteLoop, originalItemCount]);

  const updateCurrentIndex = useCallback(() => {
    if (!containerRef.current) return; // Prevents null errors
    const newIndex =
      Math.round(containerRef.current.scrollLeft / cardWidth) %
      originalItemCount;
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  }, [cardWidth, originalItemCount, onSlideChange]);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -cardWidth, behavior: 'smooth' });

    setTimeout(updateCurrentIndex, 300);
  };

  // Wrap scrollRight in useCallback
  const scrollRight = useCallback(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });

    setTimeout(() => {
      updateCurrentIndex();
      if (
        infiniteLoop &&
        containerRef.current?.scrollLeft! >=
          (totalItems - visibleItems) * cardWidth
      ) {
        if (containerRef.current) {
          containerRef.current.style.scrollBehavior = 'auto';
          containerRef.current.scrollLeft = originalItemCount * cardWidth;
          containerRef.current.style.scrollBehavior = 'smooth';
        }
      }
    }, 300);
  }, [
    cardWidth,
    infiniteLoop,
    totalItems,
    visibleItems,
    originalItemCount,
    updateCurrentIndex,
  ]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!infiniteLoop || !autoPlayInterval) return;

    autoPlayRef.current = setInterval(scrollRight, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlayInterval, infiniteLoop, cardWidth, scrollRight]);

  const handleMouseEnter = () =>
    autoPlayRef.current && clearInterval(autoPlayRef.current);

  const handleMouseLeave = () => {
    if (autoPlayInterval && infiniteLoop) {
      autoPlayRef.current = setInterval(scrollRight, autoPlayInterval);
    }
  };

  return (
    <div
      className={`${style.carousel_container} relative w-full p-1 bg-[var(--container-bg-between)] ${
        isLoaded ? style.loaded : style.loading
      }`}
    >
      <div
        className={`${style.carousel_inner} relative`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Scroll Button */}
        <div className={`${style.prev_button_container} ${style[variant]}`}>
          <NavigationButton
            navigationButtonHandler={scrollLeft}
            direction={'prev'}
            disabled={false}
          />
        </div>

        {/* Scrollable Items Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-hidden no-scrollbar scroll-smooth gap-[6px]"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {clonedItems.map((item, index) => {
            const realIndex = index % originalItemCount; // Get actual index

            return (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center"
                style={{ width: `${cardWidth}px`, scrollSnapAlign: 'start' }}
              >
                {renderItem(items[realIndex])}{' '}
                {/* Ensure the correct item is rendered */}
              </div>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <div className={`${style.next_button_container} ${style[variant]}`}>
          <NavigationButton
            navigationButtonHandler={scrollRight}
            direction={'next'}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
