import React from 'react';
import style from './mainDepartmentListAd.module.scss';
import AuxProductsMainDepartmentList from '@/components/auxNavbar/AuxProductsMaindepartmentList';
const MainDepartmentListAd = () => {
  return (
    <div className={style.main_department_list_ad_container}>
      <AuxProductsMainDepartmentList active={true} />
    </div>
  );
};

export default MainDepartmentListAd;
