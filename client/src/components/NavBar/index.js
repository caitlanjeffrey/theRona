import React from 'react'
import "./style.css"

function NavBar() {

    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a className="nav-link">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" >Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" >Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link">Link</a>
            </li>
        </ul>
    )
}
export default NavBar;
