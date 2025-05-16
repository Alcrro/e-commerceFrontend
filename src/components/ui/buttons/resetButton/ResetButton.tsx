import React from 'react';
import ButtonLink from '../defaultButton/Button';

const ResetButton = () => {
  return (
    <div className="reset_button bg-[var(--button-color-danger)] p-1 px-3 rounded-md">
      <ButtonLink
        label="Reset"
        ariaLabel="reset_button"
        isLink={true}
        href="/profile/orders"
        variant="none"
      />
    </div>
  );
};

export default ResetButton;
