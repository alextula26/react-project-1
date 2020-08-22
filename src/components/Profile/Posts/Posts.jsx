import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = ({users}) => {
  const posts = users.map(({name, age, message, like}) => <Post name={name} age={age} message={message} like={like}/>);
  return (
    <div>
      My posts
      <div>
        <textarea/>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        {posts}
      </div>
    </div>
  )
};

export default Posts;
