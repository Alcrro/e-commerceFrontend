import React from 'react';
import Logo from './logo/Logo';
import Menu from './menu/items/Menu';
import style from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className="nav navbar">
      <div className={style.navbar_container}>
        <Logo />
        <Menu />
      </div>
    </nav>
  );
};
export default Navbar;
