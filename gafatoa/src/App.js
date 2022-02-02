import React from 'react';
import './App.css';

import Create from './Create'
import Read from './Read'
import Update from './Update'
import PostHorodatages from './PostHorodatage/PostHorodatages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <div className="App">
          <h1>
              Gafatoa
          </h1>
          <Routes>
            <Route exact path='/create' element={<Create />} />
            <Route exact path='/read' element={<Read />} />
            <Route exact path='/update' element={<Update/>} />
            <Route exact path='/' element={<PostHorodatages/>} />
          </Routes>
      </div>
  );
}

export default App;
