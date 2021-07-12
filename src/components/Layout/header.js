import classes from './Header.module.css';
import corona_img from '../../image-folder/Corona-Virus.png'
import React from 'react';
import {Fragment} from 'react';
import HeaderButton from './headerButton';
const Header =  props =>{
    return (
    <React.Fragment>
        <header className= {classes.header}>
        
            <h2 className="titleWeb">Covid-19 Prediction Web</h2>
        </header>
        {/* <div className = {classes['main-image']}>
            <img src ={corona_img} alt= 'corona web'/>
        </div> */}
    </React.Fragment>
    );
};
export default Header;