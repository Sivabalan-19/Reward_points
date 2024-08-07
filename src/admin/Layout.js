import React from 'react'

import { useState } from 'react';


import AdmintableCaller from './AdmintableCaller';
const Myeventrequest = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedEventId, setSelectedEventId] = useState(null);
    const nextPage=(id)=>{
        console.log("hi")
        setSelectedEventId(id);
        setCurrentPage(1);
  
    }
    const prevPage=()=>{
        setCurrentPage(0);
    }
    return (
        
        <div style={{height:'100%'}} className='eventrequesteve'>
          {currentPage === 0 && (
      
     <AdmintableCaller nextPage={nextPage}></AdmintableCaller>
          )}
          {currentPage === 1 && (
    
    <AdmintableCaller nextPage={nextPage}></AdmintableCaller>
          )}
        </div>
      );
}

export default Myeventrequest