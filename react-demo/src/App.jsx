import React from 'react';
import './App.css';
import Header from './Components/Header';


function App() {
  
  return (
    <div className="App">
      <Routes>
				// Cuando la url sea '/' se visualizará el elemento HOME
        <Route path="/" element={<Home />} />
		
        <Route path="/grafic" element={<Grafic />}></Route>
				// Cuando la url sea cualquier otra cosa, se visualizará NOMATCH
        <Route path="/ux" element={<Ux />} />
      </Routes>
    </div>
  );
}

export default App;