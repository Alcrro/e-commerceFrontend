import React from 'react';

const ModalNavbarMenuTitle = ({
  description,
  classname,
}: {
  description: string;
  classname: string;
}) => {
  return <div className={classname}>{description}</div>;
};

export default ModalNavbarMenuTitle;
