'use client';
import React, { useCallback, useState } from 'react';
import ButtonLink from '../buttons/defaultButton/Button';
import CustomIcon from '../icon/Icon';
import { useRouter } from 'next/navigation';
import { deleteAllNotifications } from '@/service/deleteAllNotifications';

const DeleteAllNotifications = ({ token }: { token: string }) => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const clickHandler = useCallback(async () => {
    setIsPending(true);
    try {
      await deleteAllNotifications(token);
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
        ariaLabel="delete-all-notifications"
        usedForm={true}
        variant="none"
        icon={<CustomIcon srcIsEnabled={false} iconUnicode="\F78B" size={16} />}
        disabled={isPending}
        onClick={clickHandler}
      />
      {isPending && (
        <span className="ml-2 text-sm text-gray-500 animate-pulse">
          Deleting...
        </span>
      )}
    </div>
  );
};

export default DeleteAllNotifications;
