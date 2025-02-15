import style from './menuItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { IProfile } from '@/service/userApi';
import Modal from '@/components/modals/Modal';
import DropdownList from './dropdownList/DropdownList';
import MenuItemTitle from './MenuItemTitle';

import { INotification } from '@/service/notificationApi';

// ✅ Define an explicit type mapping for `fetchData`
type FetchDataType = {
  account: INotification[] | null; // No fetchData for account
  favorite: ICartProductList[] | null;
  cart: ICartProductList[] | null;
};

interface BaseMenuProps {
  menu: { label: keyof FetchDataType; link: string };
  userProfile: IProfile | null;
}

// ✅ Ensure `fetchData` is **only required for favorite & cart**
type MenuProps<T extends keyof FetchDataType> = BaseMenuProps & {
  fetchData: FetchDataType[T];
};

export default function MenuItem<T extends keyof FetchDataType>({
  menu,
  userProfile,
  fetchData,
}: MenuProps<T>) {
  return (
    <div className={`${style[menu.label]}_inner relative`}>
      {menu.label === 'account' ? (
        <Link href={`/profile`} className={style[menu.label]}>
          <Image
            src={userProfile?.avatarUrl || '/default-avatar.png'}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className={`${style[menu.label]}_username`}>
            {userProfile?.username || 'Guest'}
          </div>
        </Link>
      ) : (
        <MenuItemTitle menu={menu} userProfile={userProfile} />
      )}

      {/* ✅ Only render Modal if `fetchData` exists (i.e., not account) */}
      {fetchData && (
        <Modal classname={`${menu.label}_modal`}>
          <DropdownList
            menu={menu}
            fetchData={fetchData} // ✅ TypeScript now correctly infers type
            usernameProfile={userProfile?.username || null}
          />
        </Modal>
      )}
    </div>
  );
}
