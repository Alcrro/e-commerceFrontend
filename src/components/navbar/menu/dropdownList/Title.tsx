import React from 'react';

const Title = ({ description }: { description: string | undefined }) => {
  return (
    <div className="text-[12px] text-center">
      Welcome {!description ? 'Guest' : description}
    </div>
  );
};

export default Title;
