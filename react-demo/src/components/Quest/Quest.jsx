import { Button } from "../Buttons";
import './Quest.css'




export default function Quest(props) {


    return ( 
        <section className="quest__container">
          <p className="quest__text">Hola!!<br></br> 
              Soy <b>Irene Monlleó</b> y soy una profesional multidisciplinar por lo que eres libre de elegir que trabajos quieres ojear </p>
          <h3 className="quest">¿Que estas buscando?</h3>
          
          <div className="quest__buttons">
           
            <Button secondary to ="/grafic">Diseño Gráfico</Button>
            <Button secondary to ="/ux">Ux / Ui</Button>
            <Button secondary to ="/front">Front-end Developer</Button>
            
          </div>
          
        </section>

    );}
    