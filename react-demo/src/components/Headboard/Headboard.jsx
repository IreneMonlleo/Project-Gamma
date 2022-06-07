import './Headboard.css';

import Mon_lleo from '../../img/Mon_lleo.gif';

export default function Headboard(props) {


    return (
        <div className ='headboard'>
            <div className ='headboard__element'>
                <span className ='first-title'>MON<br></br>LLE</span> 
                <img className ="gif"  src={Mon_lleo} alt='Logo'/>
            </div>
        </div>
    )
        
    }