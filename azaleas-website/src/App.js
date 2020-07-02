import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Puppies from './Components/Puppies';
import Our_Mission from './Components/Our_Mission';
import Why_Us from './Components/Why_Us';
import Why_Irish_Golden_Doodles from './Components/Why_Irish_Golden_Doodles';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/puppies">
          <Puppies />
        </Route>
        <Route path="/our_mission">
          <Our_Mission />
        </Route>
        <Route path="/why_us">
          <Why_Us />
        </Route>
        <Route path="/why_irish_goldendoodles">
          <Why_Irish_Golden_Doodles />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
