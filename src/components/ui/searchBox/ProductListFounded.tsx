import Image from 'next/image';
import CustomIcon from '../icon/defaultIcon/Icon';
import Link from 'next/link';

const ProductListFounded = ({
  products,
}: {
  products: IBaseProduct[] | null;
}) => {
  return (
    <div className="p-4">
      <ul className="flex flex-col gap-4 h-48 overflow-y-auto">
        {products?.map((product) => (
          <Link
            href={`${product._id}`}
            className="flex gap-2 items-center"
            key={product._id}
          >
            <div className="image_container w-10 h-10">
              <CustomIcon
                srcIsEnabled={true}
                src={`/${product.thumbnail}`}
                size={42}
                classname="rounded-lg"
              />
            </div>
            <div>{product.name}</div>
            <div>{product.brand}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductListFounded;
