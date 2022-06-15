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

  

  const [dataInApp, setDataInApp] = useState([]);
  

  useEffect(() => {
    axios.get('/jsons/data.json')
      .then(response => setDataInApp(response.data));
  }, [])

  return (<>
    <div className="frame-desktop">
    
        {/* <div className='frame-top'> */}
          <Navbar></Navbar>
        {/* </div>
        <div className='frame-bottom'>
        </div> */}
  </div>
    <div className="App">
      
      
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/grafic' element={<Grafic data={dataInApp}/>} />
      <Route path='/ux' element={<Ux data={dataInApp}/>} />
      <Route path='/front' element={<Front data={dataInApp}/>}/>
      <Route path='/:category/:id' element={<Project info={dataInApp}/>}/>
      {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      
    </div>
    </>
  );
}

export default App;