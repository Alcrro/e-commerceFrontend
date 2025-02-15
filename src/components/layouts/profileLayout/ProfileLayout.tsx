import React, { ReactNode } from 'react';
import style from './profileLayout.module.scss';

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return <div className={style.profile_layout_container}>{children}</div>;
};

export default ProfileLayout;
