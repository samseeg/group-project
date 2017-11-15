import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login.js';
import EmpMain from './Employee/EmpMain/EmpMain.js';
import TimeCard from './Employee/TimeCard/TimeCard.js';
import VacaRequest from './Employee/VacaRequests/VacaRequests.js';
import Calendar from './Employee/Calendar/Calendar.js';
import EmpRequest from './Admin/EmpRequest/EmpRequest.js';
import EmpTime from './Admin/EmpTime/EmpTime.js';
import NavBar from './Employee/NavBar/NavBar.js';



class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        
        <Route component={ Login } path='/' exact />        
        <Route component={ EmpMain } path='/empmain' />
        <Route component={ TimeCard } path='/timecard' /> 
        <Route component={ VacaRequest } path='/vacarequests' />
        <Route component={ Calendar } path='/calendar' />
        <Route component={ EmpRequest } path='/emprequest' />
        <Route component={ EmpTime } path='/emptime' />
      </div>
      </HashRouter>
    );
  }
}

export default App;
