import React from 'react';
import './style.css';

function HorizontalCardWithImage() {

    return (
        <div className="horizontal-card">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <img src="data:image/png;base64,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" className="card-img" alt="warning" />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.</h5>
                            <h5 className="card-title">Cancer patients — especially those with blood or lung malignancies, or tumors that have spread throughout the body — have a higher risk of death or other severe complications from covid-19 compared with those without cancer.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCardWithImage;