import React from 'react';

interface InputFieldProps {
  type: string;
  name: string;
  propName: string;
  setPropName: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  propName,
  setPropName,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPropName(e.target.value);
  };

  return (
    <input
      type={type}
      name={name}
      value={propName} // Ensure the value is always a string
      onChange={handleChange}
    />
  );
};

export default InputField;
