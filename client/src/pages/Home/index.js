import React from 'react';
import "./style.css"

import NavBar from '../../components/NavBar';
import Jumbotron from '../../components/Jumbotron';

function Home() {
    console.log("Hello World")


    return (
        <div>
            <NavBar />
            <Jumbotron />
        </div>
    )
}

export default Home;