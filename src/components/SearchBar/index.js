import React from "react";


function SearchBar(props){
    return (
        <div className="md-form active-red active-red-2 mb-3">
            <input className="form-control" type="text" placeholder="Search By Last Name" aria-label="Search" value={props.currentInput} onChange={props.handleInput}/>
        </div>
    );
}


export default SearchBar;