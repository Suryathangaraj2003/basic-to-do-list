import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const Additem = ({handlesubmit,newitem,setNewitem,e}) => {
  const inputref=useRef()
  return (
    <form className='additemform' onSubmit={handlesubmit}>
        <label htmlFor="additem"> Add Item :</label>
        <input type="text"
        ref={inputref}
        className='additem_input'
        id='additem'
        placeholder='Add item'
        required
        value={newitem}
        onChange={(e) => setNewitem(e.target.value)}
       />
        <button
        className='additem_button'
        type='submit'
        aria-label='add item'
        onClick={()=> inputref.current.focus()}
        
    >
            <FaPlus />
        </button>
    </form>
  )
}

export default Additem