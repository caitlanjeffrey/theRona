import React from 'react'
import './style.css';

function Jumbotron() {

    return (
        <div className="header-content">
            <div className="container-jumbotron">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h2 className="display">Since January 21, 2020</h2>
                        <h1 className="display-4">56,843</h1>
                        <h2 className="display">Deaths.</h2>
                        <p className="lead">“We have it totally under control. It’s one person coming in from China, and we have it under control. It’s going to be just fine.”</p>
                        <p className="sub-lead"> - President Donald Trump, CNBC Interview on January 22, 2020</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Jumbotron;
