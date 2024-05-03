import { FaTrashAlt} from 'react-icons/fa'
import React from 'react';
const Activity=({handle,handledel,item})=>{
  
   
    
    return(
    <div className="App">
     <main>   
   {
   (item.length) ? 
   
   (
  <ul>
            {item.map((item) => 
            (

                <li className="item" key={item.id}>
                    <input 
                    type="checkbox"
                    onChange={()=>handle(item.id)}
                    checked={item.checked}
                    />
                    <label onClick={()=>handle(item.id)} style={item.checked===true ? {textDecoration :"line-through"}:null}> {item.item}</label> 
                    <button onClick={()=>handledel(item.id)}> <FaTrashAlt/>  </button>

                    
        
                </li>
            ))}
        </ul>
       
       ):(<p style={{color:"blue"}}>the list is empty </p>)}
    
     </main>
     </div>
     )
}
export default Activity;
