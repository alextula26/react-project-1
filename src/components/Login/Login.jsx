import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {login} from "../../redux/authReduser";
import {InputComponent} from "../../FormControl/FormControl";
import {required} from "../../FormControl/validators";
import { Form, Button, Checkbox } from 'antd';

const LoginForm = (props) => {
  return <>
    <Form
      onSubmit={props.handleSubmit}
      layout="vertical">
      <div><Field
        component={InputComponent}
        name="email"
        placeholder={'Email'}
        validate={required}/>
      </div>
      <div><Field
        component={InputComponent}
        name="password"
        placeholder={'password'}
        validate={required}/></div>
      <div><Field
        component={InputComponent}
        name="rememberMe"
        type={'checkbox'}
        validate={required}/>Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
      {props.error && <div style={{border: '1px solid red', color: 'red'}}>{props.error}</div>}
    </Form>
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
