import React from 'react'
import './style.css';

function CardWithNav() {

    return (
        <div className="cardwithnav">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="/who">World Health Organization</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cdc">Centers For Disease Control</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Covid-19 Resources</h5>
                    <p className="card-text">Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority.</p>
                    <p className="card-text">Most people who become infected experience mild illness and recover, but it can be more severe for others.</p>
                    <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" className="btn btn-primary">Emergency Information</a>
                </div>

            </div>
        </div>
    )
}
export default CardWithNav;
