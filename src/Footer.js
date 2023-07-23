//̥
import React from 'react'

const Footer = ({len}) => {
  
     
  return (
    <footer> <h3>{len} {len===1 ||len===0 ? "item":"items"} in list
   </h3> </footer>
    
  )
}

export default Footer