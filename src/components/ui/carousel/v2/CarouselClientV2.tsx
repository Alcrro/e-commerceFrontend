'use client';

import { useRef, useEffect, useState } from 'react';
import SuggestionProductCard from '../../suggestion/SuggestionProductCard';
import { ICartProductList } from '@/types/CartProductList';

interface CarouselClientProps {
  products: any[];
  favorites: ICartProductList[];
}

const CarouselClient: React.FC<CarouselClientProps> = ({
  products,
  favorites,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(250); // Default card width
  const [visibleItems, setVisibleItems] = useState(1);

  // Dynamically calculate card width & number of visible items
  useEffect(() => {
    const updateCardSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const minCardWidth = 193;
        const maxCardWidth = 233;
        const gap = 6; // 6px gap between items

        // Calculate how many items fit including gaps
        let itemsPerView =
          Math.floor((containerWidth + gap) / (maxCardWidth + gap)) || 1;

        // Adjust width so that it fills the available space properly
        let adjustedCardWidth =
          (containerWidth - (itemsPerView - 1) * gap) / itemsPerView;

        // Ensure we do not go below minCardWidth
        if (adjustedCardWidth < minCardWidth) {
          itemsPerView = Math.floor(
            (containerWidth + gap) / (minCardWidth + gap)
          );
          adjustedCardWidth =
            (containerWidth - (itemsPerView - 1) * gap) / itemsPerView;
        }

        // Ensure last item does not get cut off
        const totalItemsWidth =
          itemsPerView * adjustedCardWidth + (itemsPerView - 1) * gap;
        if (totalItemsWidth > containerWidth) {
          itemsPerView -= 1;
          adjustedCardWidth =
            (containerWidth - (itemsPerView - 1) * gap) / itemsPerView;
        }

        setVisibleItems(itemsPerView);
        setCardWidth(adjustedCardWidth);
      }
    };
    updateCardSize();
    window.addEventListener('resize', updateCardSize);
    return () => window.removeEventListener('resize', updateCardSize);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -cardWidth * visibleItems,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: cardWidth * visibleItems,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full my-4 overflow-hidden bg-[var(--container-bg-between)] p-1">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 z-10"
      >
        {'<'}
      </button>

      {/* Scrollable Product Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-hidden no-scrollbar scroll-smooth gap-[6px]"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.map((product) => {
          const isInFavorites = favorites.some(
            (favorite) => favorite.productId === product._id
          );

          return (
            <div
              key={product._id}
              className="flex-shrink-0 flex justify-center"
              style={{ width: `${cardWidth}px`, scrollSnapAlign: 'start' }}
            >
              <SuggestionProductCard
                product={product}
                isInFavorites={isInFavorites}
                isInCart={[]}
              />
            </div>
          );
        })}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 z-10"
      >
        {'>'}
      </button>
    </div>
  );
};

export default CarouselClient;
