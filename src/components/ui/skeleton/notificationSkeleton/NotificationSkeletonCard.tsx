// NotificationSkeletonCard.jsx
import styles from './notificationSkeleton.module.scss';
import SkeletonLine from '../defaultSkeletonLine/SkeletonLine';

export default function NotificationSkeletonCard() {
  return (
    <div className={styles.notificationSkeletonCard}>
      <div className={styles.title}>
        <SkeletonLine className="h-5" />
      </div>
      <div className={`${styles.line} flex flex-col gap-[.25rem]`}>
        <SkeletonLine className="w-full h-4" />
        <SkeletonLine className="w-full h-4" />
      </div>

      <div className={styles.bottomLines}>
        <div className={styles.smallLine}></div>
        <div className={`${styles.smallLine} ${styles.right}`}></div>
      </div>
    </div>
  );
}
