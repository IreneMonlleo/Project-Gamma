import './Footer.css';

export default function Footer(props) {
  

    return <div className='footer'>
      <img className="footer__logo" src={props.img} alt="logo Monlleo" />
      <h2 className="footer__title"> { props.name }</h2>
      <p className="footer__email">{props.email}</p>
      <p className="footer__rrss">{props.rrss}</p>
    </div>
  }