import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Puppies from './Components/Puppies';
import Our_Mission from './Components/Our_Mission';
import Why_Us from './Components/Why_Us';
import Why_Irish_Golden_Doodles from './Components/Why_Irish_Golden_Doodles';
import './App.css';
import Header from './Components/Header';
export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path = '/About' component={About}/>
        <Route path = '/Contact' component={Contact}/>
        <Route path = '/Puppies' component={Puppies}/>
        <Route path = '/Our_Mission' component={Our_Mission}/>
        <Route path = 'Why_us' component={Why_Us}/>
        <Route path = 'Why_Irish_Golden_Doodles' component={Why_Irish_Golden_Doodles}/>
    </Switch>
);