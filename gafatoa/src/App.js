import React from 'react';
import './App.css';
import Read from './Read'
import Update from './Update'
import PostHorodatages from './PostHorodatage/PostHorodatages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './Login/LoginPage';

function App() {

  return (
      <div className="App">
          <header>
            <nav>
              <h1>
                Gafatoa
              </h1>
            </nav>
          </header>

          <div className='route'>
            <Routes>
              <Route exact path='/' element={<LoginPage />} />
              <Route exact path='/read' element={<Read />} />
              <Route exact path='/update' element={<Update/>} />
              <Route exact path='/create' element={<PostHorodatages/>} />
            </Routes>
          </div>
      </div>
  );
}

export default App;
