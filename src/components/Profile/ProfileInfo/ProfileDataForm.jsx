import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { InputComponent, TextareaComponent } from '../../../FormControl/FormControl';

const ProfileDataForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div><button>save</button></div>
    <div><b>Fullname</b>: <Field
      component={InputComponent}
      name="fullName"
      placeholder="Add fullname"
      label="Add fullname"
    /></div>
    <div><b>About me</b>: <Field
      component={TextareaComponent}
      name="aboutMe"
      placeholder="Add about me"
      label="Add about me" /></div>
    <div><b>Job</b>: <Field
      component={InputComponent}
      name="lookingForAJob"
      label="looking for a job"
      type="checkbox"
    /></div>
    <div><b>Description</b>: <Field
      component={TextareaComponent}
      name="lookingForAJobDescription"
      placeholder="Add description"
      label="Add description" /></div>
    <div>
      {
        Object
          .keys(props.profile.contacts)
          .map((key) => (
            <Field
              key={key}
              component={InputComponent}
              name={`contacts.${key}`}
              placeholder={key}
              label={key} />
          ))
      }
    </div>
    {props.error && <div style={{ border: '1px solid red', color: 'red' }}>{props.error}</div>}
  </form>
);

const EditProfileDataReduxForm = reduxForm({ form: 'editProfileDataForm' })(ProfileDataForm);

export default EditProfileDataReduxForm;
