import React from 'react';

const TitleForm = ({ titleName }: { titleName: string }) => {
  return <h2 className="text-center pb-4 font-bold text-2xl">{titleName}</h2>;
};

export default TitleForm;
