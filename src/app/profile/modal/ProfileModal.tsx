import { ReactNode } from 'react';
import style from './profileModal.module.scss';
const ProfileModal = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.modal_wrapper}>
      <div className={style.overlay}></div>
      <div className={style.profile_modal}>{children}</div>;
    </div>
  );
};

export default ProfileModal;
