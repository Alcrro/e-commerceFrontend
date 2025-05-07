'use client';
import React from 'react';
import DarkModeSwitch from './DarkModeSwitch';

const DarkModeSettings = () => {
  return (
    <section className="bg-[var(--container-bg)] p-2 rounded-lg flex items-center justify-between">
      <div className="element_setting_name">Dark mode</div>
      <DarkModeSwitch />
    </section>
  );
};

export default DarkModeSettings;
