export const formatPrice = (input) => {
  const inputString = input.toString();
  const numberOnly = inputString.replace(/[^0-9]/g, '');
  const numberWithCommas = new Intl.NumberFormat().format(numberOnly);
  return numberWithCommas === '0' ? '' : numberWithCommas;
};
