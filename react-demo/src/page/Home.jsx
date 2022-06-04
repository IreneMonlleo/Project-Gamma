import './Home.css';
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Headboard from '../components/Headboard/Headboard';
import StainTitle from '../components/StainTitle';
import Quest from '../components/Quest/Quest';

import { Button } from '../components/Buttons.jsx';
import { Link } from 'react-router-dom';

import Irene from '../img/IreneMonlleo.png';
import logohome from '../img/LogoHome.jpg';
import StainGrafic from '../img/ManchaGrafic.png';
import StainUX from '../img/ManchaUx.png';
import StainFront from '../img/ManchaFront.png';
import Mujeres from '../img/MujeresMigrantes.jpg';




export default function Home(props) {


    return ( 
    <div className="home__container">
      <Headboard></Headboard>
      <main className="home">
        
        <Quest></Quest>

        <Card  style={{ flex: 'row-reverse' }} text="Contactar" description="Como ya sabeis me llamo Irene Monlleo. Estoy graduada en Bellas Artes en la Universidad Politécnica de Valencia. Seguidamente me especialice en Grafica Publicitaria en la EASD de Castellón y por último he dado el salto al mundodigital de la mano de ESAT
         Valencia con su postgrado especializado en UX/UI, Marketin digital y Desarrollo Web Front-end.">
           <img className='img__section' src={Irene} alt="Irene Monlleó"></img>
           <h2 className='card__title'>
              <span className='title-section'> Bienvenidos a</span>
              <span className='subtitle-section'>mi portfolio</span>
            </h2>
        </Card>

        

        <Card  text="Ver mas" description="Proyectos de branding, manual de identidad, maquetación editorial, cartelería, folletos, etc. Descubre todos los proyectos de Diseño Grafico que he desarrollado hasta ahora.">
          <img className='img__section' src={Mujeres} alt="Irene Monlleó"></img>
          <StainTitle img={StainGrafic} title="Diseño" subtitle="Gráfico"></StainTitle> 
        </Card>

        <Card text="Ver mas" description="La experiencia de usuario es un tema muy importante en el diseño web hecha un vistazo a la metodología empleada en mis proyectos">
          <StainTitle img={StainUX} title="Diseño" subtitle="Gráfico"></StainTitle> 
        </Card>

        <Card className=" digital" text="Ver mas" description="HTML, CSS, SASS, JS… son los diferentes lenguajes que he desarrollado en estos proyectos.">
           <img className='img__section digital' src={Irene} alt="Irene Monlleó"></img>
           <StainTitle img={StainFront} title="Front-end" subtitle="Developer"></StainTitle>     
        </Card>
    

      </main>
      <Footer img={logohome} ></Footer>
    </div>
    
    


    );
  }