import React from 'react';
import {addPostCreator, updateChangePostCreator} from "../../../redux/store";
import Posts from "./Posts";

const PostsContainer = ({store}) => {

  const onSetPost = () => {
    store.dispatch(addPostCreator());
  };

  const onChangePost = (name, age, message) => {
    store.dispatch(updateChangePostCreator(name, age, message));
  };

  return (
    <Posts setPost={onSetPost} changePost={onChangePost} profile={store.getState().profile}/>
  )
};

export default PostsContainer;
