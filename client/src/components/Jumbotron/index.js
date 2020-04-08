import React from 'react'
import "./style.css"
import Carousel from '../Carousel'

function Jumbotron() {

    return (
        <div className="header-content">
            <div className="container-jumbotron">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">12,745</h1>
                        <h2 className="display">Deaths.</h2>

                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
                <Carousel />
            </div>
        </div>

    )
}
export default Jumbotron;
