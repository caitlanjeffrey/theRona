import React from 'react'
import "./style.css"

function ContainerCardNav() {

    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">World Health Organization</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Centers For Disease Control</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default ContainerCardNav;
