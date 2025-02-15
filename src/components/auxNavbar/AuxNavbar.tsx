import React from 'react';
import style from './auxNavbar.module.scss';
import ProductButton from '../buttons/productButton/ProductButton';

import Link from 'next/link';
import { departments } from '@/constants/departmentMenu';

const AuxNavbar = () => {
  return (
    <div className={style.aux_navbar_container}>
      <div className={style.aux_navbar_inner}>
        <div className={style.department_menu}>
          <div className={style.aux_navbar_product_button_container}>
            <ProductButton />
          </div>
          <div className={style.product_department_list}>
            <ul>
              {departments.map((department) => (
                <li key={department.id}>
                  <Link
                    href={`/${department.link} `}
                    className={`${style.departmentItem} ${style[department.icon]}`}
                  >
                    <div className={`${style.text}`}>{department.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.aux_navbar_list_inner}></div>
      </div>
    </div>
  );
};

export default AuxNavbar;
