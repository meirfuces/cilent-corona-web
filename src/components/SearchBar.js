import React, { useState } from 'react';


import '../css/App.css';
const SearchBar = (props) => {

    const [bodySearch, setBodySearch] = useState({})
    return (
        <React.Fragment>
        <div className="element1" >
       
            
      

                <input className="inputSearch" type="search" placeholder="Search..." style={{ 'width': '300px' , 'height': '40px'}}
                onChange= {(e) => {

                    setBodySearch({
                         value: e.target.value
                    })}}></input>
               </div>
            <div className="element2" >
            <button className="sendSearch" onClick={() => props.onSearch(bodySearch)}>search</button>
            </div>
            </React.Fragment>
            );


}

export default SearchBar;