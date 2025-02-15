import React from 'react';
import styles from './restrictProduct.module.scss';
const RestrictProduct = () => {
  const products = [
    {
      id: 0,
      restricted: true,
      name: 'IPhone',
      price: 2000,
      restrictedBy: 'Smartphones',
    },
  ];
  return (
    <div className={styles.container}>
      <h1>Restricted Products</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`${styles.product} ${product.restricted ? styles.restricted : ''}`}
          >
            <div className={styles.category}>{product.restrictedBy}</div>
            <div className={styles.productName}>{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestrictProduct;
