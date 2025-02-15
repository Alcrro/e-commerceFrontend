import React from 'react';
import style from './myaccount.module.scss';
import ButtonLink from '@/components/buttons/defaultButton/Button';
import Image from 'next/image';

const MyAccount = () => {
  return (
    <div className={style.my_account_container}>
      <div className={style.my_account_title}>MyAccount</div>
      <div className={style.my_account_inner}>
        <div className={style.my_account_image}>
          <Image src={'/me.png'} alt="" width={1000} height={1000} />
        </div>
        <div className={style.my_account_details}></div>
        <div className={style.my_account_history}>
          <div className={style.text}>Thx for join us</div>
        </div>
      </div>

      <div className={style.my_account_footer}>
        <div className={style.edit_my_account_button}>
          <ButtonLink
            label={'Edit my account'}
            isLink={true}
            href="/profile/myaccount/edit-myaccount"
            variant="none"
          />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
