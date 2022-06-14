// import { useParams } from 'react-router-dom';
import './Header.css';

export default function Header(props) {
// let params = useParams();

  return <header className="header">
    <div className='header__container'>
      <img className='header__image' src={ props.img } alt="Mancha corporativa" />
      <h1 className='left'>{ props.title }<br></br>{ props.secondtitle }
      </h1>
    </div>
    <p className="header__description"> { props.description }</p>
  </header>
}