import React, { useState } from 'react';


import '../css/App.css';
const SearchBar = (props) => {

    const [bodySearch, setBodySearch] = useState({})
    return (
        <div className="searchBar" >
        <div className="searchRow" >

            
      

                <input className="inputSearch" type="search" placeholder="Search..." style={{ 'width': '300px' , 'height': '40px'}}
                onChange= {(e) => {

                    setBodySearch({
                         value: e.target.value
                    })}}></input>
            

            <button className="sendSearch" onClick={() => props.onSearch(bodySearch)}>search</button>
            </div>
            </div>
            );


}

export default SearchBar;