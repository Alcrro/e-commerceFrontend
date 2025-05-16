import React, { ReactNode } from 'react';
import style from './searchBox.module.scss';
import SearchInput from './SearchInput';
import CustomIcon from '../icon/Icon';
import ProductListFounded from './ProductListFounded';
const SearchBox = () => {
  return (
    <div className={`${style.search_box_container} w-full relative mx-3`}>
      <SearchInput
        classname={'flex items-center w-full relative'}
        icon={
          <CustomIcon
            iconUnicode="\F52A"
            srcIsEnabled={false}
            classname="absolute z-10 right-3 text-gray-400 group-focus-within:text-blue-400 transition-colors"
          />
        }
      />
      <div className={`${style.products_list_founded}`} tabIndex={-1}>
        <ProductListFounded />
      </div>
    </div>
  );
};

export default SearchBox;
