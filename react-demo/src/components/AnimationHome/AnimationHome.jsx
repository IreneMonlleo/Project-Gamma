
import Headboard from '../Headboard/Headboard';
import Quest from '../Quest/Quest';

import './AnimationHome.css';


export default function AnimationHome(props) {



    return(
        
        <div className= {!props.shouldShowHeadboard ? 'bg-animation-start' : 'bg-animation'}>
            {props.shouldShowHeadboard && <Headboard></Headboard>}
            {!props.shouldShowHeadboard && <Quest></Quest>}
        </div>
    )
    

}


