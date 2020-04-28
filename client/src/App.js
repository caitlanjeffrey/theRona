import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DiseaseSymptoms from './pages/Symptoms';
import TestingCovid from './pages/Testing';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/symptoms" component={DiseaseSymptoms} />
            <Route exact path="/testing" componet={TestingCovid} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
