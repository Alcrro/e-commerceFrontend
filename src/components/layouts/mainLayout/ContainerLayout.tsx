import { headers } from 'next/headers';

import React, { ReactNode } from 'react';

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return <div className={`max-w-[97rem] w-full mx-auto`}>{children}</div>;
};

export default ContainerLayout;
