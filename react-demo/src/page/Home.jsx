import './Home.css';
import Footer from "../components/Footer";
import Card from "../components/Card";

import Mon_lleo from '../img/Mon_lleo.gif';
import Irene from '../img/IreneMonlleo.png';
import logohome from '../img/LogoHome.jpg';
import StainGrafic from '../img/ManchaGrafic.png';
import StainUX from '../img/ManchaUx.png';
import StainFront from '../img/ManchaFront.png';







export default function Home(props) {


    return ( 
    <div className="container">
      <section className='beginning'>
          <h1 className='title__beginning'>MON <br></br>LLE</h1> 
          <img className="gif"  src={Mon_lleo} alt=''/>
      </section>

      <main className="home">
        <section className="quest__container">
          <p className="home__text">Hola!!<br></br> 
              Soy <b>Irene Monlleó</b> y soy una profesional multidisciplinar por lo que eres libre de elegir que trabajos quieres ojear </p>
          <h3 className="quest">¿Que estas buscando?</h3>
          <div className="quest__buttons">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </section>

        <Card title="Bienvenidos a mi portfolio" description="Como ya sabeis me llamo Irene Monlleo. Estoy graduada en Bellas Artes en la Universidad Politécnica de Valencia. Seguidamente me especialice en Grafica Publicitaria en la EASD de Castellón y por último he dado el salto al mundodigital de la mano de ESAT
         Valencia con su postgrado especializado en UX/UI, Marketin digital y Desarrollo Web Front-end.">
           <img className="about" src={Irene} alt="Irene Monlleó"></img>
        </Card>
        <Card  description="Proyectos de branding, manual de identidad, maquetación editorial, cartelería, folletos, etc. Descubre todos los proyectos de Diseño Grafico que he desarrollado hasta ahora.">
          <img className="about" src={Irene} alt="Irene Monlleó"></img>
          <div className='container__title'>
            <img className="card__stain" src={StainGrafic} alt="Mancha corporativa"></img>
            <h2 className='card__title'>
              <span className='title-section'> Diseño </span>
              <span className='subtitle-section'> Gráfico </span>
            </h2>
          </div>
        </Card>
        <Card title="UX / UI" description="La experiencia de usuario es un tema muy importante en el diseño web hecha un vistazo a la metodología empleada en mis proyectos">
          <div className='container__title'> 
            <img className="card__stain" src={StainUX} alt="Mancha corporativa"></img>
            <h2 className='card__title'>
                <span className='title-section'> UX / </span>
                <span className='subtitle-section'> UI </span>
              </h2>
          </div>    
        </Card>
        <Card title="Front-end developer" description="HTML, CSS, SASS, JS… son los diferentes lenguajes que he desarrollado en estos proyectos.">
           <img className="about" src={Irene} alt="Irene Monlleó"></img>
           <div className='container__title'>
              <img className="card__stain" src={StainFront} alt="Mancha corporativa"></img>
              <h2 className='card__title'>
                  <span className='title-section'> Front-end </span>
                  <span className='subtitle-section'> Developer </span>
              </h2>
           </div>     
        </Card>
        




      </main>
      <Footer img={logohome} name="Puedes contactar conmigo en:" email="irene.monlleo@gmail.com" rrss= "@Mon_lleo"></Footer>
    </div>
    
    


    );
  }