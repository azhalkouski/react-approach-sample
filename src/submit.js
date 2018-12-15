/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<boolean>}
 */
export default function submit(email, password) {
  console.log(`Submit email: "${email}" and password: "***"`);
  return Promise.resolve(true);
}
