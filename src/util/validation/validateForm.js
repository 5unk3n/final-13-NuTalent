export const validateEmail = (email) => {
  const emailRegEx = /^[a-zA-Z0-9+_.-]+@[a-z0-9.-]+\.[a-z0-9.-]+$/;
  return emailRegEx.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateUsername = (username) => {
  return username.length >= 2 && username.length <= 10;
};

export const validateAccountname = (accountname) => {
  const accountnameRegEx = /^[a-zA-Z0-9_.]+$/;
  return accountnameRegEx.test(accountname);
};
