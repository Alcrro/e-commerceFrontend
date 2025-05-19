'use client';
import React, { useRef, useState } from 'react';
import Logo from './logo/Logo';
import style from './navbar.module.scss';
import SearchBox from '../ui/searchBox/SearchBox';
import Menu from './menu/Menu';
import ThemeToggle from '../ThemeToggle';
import ToggleSearchButton from '../ui/buttons/ToggleSearchButton';
import DropdownProductsDepartment from '../ui/buttons/dropdownProductsDepartment/DropdownProductsDepartment';
import SidebarNavbar from '../ui/mobile/sidebarNavbar/SidebarNavbar';

interface INavbarClientProps {
  user: IProfile;
  notifications: INotification[];
  favorites: IFavorite;
  carts: ICart;
}

const NavbarClient = ({
  user,
  notifications,
  favorites,
  carts,
}: INavbarClientProps) => {
  const toggleButtonRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`nav navbar relative ${isOpen && 'before:content-[" "] before:fixed before:w-dvw before:h-dvh before:bg-[var(--background)] before:opacity-60  before:z-[9!important]'}`}
    >
      <div className={`${style.navbar_container}`}>
        <div className="flex items-center gap-2">
          <div className="sm:hidden" onClick={() => setIsOpen((prev) => !prev)}>
            <DropdownProductsDepartment />
          </div>
          <Logo />
          <div className="lg:hidden" ref={toggleButtonRef}>
            <ToggleSearchButton />
          </div>
        </div>
        <SearchBox ignoreRefs={[toggleButtonRef]} />
        <div className="max-sm:hidden ml-auto">
          <ThemeToggle />
        </div>
        <Menu
          user={user}
          notifications={notifications}
          favorite={favorites}
          cart={carts}
        />
      </div>
      {/* Mobile Sidebar */}
      <SidebarNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default NavbarClient;
