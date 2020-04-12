import React from 'react';

import Container from '../../components/Container';
import CardBasic from '../../components/CardBasic';
import FilledCard from '../../components/FilledCard';
import HorizontalCardWithImage from '../../components/HorizontalCardWithImage';

function DiseaseSymptoms() {
    console.log("Hello World")

    return (
        <div>
            <Container>
                <HorizontalCardWithImage />
                <CardBasic />
                <FilledCard />
            </Container>
        </div>
    )
}

export default DiseaseSymptoms;