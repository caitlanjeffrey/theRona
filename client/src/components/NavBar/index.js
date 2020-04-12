import React from 'react'
import './style.css';

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <a className="navbar-brand" href="/">SARS-CoV-2</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/symptoms">Symptoms <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/treatment">Treatment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/information">State Information</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;
