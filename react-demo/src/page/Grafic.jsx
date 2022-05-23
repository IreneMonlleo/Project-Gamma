import Header from "../components/Header"




export default  function Grafic() {
    const description="Un diseñador es aquel que sabe un poquito de todo, pues cada proyecto es diferente y requiere de una investigación y análisis previo. De este modo, podemos encontrar la solución más adecuada."
    
    return <div className="Grafico">
        <Header title="Diseño Gráfico" img="./img/ManchaGrafico.png" description={description}></Header>
        <main>
            
        </main>
    </div>
  }