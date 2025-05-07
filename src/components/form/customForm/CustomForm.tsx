import React, { HTMLInputTypeAttribute } from 'react';
import style from './customForm.module.scss';

interface ICustomForm {
  inputType: HTMLInputTypeAttribute;
  placeholder: string;
  label: string;
  name: string;
}
const CustomForm = ({ inputType, placeholder, label, name }: ICustomForm) => {
  return (
    <div className={style.label_group}>
      {label && <label htmlFor={name}>{label}:</label>}
      <input
        type={inputType}
        placeholder={placeholder}
        className={style.input_field}
        name={name}
      />
    </div>
  );
};

export default CustomForm;
