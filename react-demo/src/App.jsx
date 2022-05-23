import React from 'react';
import './App.css';
import Header from './Components/Header';
import Link from './Components/Link';

function App() {
  
  return (
    <div className="App">
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/grafic">Diseño Gráfico</Link>
      </nav>
      {/* <Routes>
				// Cuando la url sea '/' se visualizará el elemento HOME
        <Route path="/" element={<Home />} />
        <Route path="/grafic" element={<Grafic />}></Route>
				// Cuando la url sea cualquier otra cosa, se visualizará NOMATCH
        <Route path="/ux" element={<Ux />} />
      </Routes> */}
    </div>
  );
}

export default App;