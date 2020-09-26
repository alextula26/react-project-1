import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormControl/FormControl";
import {required} from "../../FormControl/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReduser";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
  return <>
    <form onSubmit={props.handleSubmit}>
      <div><Field
        component={Input}
        name="email"
        placeholder={'Email'}
        validate={required}/>
      </div>
      <div><Field
        component={Input}
        name="password"
        placeholder={'password'}
        validate={required}/></div>
      <div><Field
        component={Input}
        name="rememberMe"
        type={'checkbox'}
        validate={required}/>Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = ({email, password, rememberMe}) => {
    props.login(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to='/profile'/>
  }

  return <>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </>
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);