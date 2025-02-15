'use client';
import React, { useRef } from 'react';
import styles from './dropdown.module.scss';
import { useClickOutside } from '@/hooks/clickOutside';

interface DropdownProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  isOpen: boolean;
  setActiveDropdown: (name: string | null) => void;
  name: string;
  isLink?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onSelect,
  isOpen,
  setActiveDropdown,
  name,
  isLink,
}) => {
  const dropdownRef = useRef<HTMLUListElement>(null!);

  useClickOutside(dropdownRef, () => setActiveDropdown(null));

  return (
    <div className={styles.dropdown}>
      <div
        className={`${styles.selected} ${isOpen ? styles.isOpen : ''}`}
        onClick={() => setActiveDropdown(isOpen ? null : name)}
      >
        {selected} {/* ✅ Show the original text, not a modified version */}
      </div>
      {isOpen && (
        <ul ref={dropdownRef} className={styles.list}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onSelect(option);
                setActiveDropdown(null);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
