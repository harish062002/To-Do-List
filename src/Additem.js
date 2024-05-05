import React from "react"
import {FaPlus} from 'react-icons/fa'
import "./index.css"
import  { useRef } from "react";

const Additem=({val,setval,handlesubmit})=>{
 let inputRef=useRef();
    return(
        <form className="addForm" onSubmit={handlesubmit}>
             <label htmlFor="additem">Add item</label>
             <input 
             value={val} 
             ref={inputRef}
             onChange={(e) => setval(e.target.value)} 
             autoFocus id="additem"              
             placeholder='additem'
             type="text" required></input>
             <button type="submit" onClick={()=> inputRef.current.focus()} > <FaPlus/></button>
             
        </form>
    )
}
export default Additem
