import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Read from './Read'
import Update from './Update'
import PostHorodatages from './PostHorodatage/PostHorodatages'
import LoginPage  from './LoginPage/LoginPage'
import ReadHoro from './HoroList/ReadHoro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav';

function App() {

  return (
      <div className="App">
          <Nav />
          <div className='route'>
            <Routes>
              {/* <Route exact path='/create' element={<Create />} /> */}
              <Route exact path='/read' element={<Read />} />
              <Route exact path='/update' element={<Update/>} />
              <Route exact path='/create' element={<PostHorodatages/>} />
              <Route exact path='/' element={<LoginPage/>} />
              <Route exact path='/readhoro' element={<ReadHoro />} />
            </Routes>
          </div>
      </div>
  );
}

export default App;
