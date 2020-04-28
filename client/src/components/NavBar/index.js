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
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Symptoms & Testing</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/symptoms">Symptoms</a>
                            <a class="dropdown-item" href="/testing">Testing</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/treatment">Treatment</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/information">State-By-State</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/information">News</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;
