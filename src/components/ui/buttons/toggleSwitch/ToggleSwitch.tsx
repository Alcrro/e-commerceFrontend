'use client';

import React, { useEffect, useState } from 'react';
import styles from './toggleSwitch.module.scss';

interface ToggleSwitchProps {
  isChecked: boolean;
  onChange?: () => void; // Parent handles backend update
}

export default function ToggleSwitch({
  isChecked,
  onChange,
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(isChecked);

  // Sync checked state with prop update
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <label className={styles.toggleContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked); // ✅ Update UI immediately
          if (onChange) onChange(); // ✅ Notify parent
        }}
      />
      <div
        className={`${styles.toggle} ${checked ? styles.active : styles.hidden}`}
      />
    </label>
  );
}
