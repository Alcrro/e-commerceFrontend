import Link from 'next/link';
import React from 'react';

const priorityColorMap: Record<string, string> = {
  high: 'bg-red-500',
  medium: 'bg-yellow-400',
  low: 'bg-green-500',
};

const NotificationList = ({
  notifications,
}: {
  notifications: INotification[];
}) => {
  return (
    <div className="flex flex-col gap-2 px-1 mb-2">
      {notifications.map((notification) => {
        const priority = notification.priority.toLocaleLowerCase();
        const colorClass = priorityColorMap[priority];

        return (
          <Link
            href={notification._id}
            className="group relative block transform transition-transform hover:scale-105 hover:shadow-lg rounded-xl p-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
            key={notification._id}
          >
            <div className="flex gap-4 items-center">
              {colorClass && (
                <div
                  className={`w-3 h-3 rounded-full ${colorClass} group-hover:scale-110 transition-all`}
                />
              )}

              <div className="flex-1">
                <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {notification.titleNotification}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 transition-colors">
                  {notification.message || 'No description available.'}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NotificationList;
