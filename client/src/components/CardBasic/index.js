import React from 'react';
import './style.css';

function CardBasic() {

    return (
        <div className="card card-basic">
            <h3 className="card-title">Watch for Symptoms</h3>
            <p className="card-text p-subtext">Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases. These symptoms may appear 2-14 days after exposure (based on the incubation period of MERS-CoV viruses).</p>
            <div className="row">
                <div className="card-body col-md-4">
                    <img className="symptoms-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-fever.png" alt="fever" />
                    <h5 className="card-text center-card-text">Fever</h5>
                </div>
                <div className="card-body col-md-4">
                    <img className="symptoms-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-cough.png" alt="fever" />
                    <h5 className="card-text center-card-text">Dry Cough</h5>
                </div>
                <div className="card-body col-md-4">
                    <img className="symptoms-image" src="https://www.cdc.gov/coronavirus/2019-ncov/images/symptoms-shortnessOfBreath.png" alt="fever" />
                    <h5 className="card-text center-card-text">Shortness Of Breath</h5>
                </div>
            </div>
            <a href="/testing" class="card-link">Should I be tested for coronavirus?</a>

            <hr />
            <h3 className="card-title">Other Symptoms</h3>
            <p className="card-text p-subtext">This list is not all inclusive. Please consult your medical provider for any other symptoms that are severe or concerning to you.</p>
            <div className="row">
                <div className="card-body col-md-4 list-of-mainsymptoms">
                    <li className="main-symptom-list">Headache</li>
                    <li className="main-symptom-list">Chills</li>
                    <li className="main-symptom-list">Sore Throat</li>
                </div>
                <div className="card-body col-md-4 list-of-mainsymptoms">
                    <li className="main-symptom-list">Repeated Shaking with Chills</li>
                    <li className="main-symptom-list">Muscle Pain</li>
                    <li className="main-symptom-list">New Loss of Taste or Smell</li>
                </div>
            </div>
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/downloads/COVID19-symptoms.pdf" class="card-link">For More Information on Symptoms of the Coronavirus</a>
        </div>
    )
}

export default CardBasic;