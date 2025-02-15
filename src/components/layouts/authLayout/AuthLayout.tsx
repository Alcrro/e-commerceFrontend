import React from 'react';
import style from './layout.module.scss';
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.auth_layout_container}>
      <div className={style.auth_layout}>{children}</div>
    </div>
  );
};

export default AuthLayout;
