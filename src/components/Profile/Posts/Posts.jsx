import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post.jsx';

const getPostsList = (posts) => posts.map(({id, name, age, message, like}) => (
    <Post key={id} name={name} age={age} message={message} like={like}/>
  )
);

const Posts = ({posts, postForm, dispatch}) => {

  const name = React.createRef();
  const age = React.createRef();
  const message = React.createRef();

  const setPost = () => {
    dispatch({ type: 'ADD-POST' });
    const param = {
      type: 'UPDATE-CHANGE-POST',
      name: '',
      age: '',
      message: '',
    };
    dispatch(param);
  };

  const onChangePost = () => {
    const param = {
      type: 'UPDATE-CHANGE-POST',
      name: name.current.value,
      age: age.current.value,
      message: message.current.value,
    };
    dispatch(param);
  };

  const postsList = getPostsList(posts);
  return (
    <div className={style.profilePosts}>
      My posts
      <div className={style.postForm}>
        <div><input type="text" ref={name} value={postForm.name }onChange={onChangePost}/></div>
        <div><input type="text" ref={age} value={postForm.age} onChange={onChangePost}/></div>
        <div><textarea ref={message} value={postForm.message} onChange={onChangePost}/></div>
        <div>
          <button onClick={setPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsList}
      </div>
    </div>
  )
};

export default Posts;
