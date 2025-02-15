'use client';
import React, { useRef, useState } from 'react';
import style from './myaccountForm.module.scss';
import { useClickOutside } from '@/hooks/clickOutside';

const MyAccountForm = () => {
  const formRef = useRef<HTMLFormElement>(null!);

  useClickOutside(formRef, () => window.history.back());

  return (
    <form className={style.myaccount_form_container} ref={formRef}>
      <div className="form_group">
        <label htmlFor=""></label>
        <input type="text" />
      </div>
    </form>
  );
};

export default MyAccountForm;
