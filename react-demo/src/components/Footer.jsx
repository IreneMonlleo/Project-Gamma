import './Footer.css';

export default function Footer(props) {
  

    return <div>
      <img className="footer__logo" src={props.img} alt="" />
      <h2 className="header__title"> { props.name }</h2>
      <p className="footer__data"></p>
    </div>
  }