'use client';
import Link from 'next/link';
import React from 'react';
import style from './sidebarLink.module.scss';
import { usePathname } from 'next/navigation';

const SidebarLink = ({
  item,
}: {
  item: { label: string; href: string; iconClass: string };
}) => {
  const pathname = usePathname();

  const containCurrentPath = pathname.includes(item.href);

  return (
    <Link
      href={item.href}
      className={`${style.menu_item} ${style[item.iconClass]} ${containCurrentPath ? style.active : ''}`}
    >
      {item.label}
    </Link>
  );
};

export default SidebarLink;
