'use client';
import React, { useState } from 'react';
import ButtonLink from '../defaultButton/Button';
import style from './shareButton.module.scss';

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
  return (
    <div
      className={`${style.share_button} ${copied ? style.isCopied : style.isDefault}`}
    >
      <ButtonLink
        variant="none"
        onClick={handleCopy}
        ariaLabel="share"
        label="share"
      />
    </div>
  );
};

export default ShareButton;
