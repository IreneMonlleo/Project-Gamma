import './Header.css';

export default function Header(props) {
  

  return <header className="header">
    <div className='header__container'>
      <img className='header__image' src={ props.img } alt="Mancha corporativa" />
      <span className='container__title'>
        <h1 className='header__title'> { props.title }</h1>
        <h1 className="header__title">{ props.secondtitle }</h1>
      </span>
    </div>
    <p className="header__description"> { props.description }</p>
  </header>
}