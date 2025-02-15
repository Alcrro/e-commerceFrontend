import React, { ReactNode } from 'react';
import style from './profileMainLayout.module.scss';

const ProfileMainLayout = ({ children }: { children: ReactNode }) => {
  return <div className={style.profile_main_layout}>{children}</div>;
};

export default ProfileMainLayout;
