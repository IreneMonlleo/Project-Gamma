import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Navbar from './components/Menu/Navbar';
import Front from './page/Front';
import Grafic from './page/Grafic';
import Ux from './page/Ux';
import Home from './page/Home';
import Project from './page/Project';




function App() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('/jsons/data.json')
      .then(response => setInfo(response.data));
  }, [])


  return (
    <div className="App">
      <div className="frame-top">
        <Navbar></Navbar>
      </div>
      <div className="frame-bottom">
      </div>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/grafic' element={<Grafic data={info}/>} />
      <Route path='/ux' element={<Ux data={info}/>} />
      <Route path='/front' element={<Front data={info}/>}/>
      <Route path='/:category/:id' element={<Project data={info}/>}/>
      {/* <Route path="*" element={<Error />} /> */}
      </Routes>
     
    </div>
  );
}

export default App;