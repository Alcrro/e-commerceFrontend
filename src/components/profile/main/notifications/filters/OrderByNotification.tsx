'use client';
import Dropdown from '@/components/dropdownList/DropDownList';
import { fetchNotificationAPI } from '@/service/notificationApi';
import { handleActionState } from '@/service/serverAction/createServerAction';
import { serverServices } from '@/service/serverAction/serverServices';
import { useParams, useRouter } from 'next/navigation';
import React, { useActionState, useState } from 'react';

const OrderByNotification = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const filtersArray = ['date', 'viewed'];
  const params = useParams<{ slug?: string }>();
  const router = useRouter();

  const currentFilter = params.slug || 'date';

  const selectHandler = (selected: string) => {
    router.push(`/profile/notifications/${selected}`);
  };
  const [state, formAction] = useActionState(
    () => handleActionState,
    undefined
  );

  return (
    <div className="filter_by_inner capitalize">
      <form action={formAction}>
        <input type="text" defaultValue={currentFilter} name="order" hidden />
        <Dropdown
          options={filtersArray}
          selected={currentFilter}
          onSelect={selectHandler}
          isOpen={activeDropdown === 'notificationFilter'}
          setActiveDropdown={setActiveDropdown}
          name={'notificationFilter'}
        />
      </form>
    </div>
  );
};

export default OrderByNotification;
