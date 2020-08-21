import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={ style.posts }>
                <Post name={ props.users[0]['name'] } age={ props.users[0]['age'] } message={ props.users[0]['message'] } like={ props.users[0]['like'] } />
                <Post name={ props.users[1]['name'] } age={ props.users[1]['age'] } message={ props.users[1]['message'] } like={ props.users[1]['like'] } />
             </div>
        </div>
    )
};

export default Posts;
