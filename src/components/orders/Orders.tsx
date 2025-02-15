'use client';
import { useParams, useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import styles from './orders.module.scss';

import { getOrderAction } from '@/service/serverAction/getOrderAction';
import Dropdown from '../dropdownList/DropDownList';
import generateLinkFromText from '@/utils/generLinkFromText';

export default function OrdersPage() {
  const router = useRouter();
  const params = useParams<{ slug?: string[] }>();

  // Extract filter values from URL (default to "Active" & "Last 3 months" if missing)
  const currentFilter = params.slug?.[0] || 'Active';
  const timeStamp = params.slug?.[1] || 'Last 3 months';

  // Local state to control dropdown UI
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Function to update filters in the URL without losing existing selection
  const updateFilter = (newFilter: string) => {
    router.push(
      `/profile/orders/${generateLinkFromText(newFilter)}/${generateLinkFromText(timeStamp)}`,
      { scroll: false }
    );
  };

  const updateTimeStamp = (newTimeStamp: string) => {
    router.push(
      `/profile/orders/${generateLinkFromText(currentFilter)}/${generateLinkFromText(newTimeStamp)}`,
      { scroll: false }
    );
  };

  const [state, formAction] = useActionState(getOrderAction, undefined);

  return (
    <div className={styles.orders_container}>
      <h2 className={styles.title}>My Orders</h2>
      <form action={formAction}>
        <input
          type="text"
          name="status"
          id=""
          defaultValue={currentFilter}
          hidden
        />
        <input
          type="text"
          name="timeStamp"
          id=""
          defaultValue={timeStamp}
          hidden
        />
        <div className={styles.filters}>
          <Dropdown
            options={['Active', 'In Progress', 'Shipped', 'Cancelled']}
            selected={currentFilter}
            onSelect={updateFilter} // 🔥 Fix: Now only updates the filter
            isOpen={activeDropdown === 'filter'}
            setActiveDropdown={setActiveDropdown}
            name="filter"
          />
          <Dropdown
            options={['Last 3 months', 'Last 6 months', 'Last year']}
            selected={timeStamp}
            onSelect={updateTimeStamp} // 🔥 Fix: Now only updates the time range
            isOpen={activeDropdown === 'timestamp'}
            setActiveDropdown={setActiveDropdown}
            name="timestamp"
          />
        </div>
      </form>
    </div>
  );
}
