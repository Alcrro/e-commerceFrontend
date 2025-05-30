import React from 'react';
import CustomIcon from '../icon/defaultIcon/Icon';

const TitleForm = ({ titleName }: { titleName: string }) => {
  return (
    <h2 className="flex justify-center items-center gap-2 pb-4 font-bold text-2xl">
      <CustomIcon srcIsEnabled={true} src={'/secure-access.png'} size={84} />

      <span>{titleName}</span>
    </h2>
  );
};

export default TitleForm;
