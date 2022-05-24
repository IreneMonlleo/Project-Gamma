import React from "react";
import Header from "../components/Header";
import ManchaGrafic from '../img/ManchaGrafic.png';





export default  function Grafic() {
    const description= `Un diseñador es aquel que sabe un poquito de todo, pues cada proyecto es diferente 
    y requiere de una investigación y análisis previo. De este modo, podemos encontrar la solución más adecuada.`
    
    return <div className="Grafico">
        <Header title="Diseño Gráfico" img={ManchaGrafic} description={description}></Header>
        <main className="container__grid">
            
        </main>
    </div>
  }