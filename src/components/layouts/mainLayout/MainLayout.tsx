import React, { ReactNode } from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import style from './layout.module.scss';
import AuxNavbar from '@/components/auxNavbar/AuxNavbar';
const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <AuxNavbar />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
