import React, {useState} from 'react';

const ProfileStatusWithHook = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

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

  /*componentDidUpdate(prevProps) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }*/


  console.log('props.status', props.status);
  console.log('status', status);

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
