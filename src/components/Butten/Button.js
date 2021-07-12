import React from 'react';
import '../../css/Button.module.css';
import classes from '../../css/Button.module.css';
import '../../css/btn.scss';

const Button =(props)=>{
    return (
  <div >
      
      {0<props.currpage-20 ? <button className="btn rounded" onClick={ props.clickedBack}>
      
          backPage</button>: null
 }

              {props.length>props.currpage ?   <button className="btn" onClick={props.clickedNext}>nextPage</button>: null}
     
</div>
    )};
export default Button;