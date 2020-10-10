import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/authReduser';
import { InputComponent } from '../../FormControl/FormControl';
import { required } from '../../FormControl/validators';

const LoginForm = (props) => <>
  <form
    onSubmit={props.handleSubmit}
    layout="vertical">
    <div><Field
      component={InputComponent}
      name="email"
      placeholder={'Email'}
      validate={required} />
    </div>
    <div><Field
      component={InputComponent}
      name="password"
      placeholder={'password'}
      validate={required} />
    </div>
    <div><Field
      component={InputComponent}
      name="rememberMe"
      type={'checkbox'}
      validate={required} />Remember me
    </div>
    {
      props.captchaUrl
      && <>
        <div><img src={props.captchaUrl} /></div>
        <div><Field
          component={InputComponent}
          name="captcha"
          placeholder={'captcha'}
          validate={required} />
        </div>
      </>
    }
    <div>
      <button>Login</button>
    </div>
    {props.error && <div style={{ border: '1px solid red', color: 'red' }}>{props.error}</div>}
  </form>
</>;

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = ({
    email, password, rememberMe, captcha,
  }) => {
    props.login(email, password, rememberMe, captcha);
  };

  if (props.isAuth) {
    return <Redirect to='/profile' />;
  }

  return <>
    <h1>Login</h1>
    <LoginReduxForm
      onSubmit={onSubmit}
      captchaUrl={props.captchaUrl} />
  </>;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
