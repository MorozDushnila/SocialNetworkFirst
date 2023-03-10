import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost();
    }


    //срабатывает тогда, когда пытаются изменить внутреннее содержание в textarea
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElement}
        </div>
    </div>
}


export default MyPosts;