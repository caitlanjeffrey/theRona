import React from 'react';
import './style.css';

import Container from '../../components/Container';
import CardBasic from '../../components/CardBasic';
import FilledCard from '../../components/FilledCard';
import HorizontalCardWithImage from '../../components/HorizontalCardWithImage';

function TestingCovid() {

    return (
        <div>
            <h1 className="page-title">Testing for COVID-19</h1>
            <Container>
                <HorizontalCardWithImage />
                <CardBasic />
                <FilledCard />
            </Container>
        </div >
    )
}

export default TestingCovid;