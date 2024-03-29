// import {Data} from './components/data';
import React, { Component } from 'react';
// import {data2}  from './components/data2';
import './css/App.css';
import TabkeSick from './components/TableSicks';
import './css/TableSick.css'
import {createApiClient} from './api';
import Header from './components/Layout/header';
import Button from './components/Butten/Button';
import {Route, Switch, Redirect} from 'react-router-dom';
import Creator_thank from './components/pages/creator_thank';
import MainHeader from './components/Layout/cart/mainHeader';
import World_map from './components/pages/world_map';
import Graph_Corona from './components/pages/graph_Corona';
import TableSickDeatails from './components/pages/TableSickDetails';
import NotFound from './components/pages/NotFound';
import SearchBar from './components/SearchBar';
// import DownloadFile from './components/downloadFile';
const api = createApiClient();


class App extends Component {
  state = {
    data: null,
    allData:null,
    page: 20,
    length: 211
  }
  async componentDidMount(){
    console.log("didMount App.js");
   const res = await api.getJsonState();
   console.log(res);

   const resNew = res.data.filter(data => data.location === "Paraguay");
    this.setState({data: res.data.slice(0,this.state.page),
        allData:res.data, length:res.data.length
    })

    const p = this.state.data;
   
 
    }
    async componentDidUpdate(prevProps,prevState,snapshot) {
      // Typical usage (don't forget to compare props):
      if (this.state.page !== prevProps.page && this.state.page !== prevState.page) {
        
     
      //  const res = await api.getJsonState();
      //  console.log(this.state.allData);
        this.setState({data: this.state.allData.slice(this.state.page-20,this.state.page)
      })
    }
 
}
  nextPage = () =>{
    this.setState({page:this.state.page+20})
   
  }
  backPage =()=>{
    this.setState({ page:this.state.page-20})
  }

  onSearch = async (inputSearch) =>{
    const listCountrry= this.state.allData;
    console.log(this.state.allData.length);
    const resNew = listCountrry.filter(data => data.location.toLowerCase() === inputSearch.value.toLowerCase());
    this.setState({data: resNew, length: resNew.length});
  }


  render () {
                                                                                                                                                                          // const table = this.state.table.slice(0,4);
  return (
  
    <div className="tableSick">
       
      <main>
      <Header/>
        <Switch>
        <Route path='/' exact>
          <Redirect to ='welcome'/>
        </Route>
        <Route path='/welcome' exact>
        <MainHeader />
        {/* <DownloadFile/> */}
    <SearchBar
    onSearch={this.onSearch}/>

        <Button clickedNext ={this.nextPage} clickedBack={this.backPage} length = {this.state.length} currpage = {this.state.page}></Button>
        
        {/* { this.state.data? this.state.data.map(table => */}
        <TabkeSick
         table = {this.state.data}
        // key = {table.index}
        // date = {table.last_updated_date}
        // total_cases = {table.total_cases} 
        // country ={table.location}
        // new_cases = {table.new_cases} 
        // new_deaths={table.new_deaths}
        > 
        </TabkeSick>

   
        {/* ): null} */}
      
{/* {this.state.data? 
this.state.data[0].continent : null} */}
        <Button clickedNext ={this.nextPage} clickedBack={this.backPage} length = {this.state.length} currpage = {this.state.page}></Button>

        </Route>
        <Route path='/country/:id'><TableSickDeatails allData={this.state.allData}/></Route>
        <Route path ="/thankAndCreator"><Creator_thank/></Route>
        <Route path ="/graph">
        <MainHeader />
          <Graph_Corona/></Route>
        <Route path ="/world_map">< World_map 
         allData={this.state.allData}
         /></Route>
        <Route path ="*">< NotFound/></Route>
       
        </Switch>
      </main>
      

      {/* <PieChart></PieChart> */}
  {/* <div>
                <MapChart />

  </div> */}
     
{/* <h1>corona web</h1> */}






  </div>
  
  );
}
}
export default App;
