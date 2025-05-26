import Redirect from '@/components/redirect/Redirect';
import React from 'react';

const SuccessRedirect = ({ to }: { to: string }) => {
  return (
    <div>
      <Redirect
        to={to}
        seconds={5}
        message="Success! Redirecting to home in "
      />
    </div>
  );
};

export default SuccessRedirect;
