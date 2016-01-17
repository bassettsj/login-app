export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export function submitLogin(username = '', password = '') {
  return {
    type: SUBMIT_LOGIN,
    username,
    password,
  };
}
