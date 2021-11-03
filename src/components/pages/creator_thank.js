import React from "react";
import MainHeader from '../Layout/cart/mainHeader';
import classes from '../../css/Creator.moudle.css';
import '../../css/Creator.scss';
import {Route, Link} from 'react-router-dom';

const Creator_thank = ()=>{
return (
    <React.Fragment>
            <MainHeader />


<div class="content">
  <div class="wrapper-1">
    <div class="wrapper-2">
      <h1>Created By</h1>
      {/* <p>Created By </p> */}
      <p>Meir Fuchs</p>
    
      <button class="go-home">
      <Link  to={'/'}>backHome</Link>
      </button>
     
    </div>
    <div class="footer-like">
      <p>
       <a href="https://github.com/meirfuces/Corona-Prediction-Web">GitHub</a>
      </p>
    </div>
</div>
</div>



<link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro" rel="stylesheet"></link>
</React.Fragment>
);
}

export default Creator_thank;
