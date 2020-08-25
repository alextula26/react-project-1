import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = ({ posts }) => {
  const postsList = posts.map(({name, age, message, like}) => <Post name={name} age={age} message={message} like={like}/>);
  return (
    <div className={style.profilePosts}>
      My posts
      <div className={style.postForm}>
        <div><textarea/></div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsList}
      </div>
    </div>
  )
};

export default Posts;
