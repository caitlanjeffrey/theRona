import React from 'react';
import "./style.css"

import Jumbotron from '../../components/Jumbotron';
import Container from '../../components/Container';
import CardBasic from '../../components/CardBasic';

function DiseaseSymptoms() {
    console.log("Hello World")

    return (
        <div>
            <Container>
                <CardBasic />
            </Container>
        </div>
    )
}

export default DiseaseSymptoms;