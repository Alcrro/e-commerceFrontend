const generateLinkFromText = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

export default generateLinkFromText;
