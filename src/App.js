import React from "react";
import  { useState,useEffect } from "react";
import Activity from "./Activity";
import Header from "./Header";
import Footer from "./Footer";
import Additem from "./Additem";
import Search from "./Search";

function App() {

  let [item,setitem]= useState(
    []  );
    // [
      
    //     {
    //       id:1,
    //       checked:false,
    //       item:"Complete Full Stack"
    //     },
    //     {
    //       id:2,
    //       checked:false,
    //       item:"Placed in Tcs"
    //     }
    
      
    // ]
   

 
useEffect(()=>{
  JSON.parse(localStorage.getItem("todo"))
},[post])


// add item
let [val,setval]=useState('');

let add=(item1)=>{

let id1= item.length ? item[item.length -1 ].id
+1: 1;

let newobj={id:id1,checked:false,item:item1}

 let listitems=[...item,newobj]
 
setitem(listitems)

// let object={
 
//   method:'POST',
//   headers:{
//     'Content-Type':'application/json' },
//   body:JSON.stringify(newobj)
// }
// let result=apirequest(API,object)

localStorage.setItem("todo",JSON.stringify(listitems))


}


let handlesubmit=(e)=>{
    e.preventDefault()
  
    
    add(val)
    setval('')
}

//activity
let  handle =(id)=>{
let  listitems= item.map((item)=> 
item.id===id ? {...item,checked:!item.checked}:item )

setitem(listitems)

// let selected=listitems.filter(items => items.id===id )
// const update={ 
//   method:'PATCH',
//   headers:{
//     'Content-Type':'application/json'
//   },
//   body:JSON.stringify({checked:selected[0].checked})
// }
// let newapi=`${API}/${id}`
// apirequest(newapi,update);
localStorage.setItem("todo",JSON.stringify(listitems))
}


let handledel=(id) =>{
let listitems=item.filter((item)=>
   item.id !==id
)
setitem(listitems);
localStorage.setItem("todo",JSON.stringify(listitems))

// const delete1={ 
//   method:'DELETE',

// }
// let newapi=`${API}/${id}`
// apirequest(newapi,delete1);

}






//search
let [searchval,setsearch]=useState('');



  return(
   <div>
      <Header title= "to do list"/>
      <Additem  
      handlesubmit={handlesubmit}
      val={val}
      setval={setval}
      />
      <Search 
       searchval={searchval}
       setsearch={setsearch}
      
      />
      <Activity  
      item={item.filter(item =>  (item.item).includes(searchval))}
      handle={handle}
      handledel={handledel}
      
      />
      <Footer length={item.length} />
     
     
    </div>
    
  );
}

export default App;
