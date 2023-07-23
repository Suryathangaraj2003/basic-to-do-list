import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState ,useEffect } from 'react';
import Additem from "./Additem";
import Searchitem from "./Searchitem";


function App() {
  const API_URl='http://localhost:3500/items '
  
    const [items ,setitem] = useState([])
        
    

    const [newitem,setNewitem]=useState('')
    const [search,setsearch] =useState('')

    useEffect(()=>{
      const fetchitems=async ()=>{
        try{
          const response = await fetch(API_URl);
          const listitem = await response.json();
          setitem(listitem)
        }catch(err){
          console.log(err.stack)
        }
      }
      (async ()=>await fetchitems())()
    },[])

    const additem =(item)=>{
      let id=0;
     for(id=0;id<items.length+1;id++){
      if (id<items.lenght){
        id=id+1
      }
     }
      const addNewitem ={id,checked:false,item}
      const listitem =[...items,addNewitem]
      setitem(listitem)
      console.log(items.lenght)
      localStorage.setItem("todo_list",JSON.stringify(listitem))

    }

    const checkhandle = (id) =>{
        const listitem = items.map((item) => item.id===id ? {...item,checked:!item.checked,}:item)
        setitem(listitem)
        
         localStorage.setItem("todo_list",JSON.stringify(listitem))
        
    }
    const deleteitem =(id) =>{
        const listitem = items.filter((item) => item.id!==id )
        setitem(listitem)
         localStorage.setItem("todo_list",JSON.stringify(listitem))
    }
    const len = items.length

    const handlsubmit = (e) => {
     e.preventDefault()
     if(!newitem) return;
     console.log(newitem)
     additem(newitem)
      setNewitem('')
     
    }
  return(
  <div className="App">
    <Header />
    <Additem 
   
      handlesubmit={handlsubmit}
      newitem={newitem}
      setNewitem={setNewitem}
     
    />
    <Searchitem 
      search={search}
      setsearch={setsearch}
    />
    <Content  
    key={items.id}
        items={items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase()))}
        checkhandle={checkhandle}
        deleteitem={deleteitem}
        />
    <Footer 
      len={len}
    />
  </div>
 )
}


export default App;
