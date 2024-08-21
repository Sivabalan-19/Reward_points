import React, { useState } from 'react';
import './Eventmasters.css';


    function Eventview(props) {

        const [darkMode, setDarkMode] = useState(false);
        
        let row = props.detail.find(o => o.id == props.id);
   
        const toggleDarkMode = () => {
            setDarkMode(!darkMode); 
          };
        
          if (!row) {
            return null;
          }
          else{
        return (
       <div className={`myeventsumma ${darkMode ? 'dark-mode' : ''}`}>
         <div className='container'>
             <div className='eventinfobox'>
             
             <div className='myeventtitle'>
                <div className='myeventtit'>Event Details :</div>
                <div><button className='cross close-button' onClick={props.onc}><i className="fa-solid fa-xmark"></i></button></div>
        </div>
                 <div className="activity-info">
                     <div className="info-row"> 
                         <div className="info-column">
                         <div className="info-item">
                             <span className="labelee">Activity Name</span>
                             <span className="value">: {row.Activity_name}</span>
                         </div>
                         <div className="info-item">
                             <span className="labelee">Activity Category</span>
                             <span className="value">: {row.
Activity_type}</span>
                         </div>
                         <div className="info-item">
                             <span className="labelee">Available</span>
                             <span className="value">: {row.seat}</span>
                         </div>
                         <div className="info-item">
                             <span className="labe">Date</span>
                             <span className="value">: {row.Date}</span>
                         </div>
                         </div>
                         <div className="info-column">
                         <div className="info-item">
                             <span className="labele">Activity Type</span>
                            <span className="value">: {row.
Tpye
}</span>
                         </div>
                         <div className="info-item">
                             <span className="labele">Points(Max)</span>
                             <span className="value">: {row.points}</span>
                         </div>
                         <div className="info-item">
                             <span className="labele">Organizer</span>
                             <span className="value">: {row.Organier
                             }</span>
                         </div>
                         <div className="info-item">
                             <span className="labele">Duration</span>
                             <span className="value">: 3 hours</span>
                         </div>
                         </div>
                     </div>
                 </div>
        
        
             <div className='myeventdescription'>
                     <div className='myeventdesctit'>About Event :</div>
                     <div className='myeventtexdescr'>{row.descr}</div>
             
                     
             </div>
        
             <div className='myeventregis'>
             </div>
             </div>
         </div>
         
       </div>
        );
    }
    }
    export default Eventview