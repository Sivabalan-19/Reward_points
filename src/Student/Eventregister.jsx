import React, { useState } from 'react';
import './Eventmasters.css';


    function Eventinfo(props) {

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
       <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
         
             <div className='eventinfobox'>
             
             <div className='myeventtitle'>
                <div className='myeventtit'>Event Details :</div>
                <div><button className='cross'><button onClick={props.onc} className='close-button'><i className="fa-solid fa-xmark"></i></button></button></div>
            </div>
                 <div className="activity-info">
                     <div className="info-row" > 
                         <div className="info-column">
                         <div className="info-item">
                             <div className="labele">Activity Name</div>
                             <div className="valuee"> :</div>
                             <div className="value"> {row.Activity_name}</div>
                         </div>
                         <div className="info-item">
                             <div className="labele">Activity Category</div><div className="valuee"> :</div>
                             <div className="value"> {row.Activity_type}</div>
                         </div>
                         <div className="info-item">
                             <div className="labele">Available</div><div className="valuee"> :</div>
                             <div className="value"> {row.seat}</div>
                         </div>
                         <div className="info-item1">
                             <div className="labe">Date &ensp; : &ensp; </div>
                             <div className="value1"> {row.Date}</div>
                         </div>
                         </div>
                         <div className="info-column">
                         <div className="info-item">
                             <div className="labele">Activity Type</div><div className="valuee"> :</div>
                            <div className="value"> {row.Tpye}</div>
                         </div>
                         <div className="info-item">
                             <div className="labele">Points(Max)</div><div className="valuee"> :</div>
                             <div className="value"> {row.points}</div>
                         </div>
                         <div className="info-item">
                             <div className="labele">Organizer</div><div className="valuee"> :</div>
                             <div className="value"> {row.Organier
                             }</div>
                         </div>
                         <div className="info-item">
                             <div className="labele">Duration</div><div className="valuee "> :</div>
                             <div className="value"> 3 hours</div>
                         </div>
                         </div>
                 </div>
             <div className='myeventdescription'>
                     <div className='myeventdesctit'>About Event :</div>
                     <div className='myeventtexdescr'>{row.descr}</div>
             </div>
             <div className='myeventregis'>
                     <div><button className='myeventregiesbut' onClick={() => props.onDeleteRow(props.id)}>Register Event</button></div>
             </div>
             </div>
         </div>
       </div>
        );
    }
    }
    export default Eventinfo