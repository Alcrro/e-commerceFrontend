import Link from 'next/link';
import React from 'react';

const ProductListFounded = () => {
  return (
    <div className="p-4">
      <Link href={'/products'}>Product 1 </Link>
    </div>
  );
};

export default ProductListFounded;
