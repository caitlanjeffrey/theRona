import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DiseaseSymptoms from './pages/Symptoms';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/symptoms" component={DiseaseSymptoms} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
