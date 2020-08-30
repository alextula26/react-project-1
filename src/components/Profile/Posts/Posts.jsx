import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post.jsx';

const getPostsList = (posts) => posts.map(({id, name, age, message, like}) => (
    <Post key={id} name={name} age={age} message={message} like={like}/>
  )
);

const Posts = ({posts, addPost}) => {

  const name = React.createRef();
  const age = React.createRef();
  const message = React.createRef();

  const setPost = () => {
    addPost(name.current.value, age.current.value, message.current.value);
  };

  const postsList = getPostsList(posts);
  return (
    <div className={style.profilePosts}>
      My posts
      <div className={style.postForm}>
        <div><input type="text" ref={name}/></div>
        <div><input type="text" ref={age}/></div>
        <div><textarea ref={message}/></div>
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
