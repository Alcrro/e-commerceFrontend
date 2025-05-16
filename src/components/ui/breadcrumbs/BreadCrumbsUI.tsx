import React from 'react';
import style from './breadcrumb.module.scss';
const BreadCrumbsUI = () => {
  return (
    <div className={style.breadcrumb_outer_holder}>
      <div className={style.breadcrumb_inner}>
        <ul className={style.breadcrumb_list}>
          <li>category</li>
          <li>subcategory 1</li>
          <li>subcategory 2</li>
          <li>subcategory 3</li>
        </ul>
      </div>
      <div className={style.product_code_display}>Product cod: GR212</div>
    </div>
  );
};

export default BreadCrumbsUI;
