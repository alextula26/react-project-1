import React from 'react';
import {addPostCreator, updateChangePostCreator} from "../../../redux/store";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const onSetPost = () => {
            store.dispatch(addPostCreator());
          };

          const onChangePost = (name, age, message) => {
            store.dispatch(updateChangePostCreator(name, age, message));
          };

          return <Posts setPost={onSetPost} changePost={onChangePost} profile={store.getState().profile}/>
        }
      }
    </StoreContext.Consumer>
  )
};

export default PostsContainer;
