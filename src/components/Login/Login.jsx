import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return <>
    <form onSubmit={props.handleSubmit}>
      <div><Field component="input" name="name" placeholder={'name'}/></div>
      <div><Field component="input" name="password" placeholder={'password'}/></div>
      <div><Field component="input" name="rememberMe" type={'checkbox'}/>Remember me</div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return <>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </>
};

export default Login;