'use client';
import React, { useState, useTransition, useEffect } from 'react';
import style from './searchBox.module.scss';
import SearchInput from './SearchInput';
import ProductListFounded from './ProductListFounded';
import { useToggleSwitch } from '@/store/toggleSwitch';
import { serverServices } from '@/service/serverAction/serverServices';
import DeleteButton from '../buttons/deleteButton/DeleteButton';
import SearchButton from '../buttons/searchButon/SearchButton';

const SearchBox = () => {
  const isToggled = useToggleSwitch((state) => state.isToggled);

  const [products, setProducts] = useState<IApiResponse<IBaseProduct[]>>({
    success: false,
    message: '',
    data: [],
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSearchClick = () => {
    if (searchTerm.trim() === '') {
      setProducts({
        success: false,
        message: '',
        data: [],
      });
      return;
    }

    startTransition(async () => {
      const results = await serverServices.searchProduct(searchTerm);
      if (!results) {
        setProducts({
          success: false,
          message: '',
          data: [],
        });
      } else {
        setProducts(results);
      }
    });
  };

  return (
    <div
      className={`${!isToggled && 'hidden'} max-lg:absolute z-40 max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:mx-0 rounded-none top-full lg:relative lg:block ${style.search_box_container} w-full mx-3`}
      onClick={(e) => e.stopPropagation()}
    >
      <SearchInput
        classname={'flex items-center relative rounded-2xl group'}
        value={searchTerm}
        onChangeHandler={(value: string) => setSearchTerm(value)}
        onKeyDown={handleSearchClick}
        icon={
          <div
            className="flex gap-2 items-center absolute right-0 z-[99999!important] h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {searchTerm && (
              <div
                className="text-white group-focus-within:text-black"
                onMouseDown={(e) => e.preventDefault()}
              >
                <DeleteButton
                  onClick={() => {
                    setSearchTerm('');
                    setProducts({
                      success: false,
                      message: '',
                      data: [],
                    });
                  }}
                />
              </div>
            )}
            <div
              className="bg-slate-400 w-12 h-full flex justify-center lg:rounded-r-2xl group-focus-within:rounded-b-none text-white"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSearchClick()}
            >
              <SearchButton classname="" />
            </div>
          </div>
        }
      />

      <div
        className={`${style.products_list_founded}`}
        tabIndex={-1}
        onMouseDown={(e) => e.preventDefault()}
      >
        <ProductListFounded products={products.data} />
        {isPending && (
          <div className="p-2 text-sm text-gray-500">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
