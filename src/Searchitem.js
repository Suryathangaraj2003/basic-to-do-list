import React from 'react'

const Searchitem = ({search,setsearch}) => {
  return (
    <form className='searchform' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search:</label>
        <input type="text" 
          id='search'
          role='searchbox'
          placeholder='Search Item'
          value={search}
          onChange={(e)=>setsearch(e.target.value)}
        />
    </form>
    
  )
}

export default Searchitem 