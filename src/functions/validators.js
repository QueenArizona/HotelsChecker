/* eslint-disable no-useless-escape */
export function validateLogin(login) {
  const validator = /^([A-Za-z0-9_\-])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/;
  return login.match(validator);
}

export function validatePassword(password) {
  const validator = /^([^А-Яа-я]{8,})$/;
  return password.match(validator);
}
