

import './Slider.css'
import { motion } from 'framer-motion'



export default  function Slider(props) {

  return (
    <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-2123}} >
            <motion.div className='item'>
            <img src={props.img} alt="" />
            </motion.div>
            <motion.div className='item'>
            <img src={props.img1} alt="" />
            </motion.div>
            <motion.div className='item'>
            <img src={props.img2} alt="" />
            </motion.div>
            <motion.div className='item'>
            <img src={props.img3} alt="" />
            </motion.div>
       
        </motion.div>
        
    </motion.div>
  )
}