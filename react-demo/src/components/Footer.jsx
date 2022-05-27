import './Footer.css';

export default function Footer(props) {
  

    return <div className='footer'>
      {props.children}
      <img className="footer__logo" src={props.img} alt="logo Monlleo" />
      <h2 className="footer__title">
        <span className="title--top">Puedes contactar</span>
        <span>conmigo en:</span>
      </h2>
      <div className="contact">
        <a className="footer__email" href="mailto:irene.monlleo@gmail.com" >irene.monlleo@gmail.com</a>
        <a className="footer__rrss" href="https://www.instagram.com/mon_lleo/">@Mon_lleo</a>
      </div>
    </div>
  }