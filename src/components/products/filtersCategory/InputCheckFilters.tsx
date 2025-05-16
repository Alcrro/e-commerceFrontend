'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const InputCheckFilters = ({
  category,
  value,
}: {
  category: string;
  value: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [isChecked, setIsChecked] = useState(false);

  // Format value by replacing spaces with hyphens
  const formatValue = (val: string) => val.replace(/\s+/g, '-');

  // Load filters from the URL on mount and when pathname changes
  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    const newFilters: Record<string, string[]> = {};

    for (let i = 0; i < segments.length; i += 2) {
      const key = segments[i];
      const values = segments[i + 1]?.split('-') || [];
      newFilters[key] = values;
    }

    setSelectedFilters(newFilters);
  }, [pathname]);

  // Update isChecked state when selectedFilters change
  useEffect(() => {
    setIsChecked(
      selectedFilters[category]?.includes(formatValue(value)) || false
    );
  }, [selectedFilters, category, value]);

  // Store new path separately and update it after state change
  const [newPath, setNewPath] = useState('');

  // Handle filter toggle
  const toggleFilter = () => {
    const formattedValue = formatValue(value);

    setSelectedFilters((prev) => {
      const currentValues = prev[category] || [];
      const updatedValues = currentValues.includes(formattedValue)
        ? currentValues.filter((v) => v !== formattedValue)
        : [...currentValues, formattedValue];

      const newFilters = { ...prev, [category]: updatedValues };

      // Construct clean URL: /brand/samsung-apple/model/s21-ultra
      let path = '/products';
      Object.entries(newFilters).forEach(([key, values]) => {
        if (values.length > 0) {
          path += `/${key}/${values.join('-').toLocaleLowerCase()}`;
        }
      });

      setNewPath(path || '/'); // ✅ Update state instead of calling router.push immediately

      return newFilters;
    });
  };

  // Use `useEffect` to update the router after state updates
  useEffect(() => {
    if (newPath !== '') {
      router.push(newPath, { scroll: false });
    }
  }, [newPath, router]);

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={toggleFilter}
      className="w-4 h-4"
    />
  );
};

export default InputCheckFilters;
