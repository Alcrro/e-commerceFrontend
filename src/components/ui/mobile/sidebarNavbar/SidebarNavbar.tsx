import React, { useEffect, useRef, useState } from 'react';
import CloseDiv from '../../buttons/closeDiv/CloseDiv';
import PrevButton from '../../buttons/prevButton/PrevButton';
import {
  mainDepartment,
  mainSubDepartment,
} from '@/constants/mainDepartmentMenu';
import generateLinkFromText from '@/utils/generLinkFromText';
import { useClickOutside } from '@/utils/useClickOutside';
import Link from 'next/link';

interface ISideBarProps {
  isOpen: boolean;
  setIsOpen: (bal: boolean) => void;
}

const SidebarNavbar = ({ isOpen, setIsOpen }: ISideBarProps) => {
  const [activeView, setActiveView] = useState<'main' | 'sub'>('main');
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>('Main Department');
  const [openLinks, setOpenLinks] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionalRef = useRef<HTMLDivElement>(null);
  const exceptionalRef = useRef<HTMLDivElement>(null);

  const handleDepartmentClick = (name: string) => {
    setSelectedDepartment(name);
    setActiveView('sub');
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setActiveView('main');
      setSelectedDepartment('Main Department');
    }, 300);
  };

  useClickOutside({
    ref: wrapperRef,
    callback: () => {
      handleClose();
    },
  });

  useClickOutside({
    ref: optionalRef,
    callback: () => {
      setOpenLinks(-1);
    },
    ignoreRefs: [exceptionalRef],
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeView === 'sub') {
          return setActiveView('main');
        } else {
          return setIsOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeView, isOpen]);

  const subDepartmentListForSelected = mainSubDepartment.find(
    (sub) => sub.title === generateLinkFromText(selectedDepartment)
  )?.subDepartmentList;

  return (
    <div
      className={`sm:hidden fixed top-0 left-0 h-full w-[320px] bg-[var(--background)] shadow-lg transition-transform duration-300 ease-in-out z-50 p-2 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      ref={wrapperRef}
    >
      {/* Header */}
      <div className="py-2 border-b border-b-[var(--border-color)]">
        <div className="header flex justify-between pb-2">
          <div className="Descriptions">Products - Departments</div>
          <div className="close_button" onClick={handleClose}>
            <CloseDiv />
          </div>
        </div>
        {activeView === 'sub' && (
          <div
            className="cursor-pointer aux_header flex justify-center gap-2"
            onClick={() => setActiveView('main')}
          >
            <PrevButton />
            <span className="title text-center font-semibold">
              {selectedDepartment}
            </span>
          </div>
        )}
      </div>

      {/* Animated Views */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Main Department List */}
        <ul
          className={`absolute top-0 left-0 w-full transition-all duration-300 ease-in-out ${
            activeView === 'main'
              ? 'translate-x-0 opacity-100'
              : '-translate-x-full opacity-0 pointer-events-none'
          } flex flex-col gap-2 p-4`}
        >
          {mainDepartment.map((department) => (
            <li
              key={department.id}
              className="cursor-pointer hover:bg-[var(--container-bg-table)] px-2 py-1 rounded transition-colors"
              onClick={() => handleDepartmentClick(department.name)}
            >
              {department.name}
            </li>
          ))}
        </ul>
        {/* Sub Department List */}
        <ul
          className={`absolute top-0 left-0 w-full transition-all duration-300 ease-in-out ${
            activeView === 'sub'
              ? 'translate-x-0 opacity-100'
              : '-translate-x-full opacity-0 pointer-events-none'
          } flex flex-col gap-2 p-4`}
        >
          {subDepartmentListForSelected?.map((subDepartment, index) => (
            <li
              key={index}
              className="hover:bg-[var(--container-bg-table)] px-2 py-1 rounded text-center"
            >
              <div
                className="cursor-pointer pb-2"
                onClick={() => setOpenLinks(openLinks === index ? -1 : index)}
                ref={exceptionalRef}
              >
                {subDepartment.label}
              </div>

              <div
                className={`options overflow-hidden transition-all duration-500 ease-in-out ${
                  openLinks === index
                    ? 'max-h-[1000px] opacity-100 py-2'
                    : 'max-h-0 opacity-0 py-0'
                } flex flex-col gap-2 text-center bg-[var(--container-bg-between)] rounded-xl px-2`}
                ref={optionalRef}
              >
                {subDepartment.valuesOptions.map((values) => (
                  <Link
                    href={`${values.link}`}
                    className=" hover:underline hover:underline-white"
                    key={values.id}
                  >
                    {values.label}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarNavbar;
