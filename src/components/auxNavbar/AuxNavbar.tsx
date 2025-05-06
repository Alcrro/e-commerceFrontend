import React from 'react';
import style from './auxNavbar.module.scss';
import { secondDepartmentMenu } from '@/constants/secondDepartmentMenu';
import AuxNavbarMenuResponsive from './AuxNavbarMenuResponsive';
import AuxProductsMaiDepartmentList from './AuxProductsMaindepartmentList';
import RootProductButton from './rootProductButton/RootProductButton';
import { headers } from 'next/headers';

const AuxNavbar = async () => {
  const pathname = (await headers()).get('x-pathname');

  return (
    <div className={style.aux_navbar_container}>
      <div className={style.aux_navbar_inner}>
        <div
          className={`${style.department_menu} ${pathname === '/' ? style.is_exclude : style.is_not_excluded}`}
        >
          <RootProductButton />
          {pathname !== '/' && (
            <div className={style.products_main_department_list}>
              <AuxProductsMaiDepartmentList />
            </div>
          )}
        </div>

        <AuxNavbarMenuResponsive secondDepartmentMenu={secondDepartmentMenu} />
      </div>
    </div>
  );
};

export default AuxNavbar;
