import React from 'react';
const header=(props)=>{

    return(
  <header> <h1> {props.title} </h1> </header>
    
    )
}
header.defaultProps={
  title:"to-do-list"
}
export default header;