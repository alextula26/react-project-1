import React, {useState, useEffect} from 'react';

const ProfileStatusWithHook = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {
        !editMode &&
        <div style={{marginBottom: '15px'}}>
            <span onDoubleClick={activateEditMode}>
              {props.status || '------'}
              </span>
        </div>
      }
      {
        editMode &&
        <div style={{marginBottom: '15px'}}>
          <input
            onChange={onChangeStatus}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}/>
        </div>
      }
    </>
  )
};

export default ProfileStatusWithHook;
