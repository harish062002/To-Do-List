import React from "react";

let search=({searchval,setsearch})=>{
    return(
        <form className="searchForm"> 
        <label htmlFor="search" > search</label>
        <input 
            value={searchval}
            onChange={(e)=>setsearch(e.target.value)}
            id="search"
            type="text"
            required
            placeholder="Search"
            autoFocus
        ></input>
        <button type="submit"></button>
        </form>
    )
}
export default search;