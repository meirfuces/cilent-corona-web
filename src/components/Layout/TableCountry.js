import React ,{useState} from "react";
import '../../css/table.scss';
import { useEffect } from 'react';
import classes from '../../css/Button.module.css';
import '../../css/buttonPredict.scss';
import {Route, Link} from 'react-router-dom';
const TableCountry =(props)=>{
    const [showMoreState, setshowMoreState] = useState(false);
    return(

        <div> 
        <div class="table-row">	
  	
            <div class="table-data">{props.date}</div>
            <div class="table-data">{props.country}</div>
            <div class="table-data">{props.total_cases}</div>
            <div class="table-data"> {props.new_cases}</div>
            {props.showMore?  <div class="table-data"> {props.new_deaths}</div>: null}
            <div class="table-data">   <Link className="button" to={`/country/${props.country}`}>show Prediction</Link></div>

        </div>
      
        {/* <Link className={classes.showGraph} to={`/country/${props.country}`}>show Prediction</Link> */}
        </div>
        
       
    );
};
export default TableCountry;
