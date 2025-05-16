import React from 'react';
import style from './myAccountSkeleton.module.scss';
import SkeletonLine from '../../defaultSkeletonLine/SkeletonLine';
const MyAccountSkeleton = () => {
  return (
    <div className={style.my_account_container}>
      <div className={style.my_account_title}>My account</div>
      <div className={style.my_account_inner}>
        <div className={style.my_account_image}>
          <SkeletonLine />
        </div>
        <div className={style.my_account_details}>
          <div className={style.col}>
            <span className={style.field_name}>nickname:</span>
            <span className={style.field_value}></span>
          </div>
          <div className={style.col}>
            <span className={style.field_name}>email:</span>
            <span className={style.field_value}></span>
          </div>
          <div className={style.col}>
            <span className={style.field_name}>nickname:</span>
            <span className={style.field_value}></span>
          </div>
        </div>
        <div className={style.my_account_history}>
          <div className={style.text}></div>
        </div>
      </div>

      <div className={style.my_account_footer}>
        <div className={style.edit_my_account_button}></div>
      </div>
    </div>
  );
};

export default MyAccountSkeleton;
