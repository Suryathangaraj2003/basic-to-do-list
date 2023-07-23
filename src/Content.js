
import React from 'react'
import { useState } from 'react';

import Itemlist from './Itemlist';


const Content =({items,deleteitem,checkhandle}) => {

  

    return (
      <main>
     
        {
        (items.length)?(
            
           <Itemlist 
                key={items.id}
                items={items}
                checkhandle={checkhandle}
                deleteitem={deleteitem}
           />
            ):(
                <p>your list is empty</p>
            )
        }
       
      </main>
            )}
    
  

export default Content