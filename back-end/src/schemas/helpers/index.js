const userNameRegex = /^[a-z ,.'-]{12,}$/i;
const emailRegex = /\S+@\S+\.\S+/;
const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

const isBlank = (value) => (!value);
const isLessThan = (value, min) => (value < min);
const isGreaterThan = (value, min) => (value > min);
const isUserNameValid = (name) => !userNameRegex.test(name);
const isEmailValid = (email) => !emailRegex.test(email.toLowerCase());
const isDateValid = (date) => !dateRegex.test(date.datedAt);
const isNotEqual = (value1, value2) => value1 !== value2;
const isNotBool = (value) => (typeof value === 'boolean');
const notInclude = (array, value) => !array.includes(value);

module.exports = {
  notInclude,
  isBlank,
  isLessThan,
  isGreaterThan,
  isUserNameValid,
  isEmailValid,
  isDateValid,
  isNotEqual,
  isNotBool,
};
