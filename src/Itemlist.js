//̥

//̥import React from 'react'

import React from 'react'
import LineItem from "./LineItem";
const Itemlist = ({items,checkhandle,deleteitem}) => {
  return (
    <ul>
    {items.map((itemm) =>
    (
      <LineItem 
       
        itemm={itemm}
        key={itemm.id}
        checkhandle={checkhandle}
        deleteitem={deleteitem}
      />
        ))}
    </ul>
  )
}

export default Itemlist