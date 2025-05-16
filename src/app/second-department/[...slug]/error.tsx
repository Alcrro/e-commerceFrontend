'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Ghost, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Ghost className="w-20 h-20 text-gray-500 dark:text-gray-300 mb-4" />
      </motion.div>

      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        404 - Page Not Found
      </motion.h1>

      <motion.p
        className="text-gray-600 dark:text-gray-400 mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-6"
      >
        <Link href={'/'} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Go Home
        </Link>
      </motion.div>
    </div>
  );
}
