import React from 'react';
import style from './myaccount.module.scss';
import ButtonLink from '@/components/ui/buttons/defaultButton/Button';
import Image from 'next/image';
import CustomForm from '@/components/form/customForm/CustomForm';

const MyAccount = ({ profile }: { profile: IProfile | null }) => {
  return (
    <div className={style.my_account_container}>
      <div className={style.my_account_title}>My account</div>
      <div className={style.my_account_inner}>
        <div className={style.my_account_image}>
          <Image src={'/me3.jpg'} alt="" width={1000} height={1000} />
        </div>
        <div className={style.my_account_details}>
          <div className={style.col}>
            <span className={style.field_name}>nickname:</span>
            <span className={style.field_value}>{'Alexandru Roventa'}</span>
          </div>
          <div className={style.col}>
            <span className={style.field_name}>email:</span>
            <span className={style.field_value}>
              {'alex.roventa94@google.com'}
            </span>
          </div>
          <div className={style.col}>
            <span className={style.field_name}>nickname:</span>
            <span className={style.field_value}>{'Alexandru Roventa'}</span>
          </div>
        </div>
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
            classname="mt-4"
            ariaLabel="edit button"
          />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
