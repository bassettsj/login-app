import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import * as loginFormActions from '../actions/loginForm';


function mapStateToProps(state) {
  return {
    username: state.loginForm.username,
    password: state.loginForm.password,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginFormActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
