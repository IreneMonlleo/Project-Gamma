import './Header.css';

export default function Header(props) {
  

  return <div>
    <img className="header__image" src={props.img} alt="" />
    <h1 className="header__title"> { props.name }</h1>
    <p className="header__description"></p>
  </div>
}