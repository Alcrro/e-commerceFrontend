'use client';
import React from 'react';
import style from './menuContainer.module.scss';
import InputCheckFilters from './InputCheckFilters';
import DeleteFilters from './deleteFilters/DeleteFilters';

interface FilterDisplayProps {
  filters: Record<string, string[]>;
}

const FiltersCategory: React.FC<FilterDisplayProps> = ({ filters }) => {
  // console.log(filters);
  return (
    <div className={style.menu_product_container}>
      <DeleteFilters />
      <>
        {Object.entries(filters)
          .filter(([key]) => key !== '_id') // Exclude _id
          .map(([category, values]) => {
            // Ensure values is an array and filter out empty strings
            const filteredValues = values.filter((value) => value.length > 0);

            if (filteredValues.length === 0) return null; // Skip rendering if no values

            return (
              <div
                key={category}
                className="p-2 mb-3 last:mb-0 pb-4 bg-[var(--container-bg-between)] rounded-lg"
              >
                <h3 className="text-lg font-semibold capitalize mb-2">
                  {category.replace(/([A-Z])/g, ' $1')}
                </h3>
                <div className="flex flex-col gap-2">
                  {filteredValues.map((value) => (
                    <label
                      key={value}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <InputCheckFilters category={category} value={value} />
                      <span>{value}</span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}
      </>
    </div>
  );
};

export default FiltersCategory;
