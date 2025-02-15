import { IProfile } from '@/service/userApi';
import MenuItem from '../../MenuItem';
import MenuItemTitle from '../../MenuItemTitle';
import { INotification } from '@/service/notificationApi';

function Account<T>({
  menu,
  userProfile,
  fetchData,
}: {
  menu: { label: 'account' | 'favorite' | 'cart'; link: string };
  userProfile: IProfile | null;
  fetchData: INotification[] | null;
}) {
  if (!userProfile) {
    return <MenuItemTitle menu={menu} userProfile={userProfile} />;
  }

  return (
    <MenuItem<'account'>
      menu={menu}
      userProfile={userProfile}
      fetchData={fetchData}
    />
  );
}

export default Account;
