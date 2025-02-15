import React from 'react';
import ButtonLink from '../buttons/defaultButton/Button';
import style from './profileModalButton.module.scss';
const UpdateProfileAddressButton = ({ label }: { label: string }) => {
  return (
    <div className={style.update_address_btn}>
      <ButtonLink label={label} usedForm={true} />
      <ButtonLink label={'Close'} onClick={() => window.history.back()} />
    </div>
  );
};

export default UpdateProfileAddressButton;
