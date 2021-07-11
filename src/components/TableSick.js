import React  ,{ useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {createApiClient} from '../api';
import Graph_Corona from './pages/graph_Corona';
import  MainHeader from './Layout/cart/mainHeader';
const api = createApiClient();
const TableSick = (props)=>{
    // const params = useParams();
    const { id } = useParams();
    const [tableSickState, setTableSickState] = useState({});
    useEffect(() => {
       
    
        // }
        async function fetchMyAPI() {
            const res = await api.getJsonState();
            console.log(res.data);
            const equalCountry = id;
            const resNew = res.data.filter(data => data.location === equalCountry);
            setTableSickState({
                per_million:resNew[0].total_cases_per_million,
                aged_65_older: resNew[0].aged_65_older,
                aged_70_older: resNew[0].aged_70_older
            });
            console.log(resNew);
          ;
          }
      
          fetchMyAPI()
        }, [])
 
    return (
    <React.Fragment>
                  <MainHeader />

                  { this.state.data? this.state.data.map(table =>
        <TabkeSick
         table = {this.state.allData}
        key = {table.index}
        date = {table.last_updated_date}
        total_cases = {table.total_cases} 
        country ={table.location}
        new_cases = {table.new_cases} 
        new_deaths={table.new_deaths}> fdf 
        </TabkeSick>
        ): null}
    </React.Fragment>
);


}

export default TableSick;