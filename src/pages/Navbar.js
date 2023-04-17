import React from 'react'
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <ul>
            <li> <NavLink to="/home" >home</NavLink> </li>
            <li> <NavLink to="/about" >about</NavLink> </li>
            <li><NavLink to="/classes" >classes</NavLink> </li>
            <li> <NavLink to="/blogs" >blogs</NavLink> </li>
            <li> <NavLink to="/login" >login</NavLink> </li>
            <li> <NavLink to="/register" >registration</NavLink> </li>
        </ul>

    )
}
