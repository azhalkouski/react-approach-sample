const emailRegexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

/**
 * @param {string} email
 * @param {string} password
 * @returns {boolean}
 */
export default function validate(email, password) {
  return emailRegexp.test(email) && passwordRegexp.test(password);
}
