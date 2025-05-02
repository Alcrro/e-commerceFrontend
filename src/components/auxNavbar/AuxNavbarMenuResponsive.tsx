'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Department {
  id: number;
  label: string;
  link: string;
}

interface Props {
  secondDepartmentMenu: Department[];
}

const AuxNavbarMenuResponsive = ({ secondDepartmentMenu }: Props) => {
  const [visibleItems, setVisibleItems] =
    useState<Department[]>(secondDepartmentMenu);
  const [dropdownItems, setDropdownItems] = useState<Department[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const adjustMenu = () => {
      const container = containerRef.current;
      if (!container) return;

      const items = Array.from(container.children).filter(
        (child) => child.tagName === 'LI'
      ) as HTMLLIElement[];

      if (items.length === 0) return;

      let lastItemIndex = secondDepartmentMenu.length;
      let firstRowTop = items[0].offsetTop;

      for (let i = 0; i < items.length; i++) {
        if (items[i].offsetTop > firstRowTop) {
          lastItemIndex = i;
          break;
        }
      }

      setVisibleItems(secondDepartmentMenu.slice(0, lastItemIndex));
      setDropdownItems(secondDepartmentMenu.slice(lastItemIndex));
    };

    setTimeout(adjustMenu, 100); // Delay to allow styles to apply
    window.addEventListener('resize', adjustMenu);
    return () => window.removeEventListener('resize', adjustMenu);
  }, [secondDepartmentMenu]);

  return (
    <div className="w-full overflow-hidden">
      <ul
        ref={containerRef}
        className="flex flex-wrap align-bottom w-full items-center gap-1"
      >
        {visibleItems.map((item) => (
          <li
            key={item.id}
            className={`px-1 rounded whitespace-nowrap ${
              dropdownItems.includes(item) ? 'hidden' : ''
            }`}
          >
            <Link
              href={`/second-department/${item.link}`}
              className="flex text-white border border-transparent p-2 rounded-full hover:border-white"
            >
              {item.label}
            </Link>
          </li>
        ))}

        {dropdownItems.length > 0 && (
          <li className="relative">
            <button className="px-1 py-1 rounded">More ▼</button>
            <ul className="absolute z-10 top-full left-0 shadow-md mt-1 rounded w-40">
              {dropdownItems.map((item) => (
                <li key={item.id} className="px-2 hover:bg-gray-100">
                  <Link
                    href={`/second-department/${item.link}`}
                    className="block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AuxNavbarMenuResponsive;
