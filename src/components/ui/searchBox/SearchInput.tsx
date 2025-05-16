import React, { ReactNode } from 'react';
import style from './searchInput.module.scss';
const SearchInput = ({
  icon,
  classname,
  onChangeHandler,
  onKeyDown,
  value,
}: {
  icon?: ReactNode;
  classname?: string;
  onChangeHandler: (value: string) => void;
  onKeyDown: () => void;
  value: string;
}) => {
  return (
    <div className={`group ${style.search_box_inner} ${classname}`}>
      <input
        type="text"
        className=" focus-within:bg-blue-100 focus-within:text-black text-[var(--text-container-color)] focus-visible:outline-none focus-within:border-none lg:rounded-2xl"
        placeholder="Search product"
        value={value}
        name="value"
        onChange={(e) => onChangeHandler(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onKeyDown();
          }
        }}
      />

      {icon}
    </div>
  );
};

export default SearchInput;
