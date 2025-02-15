'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import style from './favoriteAuxTab.module.scss';
import Link from 'next/link';
import generateLinkFromText from '@/utils/generLinkFromText';
import { usePathname } from 'next/navigation';

interface IAuxTab {
  tab: string; // ✅ Accept an array of objects with `label`
}
const FavoriteAuxTab = ({ tab }: IAuxTab) => {
  const pathname = usePathname();
  const t = pathname.split('/');

  return (
    <Link
      href={`/profile/favorite/${generateLinkFromText(tab)}-list`}
      className={`${style.tab} ${tab.toLocaleLowerCase() === t[t.length - 1].replace('-list', '') && t.length > 3 ? style.active : ''}`}
    >
      {tab}
    </Link>
  );
};

export default FavoriteAuxTab;
