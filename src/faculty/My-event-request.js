import React from 'react'
import Myevents from './myevents';
import Falcultyfirstpage from './Falcultyfirstpage';
import { useState } from 'react';
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
            <Myevents nextPage={nextPage}></Myevents>
          )}
          {currentPage === 1 && (
           <Falcultyfirstpage prevPage={prevPage} eventId={selectedEventId}></Falcultyfirstpage>
          )}
        </div>
      );
}

export default Myeventrequest