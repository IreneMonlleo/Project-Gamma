import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills";

import './Front.css';
import { ButtonA } from "../components/ButtonA";
import { useEffect } from "react";





export default  function Front(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return <div className="Front">
        <Header title="Front-end" secondtitle="Developer" img="../picture/stain/ManchaFront.png"  ></Header>
        <main className="skills__front">
            <section className="wrapper-skills">
                <div className="skills-text">
                    <h2 className="skills__section-title">Lenguajes de <br></br>Programación </h2>
                    <p className="skills__section-description">Estos son los lenguajes de programación con los que día a día me voy abriendo camino al mundo del desarrollo web y su  comunidad.</p>
                </div>
                <div className="skills__section">
                    <Skills title="Html" text="Estructuración y jerarquización del contenido de la web con una buena sintaxis de etiquetado."></Skills>
                    <Skills title="Css" text="Hoja de estilos que aplicamos al html , convirtiendo el código de la web de algo básico a un estilo atractivo y totalmente responsive."></Skills>
                    <Skills title="JS/REACT" text="Conocimientos de JS básico y conocimientos de React para desarrollar una página web mediante componentes."></Skills>
                    <Skills title="SASS" text="Preprocesador de hojas de estilos, para crear de este modo un código más estructurado y fácil de entender."></Skills>
                    <Skills title="PHP" text="Estructuración del código html y preparación del código de las plantillas de wordpress."></Skills>
                    <Skills title="WordPress" text="Creación de plantillas personalizadas para cada cliente y proyecto."></Skills>
                </div>
            </section>
            
            <section className="front__container-project">
            { props.data.filter((elem) => elem.category === 'front-end').map((info =>
                <article>
                    <img className="front-img-project" src={info['img-main']} alt={info.alt} ></img>
                    <h3>{info.tools}</h3>
                    <div className="container-buttons-front">
                        <ButtonA role='button' className='button-contact' href= {info.github} >GitHub</ButtonA>
                        <ButtonA role='button' className='button-contact' href= {info.href} >Ver web</ButtonA>
                    </div>
                </article>
            ))
            }
            </section>
        </main>
        <Footer img="../picture/logo/LogoFront.jpg" name="Puedes contactar conmigo en:"></Footer> 
    </div>
  }