import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.ava} src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;