import './Header.css';

export default function Header(props) {
  

  return <header className="header">
    <img className="header__image" src={ props.img } alt="Mancha corporativa" />
    <h1 className="header__title"> { props.title }</h1>
    <p className="header__description"></p>
  </header>
}