'use client';
import { FC, ReactNode } from 'react';
import styles from './buttonLink.module.scss';
import Link from 'next/link';

// Define exclusive prop groups
type LinkProps = {
  isLink: true;
  href: string;
  usedForm?: false;
  onClick?: never;
};

type FormButtonProps = {
  usedForm: true;
  isLink?: false;
  href?: never;
  onClick?: () => void;
};

type RegularButtonProps = {
  isLink?: false;
  href?: never;
  usedForm?: false;
  onClick?: () => void;
};

// Merge all possible variants
type ButtonProps = {
  label?: string;
  icon?: ReactNode;
  variant?: 'none' | 'primary' | 'secondary' | 'danger';
  classname?: string;
  classnameLabel?: string;
  disabled?: boolean;
  ariaLabel: string;
} & (LinkProps | FormButtonProps | RegularButtonProps);

const ButtonLink: FC<ButtonProps> = ({
  href,
  onClick,
  label,
  icon,
  variant = 'primary',
  isLink = false,
  usedForm = false,
  classname,
  classnameLabel,
  disabled,
  ariaLabel,
}) => {
  const className = `${styles.button} ${styles[variant]} ${
    classname
      ? classname
          .split(' ')
          .map((cls) => styles[cls] || cls)
          .join(' ')
      : ''
  }`;

  if (isLink && href) {
    return (
      <Link href={href} className={className}>
        {icon && icon}
        {label && <span className={classnameLabel}>{label}</span>}
      </Link>
    );
  } else if (usedForm) {
    return (
      <button
        type="submit"
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {icon && icon}
        {label && <span className={classnameLabel}>{label}</span>}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon && icon}
      {label && <span className="classnameLabel">{label}</span>}
    </button>
  );
};

export default ButtonLink;
