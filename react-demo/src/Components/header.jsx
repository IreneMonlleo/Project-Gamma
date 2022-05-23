import './Header.css';

export default function Header(props) {
  let classList = 'header';

  if (props.feature == true) {
    classList = classList + ' active';
  }

  return <div className={classList}>
    <img className="header__image" src={props.img} alt="" />
    <h1> { props.name }</h1>
  </div>
}