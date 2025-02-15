declare module '*.module.scss' {
  const classes: { [key: string]: string }; // Type that maps class names to their generated hashed names
  export default classes;
}
