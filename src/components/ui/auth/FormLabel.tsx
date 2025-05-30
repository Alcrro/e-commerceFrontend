import React from 'react';

const FormLabel = ({
  htmlFor,
  description,
}: {
  htmlFor: string;
  description: string;
}) => {
  return (
    <label htmlFor={htmlFor} className="capitalize">
      {description}
    </label>
  );
};

export default FormLabel;
