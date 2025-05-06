'use client';

import React, { useCallback, useState } from 'react';
import ButtonLink from '../buttons/defaultButton/Button';
import CustomIcon from '../icon/Icon';
import { useRouter } from 'next/navigation';
import { fetcher } from '@/service/fetcher';
import { updateAllNotificationsAsViewed } from '@/service/updateAllNotificationsAsViewed';

const ViewAllNotifications = ({ token }: { token: string }) => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleClick = useCallback(async () => {
    setIsPending(true);
    try {
      await updateAllNotificationsAsViewed(token);
      router.refresh();
    } catch (error) {
      console.error('Error during handleClick:', error);
    } finally {
      setIsPending(false);
    }
  }, [token, router]);

  return (
    <div className="flex items-center">
      <ButtonLink
        ariaLabel="view-all-notifications"
        usedForm
        variant="none"
        icon={<CustomIcon srcIsEnabled={false} iconUnicode="\F33E" size={18} />}
        disabled={isPending}
        onClick={handleClick}
      />
      {isPending && (
        <span className="ml-2 text-sm text-gray-500 animate-pulse">
          Updating...
        </span>
      )}
    </div>
  );
};

export default ViewAllNotifications;
