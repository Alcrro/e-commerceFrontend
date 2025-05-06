'use client';
import ToggleSwitch from '@/components/ui/buttons/toggleSwitch/ToggleSwitch';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure hydration sync
  useEffect(() => setMounted(true), []);

  // Prevent mismatch between SSR and client
  useEffect(() => setMounted(true), []);

  // Prevent mismatched rendering between SSR and client
  if (!mounted) return <ToggleSwitch isChecked={false} />;
  const isDarkMode = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };
  return (
    <div className="element_setting_value">
      <ToggleSwitch isChecked={isDarkMode} onChange={handleToggle} />
    </div>
  );
};

export default DarkModeSwitch;
