//̥i
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({itemm,checkhandle,deleteitem}) => {
  return (
    <li className='list' key={itemm.id}>
    <input type="checkbox"
    onChange={() => checkhandle(itemm.id)}
    checked ={itemm.checked} 
   />
    <label onDoubleClick={() => checkhandle(itemm.id)}
    style={(itemm.checked)?{textDecoration:'line-through'}:null}
    >{itemm.item}</label>
    <button
    onClick={() => deleteitem(itemm.id)}
    role='button'
    tabIndex="0"
    aria-label={`Delete ${itemm.item}`}
    ><FaTrashAlt 
    
    /></button>
    </li>
  )
}

export default LineItem