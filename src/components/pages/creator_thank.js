import React from "react";
import MainHeader from '../Layout/cart/mainHeader';
import classes from '../../css/Creator.moudle.css';

const Creator_thank = ()=>{
return (
    <React.Fragment>
            <MainHeader />

<h1 className= {classes.crator} >Created By</h1>
<h3 className= {classes.crator}>Meir Fuchs </h3>
<h3 className= {classes.crator}> Oz Moyal</h3>
<h3 className= {classes.crator}>Yonatan Choen</h3>
<h3 className= {classes.crator}>Ginton Dorechler</h3>
<p > instructed by Oren Barkan</p>
<hr></hr>
<a href= "https://github.com/meirfuces/Corona-Prediction-Web"><h3 > GitHub</h3></a>

</React.Fragment>
);
}

export default Creator_thank;