import './Header.css';

export default function Header(props) {
  

  return <header className="header">
    <div className='header__container'>
      <img className='header__image' src={ props.img } alt="Mancha corporativa" />
      <h1 className='container__title'>
        <span className='header__title'> { props.title }</span>
        <span className='header__title'>{ props.secondtitle }</span>
      </h1>
    </div>
    <p className="header__description"> { props.description }</p>
  </header>
}