'use client';
import { useNotificationStore } from '@/store/useNotificationStore';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div>
      <Link href={'/'} className="text-sm sm:text-lg lg:text-2xl">
        ALCRRO
      </Link>
    </div>
  );
};

export default Logo;
