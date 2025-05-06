import React, { ReactNode } from 'react';
import style from './searchInput.module.scss';
const SearchInput = ({
  icon,
  classname,
}: {
  icon?: ReactNode;
  classname?: string;
}) => {
  return (
    <div className={`group ${style.search_box_inner} ${classname}`}>
      <input
        type="text"
        className=" focus-within:bg-blue-100 focus-visible:outline-none focus-within:border-none"
        placeholder="Search product"
      />
      {icon}
    </div>
  );
};

export default SearchInput;
