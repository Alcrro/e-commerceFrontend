import Link from 'next/link';
import React from 'react';
import type { ReactNode } from 'react';
import style from './menuItem.module.scss';
import CaretDropdown from '@/components/ui/icon/CaretDropdown';
import CustomIcon from '@/components/ui/icon/defaultIcon/Icon';

interface DropdownItem {
  title: string;
  list: ReactNode;
  button?: ReactNode;
  items?: { label: string; href: string }[];
}

interface MenuItemProps {
  label: string;
  link: string;
  description?: string;
  icon: ReactNode;
  jewel: ReactNode;
  dropdown?: DropdownItem[];
  alignRight?: boolean; // ✅ new prop
}

const MenuItem = ({
  label,
  link,
  icon,
  jewel,
  dropdown = [],
  alignRight,
}: MenuItemProps) => {
  return (
    <div className="relative group px-2">
      <Link href={link}>
        <div className="flex items-center h-[45px] space-x-2 cursor-pointer">
          <div className="image-container relative">
            {icon} {jewel}
          </div>

          <span className="hidden md:block">{label}</span>
          <CaretDropdown className="group-hover:rotate-180 hidden md:block" />
        </div>
      </Link>

      {dropdown.length > 0 && (
        <div
          className={`${style.dropdown_menu} absolute top-[full] ${
            alignRight
              ? 'right-0 left-auto min-[1735px]:left-1/2 min-[1735px]:-translate-x-1/2'
              : 'right-0 left-auto md:left-1/2 md:-translate-x-1/2'
          } opacity-0 scale-95 pointer-events-none 
     group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto 
     translate-y-2 group-hover:translate-y-4
     transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
     bg-[var(--background)] shadow-md rounded-lg z-10 min-w-[300px] p-2`}
        >
          {' '}
          {dropdown.map((section, i) => (
            <div
              key={section.title + i}
              className="flex flex-col gap-2 w-full relative z-40"
            >
              <p className="px-2 py-2 text-sm font-semibold text-center">
                {section.title}
              </p>

              {/* Render any custom list */}
              <div
                className={`${style.list} min-h-[260px] max-h-[260px] overflow-x-hidden overflow-y-auto px-1`}
              >
                {section.list}
              </div>

              {/* Render a button (e.g. your LogoutButton) */}
              {section.button}

              {/* Render link items */}
              {section.items && (
                <div className="px-2 mt-2 text-center">
                  {section.items.map((item) => (
                    <Link key={item.label} href={item.href}>
                      <div className="block py-1 hover:underline">
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
