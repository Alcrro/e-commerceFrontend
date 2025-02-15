import React from 'react';
import style from './profileTab.module.scss';
import Image from 'next/image';
import { IProfile } from '@/service/userApi';
import ButtonLink from '@/components/buttons/defaultButton/Button';
import { getDate } from '@/utils/transformDate';

const ProfileTab = ({ user }: { user: IProfile | null }) => {
  return (
    <>
      <div className={style.profile_tab}>
        <div className={style.profile_tab_inner}>
          <div className={style.profile_tab_image}>
            <Image
              src={!user ? '/person.svg' : user?.avatarUrl}
              alt=""
              width={1000}
              height={1000}
              className={!user ? 'guest' : ''}
            />
          </div>
          <div className={style.profile_tab_name}>
            <div className={style.main_row}>
              {user?.username ? user.username : 'Guest'}
            </div>
            <div className={style.second_row}>
              {user?.dateJoined && getDate(user.dateJoined)}
            </div>
          </div>
          <div className={style.profile_tab_edit}>
            <ButtonLink
              isLink={true}
              href="/profile/myaccount/edit-myaccount"
              label=""
              variant="none"
              classname="profile_edit"
            />
          </div>
        </div>
        {/* <AuxTab /> */}
      </div>
      <div className={style.aux_profile_tab_high_dist}></div>
    </>
  );
};

export default ProfileTab;
