import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import userPhoto from '../../../assets/images/default.jpg';
// import ProfileStatus from "./ProfileStatus";
import EditProfileDataReduxForm from './ProfileDataForm';

const getContacts = (contacts) => (
  Object.keys(contacts).map((key) => (
    <Contact key={key} contactTitle={key} contactValue={contacts[key]} />))
);

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length > 0) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onHandleSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={style.profileInfo}>
      <div>
        <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
      </div>

      <div className={style.descriptionInfo}>
        <div>
          <img
            src={props.profile.photos.large || userPhoto}
            alt={props.profile.fullName}
            style={{ width: '200px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          {!props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        </div>

        {editMode
          ? <EditProfileDataReduxForm
            initialValues={props.profile}
            onSubmit={onHandleSubmit}
            profile={props.profile} />
          : <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            goToEditMode={() => setEditMode(true)} />}

      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => (
  <div><b>{contactTitle}</b>: {contactValue}</div>
);

const ProfileData = (props) => (
  <div>
    {!props.isOwner && <div><button onClick={props.goToEditMode}>redactirovat</button></div>}
    <div><b>Fullname</b>: {props.profile.fullName}</div>
    <div><b>About me</b>: {props.profile.aboutMe}</div>
    <div><b>Job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
    {props.profile.lookingForAJob
      && <div><b>Description</b>: {props.profile.lookingForAJobDescription}</div>
    }
    <div><b>contacts</b>:
        <div style={{ paddingLeft: '10px' }}>{getContacts(props.profile.contacts)}</div>
    </div>
  </div>
);

export default ProfileInfo;
