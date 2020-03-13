export default (...functions) => (comp) => {
  return functions.reduceRight(
    (wrapped, func) => func(wrapped), comp
  );
};
