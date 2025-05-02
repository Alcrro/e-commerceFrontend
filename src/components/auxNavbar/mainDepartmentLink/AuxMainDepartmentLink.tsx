import { IMainDepartments } from '@/constants/mainDepartmentMenu';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import style from './auxMainDepartmentLink.module.scss';
const AuxMainDepartmentLink = <T,>({
  item,
  active,
  onHover,
  renderItem,
}: {
  item: IMainDepartments;
  active: boolean | undefined;
  onHover: (link: string) => void;
  renderItem?: (item: T) => ReactNode;
}) => {
  return (
    <Link
      href={`/main-department/${item.link}`}
      className={`${style.elementItem} ${active && style.isActive}  ${item.icon && style[item.icon]}`}
    >
      <div className={style.text} onMouseEnter={() => onHover(item.link)}>
        {item.name}
      </div>
    </Link>
  );
};

export default AuxMainDepartmentLink;
