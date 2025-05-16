// SkeletonLine.jsx
import styles from './skeletonLine.module.scss';

export default function SkeletonLine({ className = '' }) {
  return <div className={`${styles.line} ${className}`} />;
}
