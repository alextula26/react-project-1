import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = ({ posts }) => {

  const inputPost = React.createRef();
  const textPost = React.createRef();

  const addPost = () => {
    alert(textPost.current.value + ' ' + inputPost.current.value);
  };

  const postsList = posts.map(({name, age, message, like}) => <Post name={name} age={age} message={message} like={like}/>);
  return (
    <div className={style.profilePosts}>
      My posts
      <div className={style.postForm}>
        <div><input type="text" ref={inputPost} /></div>
        <div><textarea ref={textPost} /></div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsList}
      </div>
    </div>
  )
};

export default Posts;
