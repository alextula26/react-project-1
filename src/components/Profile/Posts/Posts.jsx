import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = () => (
    <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={style.posts}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    </div>
);

export default Posts;
