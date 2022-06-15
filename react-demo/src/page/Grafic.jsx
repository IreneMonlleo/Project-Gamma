import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Link } from "react-router-dom";

import './Grafic.css';
import { useEffect } from "react";






export default  function Grafic(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const description= `Un diseñador es aquel que sabe un poquito de todo, pues cada proyecto es diferente 
    y requiere de una investigación y análisis previo. De este modo, podemos encontrar la solución más adecuada.`
    
    return (<div className="grafico">
        <Header title="Diseño" secondtitle="Gráfico" img="./picture/stain/ManchaGrafic.png" description={description}></Header>
        <main className="grid-container columns">
            
            { props.data.filter((elem) => elem.category === 'diseño-grafico').map((info =>
            
        
                <article id="3691" class="location-listing">
                    <Link className="location-title"to={`/${info.category}/${info.id}`}>
                        {info.title}<br></br>{info.secondtitle}            
                    </Link> 
                    <div class="location-image">
                        <Link to={`/${info.category}/${info.id}`}>
                            <img className="grid-img" src={info['img-main']} alt={info.alt} ></img>
                        </Link>     
                    </div>         
                </article>
            
        ))}
            
        </main>
        <Footer img="./picture/logo/LogoGrafic.jpg" ></Footer> 
    </div>
 ) }