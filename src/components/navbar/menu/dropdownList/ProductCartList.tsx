import RemoveProduct from '@/components/ui/buttons/removeProduct/RemoveProduct';
import CustomIcon from '@/components/ui/icon/defaultIcon/Icon';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const ProductCartList = ({
  products,
  type,
}: {
  products: Array<IBaseProduct & { quantity?: number }>;
  type: 'favorite' | 'shopping';
}) => {
  return products?.map((product) => {
    return (
      <Link
        href={`/${product._id}`}
        className="flex gap-1 justify-between relative group/favorite hover:bg-[var(--container-bg-between)] p-2 rounded-md transition-colors border-b border-b-gray-400 mb-1"
        key={product._id}
      >
        <CustomIcon
          srcIsEnabled={true}
          src={`/${product.thumbnail}`}
          size={35}
          classname="rounded-xl"
        />

        <div className="description max-w-22 text-sm">{product.name}</div>
        {product.quantity && (
          <div className="quantity">x{product.quantity}</div>
        )}
        <div className=" flex flex-col gap-2">
          <div className="price text-sm">{product.price}</div>

          <div
            className="remove_product flex justify-center opacity-0 group-hover/favorite:opacity-100 transition-opacity duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <RemoveProduct productId={product._id} type={type} />
          </div>
        </div>
      </Link>
    );
  });
};

export default ProductCartList;
