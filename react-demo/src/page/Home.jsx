import React from "react";
import './Home.css';
import Mon_lleo from '../img/Mon_lleo.gif';
import Irene from '../img/IreneMonlleo.png';
import logohome from '../img/LogoHome.jpg';
import Footer from "../components/Footer";





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
        <article className="about">
          <img className="about__image" src={Irene} alt="Irene Monlleo"></img>
          <div className="about__container-text">
            <h1 className="about__title">Bienvenidos a mi Portfolio</h1>
            <p className="about__description">Como ya sabeis me llamo Irene Monlleo. Estoy graduada en Bellas Artes en la Universidad Politécnica de Valencia. Seguidamente 
              me especialice en Grafica Publicitaria en la EASD de Castellón y por último he dado el salto al mundo digital de la mano de ESAT 
              Valencia con su postgrado especializado en UX/UI, Marketin digital y Desarrollo Web Front-end.</p>
            <button className="buttons">Contactar</button>
          </div>
        </article>



      </main>
      <Footer img={logohome} name="Puedes contactar conmigo en:" email="irene.monlleo@gmail.com" rrss= "@Mon_lleo"></Footer>
    </div>
    
    


    );
  }