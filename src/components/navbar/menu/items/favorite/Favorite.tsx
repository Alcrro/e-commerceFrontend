import { IProfile } from '@/service/userApi';
import MenuItem from '../../MenuItem';
import MenuItemTitle from '../../MenuItemTitle';
import { IFavorite, IProductFavoriteList } from '@/service/favoriteApi';

interface Props {
  menu: { label: 'account' | 'favorite' | 'cart'; link: string };
  userProfile: IProfile | null;
  fetchData: IProductFavoriteList[] | null;
}
function Favorite({ menu, userProfile, fetchData }: Props) {
  if (!userProfile) {
    return <MenuItemTitle menu={menu} userProfile={userProfile} />;
  }
  return (
    <MenuItem<'favorite'>
      menu={menu}
      userProfile={userProfile}
      fetchData={fetchData}
    />
  );
}

export default Favorite;
