import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post.jsx';
import {Field, reduxForm} from "redux-form";
import {required, maxLength} from "../../../FormControl/validators";
import {Textarea} from "../../../FormControl/FormControl";

const getPostsList = (posts) => posts.map(({id, name, age, message, like}) => (
    <Post key={id} name={name} age={age} message={message} like={like}/>
  )
);

const maxLength10 = maxLength(10);

const AddPostForm = (props) => {
  return (
    <div className={style.postForm}>
      <form onSubmit={props.handleSubmit}>
        <div><Field component="input" name="name" type="text" placeholder="Введите имя"/></div>
        <div><Field component="input" name="age" type="text" placeholder="Введите возраст"/></div>
        <div><Field
          component={Textarea}
          name="message"
          placeholder="Введите сообщение"
          label="Введите сообщение"
          validate={[required, maxLength10]}/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    </div>
  )
};

const AddPostRedaxForm = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

const Posts = ({setPost, profile}) => {
  const {posts} = profile;

  const postsList = getPostsList(posts);

  const onSubmit = ({name, age, message}) => {
    setPost(name, age, message);
  };

  return (
    <div className={style.profilePosts}>
      My posts
      <AddPostRedaxForm onSubmit={onSubmit}/>

      <div className={style.posts}>
        {postsList}
      </div>
    </div>
  )
};

export default Posts;
