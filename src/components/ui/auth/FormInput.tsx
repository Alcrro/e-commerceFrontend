import React from 'react';

interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onValueChange?: (value: string) => void; // required
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  value,
  onValueChange,
  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      {...rest}
    />
  );
};

export default InputField;
