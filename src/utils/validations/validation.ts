export const formatPhoneNumber = (value: string) => {
  value = value.replace(/\D/g, ''); // Remove non-numeric characters
  if (value.length > 10) value = value.slice(0, 10); // Limit to 10 digits

  if (value.length > 6) {
    return `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6)}`;
  } else if (value.length > 3) {
    return `${value.slice(0, 3)}-${value.slice(3)}`;
  }
  return value;
};

export const validatePhoneNumber = (value: string) => {
  return /^[0-9-]*$/.test(value);
};

export const validatePostalCode = (value: string) => {
  return /^[0-9a-zA-Z -]{3,10}$/.test(value);
};

export const validateName = (value: string) => {
  return /^[a-zA-Z\s]{2,50}$/.test(value);
};
