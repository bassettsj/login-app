import { SUBMIT_LOGIN } from '../actions/loginForm';


export default function LoginForm(state = {}, action) {
  if (action.type === SUBMIT_LOGIN) {
    return {
      username: action.username,
      password: action.password,
    };
  }
  return state;
}
