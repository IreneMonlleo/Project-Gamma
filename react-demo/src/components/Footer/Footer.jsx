
import './Footer.css';

export default function Footer(props) {
  

    return <div className='footer' id="contact">
      <a href="#header">
        <img className="footer__logo" src={props.img} alt="logo Monlleo" />
      </a>
      <h2 className="footer__title">Puedes contactar <br></br>conmigo en:</h2>
      <div className="contact">
        <a className="footer__email" href="mailto:irene.monlleo@gmail.com" >irene.monlleo@gmail.com</a>
        <a className="footer__rrss" href="https://www.instagram.com/mon_lleo/">Instagram</a>
        <a className="footer__rrss" href="https://www.linkedin.com/in/irene-monlleo-7b3655211/">Linkedin</a>
      </div>
    </div>
  }