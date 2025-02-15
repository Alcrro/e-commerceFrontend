import React from 'react';
import style from './auxTab.module.scss';
import Link from 'next/link';
const AuxTab = () => {
  return (
    <div className={style.aux_profile_tab_outer}>
      <div className={style.aux_profile_tab_inner}>
        <ul>
          <li>
            <Link href={'/profile/my-wallet'} className={style.icon_wallet}>
              <div className={style.wallet_description}>my wallet</div>
            </Link>
          </li>
          <li>
            <Link href={'/profile/my-support'} className={style.icon_support}>
              <div className={style.support_description}>support</div>
            </Link>
          </li>
          <li>
            <Link href={'/profile/my-support'} className={style.icon_order}>
              <div className={style.support_order}>order</div>
            </Link>
          </li>
          <li>
            <Link href={'/profile/my-support'} className={style.icon_support}>
              <div className={style.support_description}>support</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuxTab;
