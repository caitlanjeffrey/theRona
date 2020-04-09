import React from 'react';
import "./style.css"

import NavBar from '../../components/NavBar';
import Jumbotron from '../../components/Jumbotron';
import ContainerCardNav from '../../components/ContainerCardNav';
import Footer from '../../components/Footer';

function Home() {
    console.log("Hello World")


    return (
        <div>
            <NavBar />
            <Jumbotron />
            <ContainerCardNav />
            <Footer />
        </div>
    )
}

export default Home;