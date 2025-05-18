import RemoveProduct from '@/components/ui/buttons/removeProduct/RemoveProduct';
import CustomIcon from '@/components/ui/icon/defaultIcon/Icon';
import React from 'react';

const FavoriteList = ({ favorites }: { favorites: IFavorite }) => {
  return favorites.productCartList.map((favorite) =>
    favorite.product.map((product) => (
      <div
        className="flex gap-1 justify-between relative group/favorite hover:bg-[var(--container-bg-between)] p-2 rounded-md transition-colors border-b border-b-gray-400"
        key={product._id}
      >
        <CustomIcon
          srcIsEnabled={true}
          src={`/${product.thumbnail}`}
          size={35}
          classname="rounded-xl"
        />

        <div className="description max-w-22 text-sm">{product.name}</div>

        <div className="text-center">
          <div className="price text-sm">{product.price}</div>

          <div className="remove_product opacity-0 group-hover/favorite:opacity-100 transition-opacity duration-200">
            <RemoveProduct productId={product._id} type="favorite" />
          </div>
        </div>
      </div>
    ))
  );
};

export default FavoriteList;
