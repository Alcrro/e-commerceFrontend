import Image from 'next/image';
import React, { ReactNode } from 'react';
import style from './icon.module.scss';

type ICustomIconProps = {
  srcIsEnabled: boolean;
  src?: string | null;
  classname?: string;
  iconUnicode?: string; // Dynamic icon code (e.g., "\f004")
  size?: number; // Dynamic size
  notificationIcon?: ReactNode;
};

const CustomIcon = ({
  srcIsEnabled,
  src,
  classname,
  iconUnicode = '\f128', // Default icown
  size = 24, // Default size
  notificationIcon,
}: ICustomIconProps) => {
  return srcIsEnabled && src ? (
    <div className={`${style.image_container} ${classname} relative`}>
      <Image
        src={src}
        alt="icon"
        width={size}
        height={size}
        className={`${classname} max-w-none`}
      />
      {notificationIcon}
    </div>
  ) : (
    // <div className={`${style.image_container} relative`}>
    <span
      className={`flex ${style.icon} ${classname}`}
      style={
        {
          '--icon-size': `${size}px`,
          '--icon-code': `"${iconUnicode}"`,
        } as React.CSSProperties
      }
    >
      {notificationIcon}
    </span>

    // </div>
  );
};

export default CustomIcon;
