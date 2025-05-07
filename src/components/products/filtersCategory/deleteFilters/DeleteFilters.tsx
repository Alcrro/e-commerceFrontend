import ButtonLink from '@/components/ui/buttons/defaultButton/Button';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import style from './deleteFilters.module.scss';

const DeleteFilters = () => {
  const pathname = usePathname();
  const route = useRouter();
  return (
    !pathname.endsWith('products') && (
      <div className={style.delete_filters}>
        <div className="delete_description">Delete all filters</div>
        <ButtonLink
          variant="none"
          ariaLabel="delete-filter"
          icon={<span className={style.delete_filter_icon}></span>}
          onClick={() => route.replace('/products')}
        />
      </div>
    )
  );
};

export default DeleteFilters;
