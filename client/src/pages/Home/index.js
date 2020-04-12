import React from 'react';

import Jumbotron from '../../components/Jumbotron';
import Container from '../../components/Container';
import CardWithNav from '../../components/CardWithNav';
import CardWithPic from '../../components/CardWithPic';

function Home() {

    return (
        <div>
            <Jumbotron />
            <Container>
                <CardWithNav />
                <hr />
                <CardWithPic />
            </Container>
        </div>
    )
}

export default Home;