import React from 'react';
import './App.css';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';

import Create from './Create'
import Read from './Read'
import Update from './Update'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <div className="App">
          
      <div>
        <h1>
          Gafatoa</h1>
          <p>Prénom</p>
        <input></input> 
         <p>Nom</p>
        <input></input> 
        <p>Date d'arrivée</p>
        <DateTimePickerComponent></DateTimePickerComponent>
        <p>Date de départ</p>
        <DateTimePickerComponent></DateTimePickerComponent>

        <label> for="meeting-time">Choose a time for your appointment:</label>

<input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30"
       min="2018-06-07T00:00" max="2018-06-14T00:00"></input>
      
      
      
      
      
      
      </div>
          
         
          <Routes>
            <Route exact path='/create' element={<Create />} />
            <Route exact path='/read' element={<Read />} />
            <Route exact path='/update' element={<Update/>} />
          </Routes>
      </div>
  );
}

export default App;
