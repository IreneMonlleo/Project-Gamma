import { Link } from "react-router-dom";
import './Navbar.css';




export default function Navbar(props) {


    return (<nav className='menu'>
        <p className='name'>Irene Monlleó</p>
        <ul>
          <li className=''><Link to ="/">Home</Link></li>
          <li><Link to ="/Grafic">Diseño Gráfico</Link></li>
          <li><Link to ="/Ux">Ux/Ui</Link></li>
          <li><Link to ="/Front ">Front-end</Link></li>
          <li><Link to ="/Footer">Contact</Link></li>
        </ul>
      </nav>
    );
}
