import React  ,{ useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {createApiClient} from '../../api';
import Graph_Corona from './graph_Corona';
import  MainHeader from '../Layout/cart/mainHeader';
import classes from '../../css/Button.module.css';
const api = createApiClient();
const CreateDates = () =>{
    var date2 =new Date();
    date2= date2.getDate();
    console.log(date2);
    // console.log(new Date(date).toString().substring(5));
    // vdate2ar MONTH = date.substring(1, 3);
    // var DAY = date.substring(1, 3);
    
    // new Date(2021, MONTH, DAY);
    var testDate = new Date();
    var arr = [];
    for (var i = 6; i >= 0; i--) {
        // date2= date2.getDate() -1;
        arr.push(date2-i);
    }
    return arr;
}
const CreateSicks = (sicks) =>{
    var arr = [];
    for (var i = 0; i < 7; i++) {
        var val = Math.floor(Math.random() * ((sicks+40) - (sicks-40)) ) + (sicks+40);
        if (val<0)
        val =0;
        arr.push(val);
        sicks-=10;
    }
    return arr;
} 
const dates = ['01.06','02.06','03.06','04.06','05.06','06.06'];

const TableSickDeatails = (props)=>{
    // const params = useParams();
    const { id } = useParams();
    const [tableSickState, setTableSickState] = useState({});
    const [predictJson, setpredictJson] = useState(null);
    useEffect(() => {
        // async function fetchMyAPI() {
        //   const res = await api.getJsonState();
        //   setTableSickState(res.data);
        //   console.log('tableSick did mount');
    
        // }
        async function fetchMyAPI() {
            const res = await api.getJsonState();
            // const res2 = await api.predictByCountry();
            // console.log(res2.country[0]);
            // setpredictJson(
            //     res2.country[0].dates
            // );
            const equalCountry = id;
            const resNew = res.data.filter(data => data.location === equalCountry);
            const printS =CreateSicks(resNew[0].total_cases_per_million);
            console.log(printS);
            setTableSickState({
                new_cases: resNew[0].new_cases,
                per_million:resNew[0].total_cases_per_million,
                aged_65_older: resNew[0].aged_65_older,
                aged_70_older: resNew[0].aged_70_older
            });
          console.log(CreateDates((resNew[0])));
          console.log(tableSickState.all);
          }
      
          fetchMyAPI()
        }, [])
 
    return (
    <React.Fragment>
                  <MainHeader />
        <h2 className={classes.cut}>{id}</h2>

<Graph_Corona predictJson 
dates = {CreateDates()}
sicksPredict = {CreateSicks(tableSickState.new_cases)}
sicks = {CreateSicks(tableSickState.new_cases-5)}
/>

    </React.Fragment>
);


}

export default TableSickDeatails