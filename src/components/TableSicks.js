import React ,{ useEffect, useState } from "react";
// import './css/TableSicks'
import '../css/table.scss';
import '../css/TableSick.css';
import  TableCountry from './Layout/TableCountry';
import classes from '../css/Button.module.css';

import {createApiClient} from '../api';
import Card from './Card';
import Button from './Butten/Button';
import {Route, Link} from 'react-router-dom';
import TableSickDeatails from './pages/TableSickDetails';
const api = createApiClient();
const TableSicks =(props)=>{
  const [tableSickState, setTableSickState] = useState(null);
  const [showMoreState, setshowMoreState] = useState(false);
  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     const res = await api.getJsonState();
  //     setTableSickState(res.data)
  //     console.log('tableSick did mount');
  //     console.log(tableSickState);

  //   }
  
 
  // }, [])
    return (
      <Card>
  <div className="TableSicks">
  <Route path = {'/welcome/${props.data}'}>
  <TableSickDeatails/>
  </Route>
  
  <div class="container">
	
	<div class="table">
             { !showMoreState?
        <button className={classes.showMore} onClick={()=>setshowMoreState(!showMoreState)}>  showMore </button>
        :
        <button className={classes.showLess}onClick={()=>setshowMoreState(!showMoreState)}> showLess</button> 
  
}  
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link">Date</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" >Country</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" >Total Cases</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" >New Cases</a></div>
      {showMoreState?	<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">new death</a></div>: null}
			<div class="header__item"><a id="losses" class="filter__link filter__link--number">Show Prediction</a></div>

     
		</div>
		<div class="table-content">	
    { props.table? props.table.map(table =>
      // {if (table.location=== "Africa"){ 
<TableCountry date = {props.date}
   key = {table.index}
        date = {table.last_updated_date}
        total_cases = {table.total_cases} 
        country ={table.location}
        new_cases = {table.new_cases} 
        new_deaths={table.new_deaths}
        showMore = {showMoreState}
          /> 
       
        ): null}
			{/* <div class="table-row">		
				<div class="table-data">{props.date}</div>
				<div class="table-data">{props.country}</div>
				<div class="table-data">{props.total_cases}</div>
				<div class="table-data"> {props.new_cases}</div>
				
        {showMoreState?     <div class="table-data">{props.new_deaths}</div>: null}
			</div> */}

		
		</div>	
	</div>
</div>

</div>
</Card>
    )};
export default TableSicks;