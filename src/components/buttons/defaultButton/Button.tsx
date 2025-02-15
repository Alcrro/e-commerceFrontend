'use client';
import { FC, ReactNode } from 'react';
import styles from './buttonLink.module.scss';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  variant?: 'none' | 'primary' | 'secondary' | 'danger';
  isLink?: boolean;
  href?: string;
  usedForm?: boolean;
  onClick?: () => void;
  classname?: string;
}
const ButtonLink: FC<ButtonProps> = ({
  href,
  onClick,
  label,
  icon,
  variant = 'primary',
  isLink = false,
  usedForm = false,
  classname,
}) => {
  const className = `${styles.button} ${styles[variant]} ${!classname ? '' : styles[classname]}`;

  if (isLink && href) {
    return (
      <Link href={href} className={className}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {label}
      </Link>
    );
  } else if (usedForm === true) {
    return (
      <button type="submit" className={className} onClick={onClick}>
        {label}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {label}
    </button>
  );
};
export default ButtonLink;
