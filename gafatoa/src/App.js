import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Create from './Create'
import Read from './Read'
import Update from './Update'
import PostHorodatages from './PostHorodatage/PostHorodatages'
import LoginPage  from './LoginPage/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <div className="App">
          <header>
            <nav>
              <h1>
                Gafatoa
              </h1>
              <button className='btn btn-primary'>
                <Link to="/" className="btn">Login</Link>
              </button>
            </nav>
          </header>
          <div className='route'>
            <Routes>
              {/* <Route exact path='/create' element={<Create />} /> */}
              <Route exact path='/read' element={<Read />} />
              <Route exact path='/update' element={<Update/>} />
              <Route exact path='/create' element={<PostHorodatages/>} />
              <Route exact path='/' element={<LoginPage/>} />
            </Routes>
          </div>
      </div>
  );
}

export default App;
