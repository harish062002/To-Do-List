import React from "react";
let footer=({length})=>{
    let y=new Date();
    return(

        <footer> {length} &copy; Copyright {y.getFullYear()} </footer>
    )
}
export default  footer;