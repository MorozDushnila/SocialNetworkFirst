import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import friends from "./Frieds/Friends";
import Friends from "./Frieds/Friends";

const  activeLink = ({isActive}) => isActive ? s.active : s.item;

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' className={activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                <Friends/>
            </div>
        </nav>
    );
}
export default Navbar;