'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure hydration sync
  useEffect(() => setMounted(true), []);

  // Prevent mismatched rendering between SSR and client
  if (!mounted)
    return (
      <button className="p-2 rounded bg-gray-200 dark:bg-gray-800">...</button>
    );

  return (
    <button
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
