'use client';

import { usePathname } from 'next/navigation';
import { createContext, ReactNode, useContext } from 'react';

interface PathNameContextType {
  pathname: string;
}
const PathnameContext = createContext<PathNameContextType | undefined>(
  undefined
);

export const ProviderPathnameContext = ({
  children,
}: {
  children: ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <PathnameContext.Provider value={{ pathname }}>
      {children}
    </PathnameContext.Provider>
  );
};
export const usePathnameContext = () => {
  const context = useContext(PathnameContext);
  if (!context) {
    throw new Error('usePathnameContext must be used with PathnameProvider');
  }

  return context;
};
