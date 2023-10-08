export const addCommasToNumber = (inputString) => {
  const numberOnly = inputString.replace(/\D/g, '');
  const numberWithCommas = new Intl.NumberFormat().format(numberOnly);
  return numberWithCommas;
};
