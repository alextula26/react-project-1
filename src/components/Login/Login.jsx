import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormControl/FormControl";
import {required} from "../../FormControl/validators";

const LoginForm = (props) => {
  return <>
    <form onSubmit={props.handleSubmit}>
      <div><Field
        component={Input}
        name="name"
        placeholder={'name'}
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
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return <>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </>
};

export default Login;