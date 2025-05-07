import { ReactNode } from 'react';
import style from './productSecondaryLayout.module.scss';
const ProductSecondaryLayout = ({ children }: { children: ReactNode }) => {
  return <div className={style.product_secondary_layout}>{children}</div>;
};

export default ProductSecondaryLayout;
