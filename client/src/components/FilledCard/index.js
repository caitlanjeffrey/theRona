import React from 'react';
import './style.css';

function FilledCard() {

    return (
        <div className="card card-filled">
            <div class="card-header">
                <h4>When to Seek Medical Attention</h4>
            </div>
            <p className="card-text">If you develop emergency warning signs for COVID-19 get medical attention immediately. Emergency warning signs include*:</p>
            <ul className="symptom-list">
                <li>Trouble breathing</li>
                <li>Persistent pain or pressure in the chest</li>
                <li>New confusion or inability to arouse</li>
                <li>Bluish lips or face</li>
            </ul>
        </div>
    )
}

export default FilledCard;