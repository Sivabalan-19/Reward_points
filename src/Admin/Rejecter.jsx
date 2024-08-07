import React, { useState } from 'react';
import { MdNotificationsNone, MdLightMode } from "react-icons/md";
import Notipopup from '../Student/Notipopup';

function Rejecter() {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <div className='con'>
      <div className="header1">
          <div className="Dash">Dashboard</div>
          <div className="theme">
            <div className="noti"
            onClick={() => setShowNotifications(!showNotifications)} 
            >
              <MdNotificationsNone />
            </div>
            <div className="light" >
              <MdLightMode />
            </div>
          </div>
        </div>

        <div className='allbody'>
          <div className='main-body'>
            <div className='scrollonly-em'>
            <div className='Reward'>EVENT DETAILS</div>
            <div style={{marginTop:'1%',marginBottom:'5px',fontSize:'14px',fontWeight:'600',color:'#2B3674'}}>Reason for Rejection</div>
            <div style={{height:'10%',width:'50%'}}>
            <textarea
                    style={{width:'100%',height:'100%',color:'#2B3674',borderRadius:'5px'}}
                    readOnly
                    value={`Dear Sir/Madam,
The event could not be conducted on the given date as these days come under holiday. Kindly check out the timetable and create the event once again on working days.`}
                />
            </div>
            <div style={{height:'1%',width:'100%',backgroundColor:'red',margin:'2% 0',borderRadius:'10px'}}></div>
            <div className="row-imo">
              <div className="col-imo">
                <div className="dropdown-container">
                  <label htmlFor="event-type" className="dropdown-label">
                    Type of Event <span className="required">*</span>
                  </label>
                  <select id="event-type" className="dropdown-select" required disabled>
                    <option value="" disabled hidden>Select Type</option>
                    <option value="technical-events">TECHNICAL EVENTS</option>
                    <option value="extra-curricular">EXTRA-CURRICULAR ACTIVITIES</option>
                    <option value="technical-society">TECHNICAL SOCIETY ACTIVITIES</option>
                    <option value="external-technical">EXTERNAL TECHNICAL EVENTS</option>
                  </select>
                </div>

                <div className="dropdown-container">
                  <label htmlFor="sub-category" className="dropdown-label">
                    Sub Category <span className="required">*</span>
                  </label>
                  <select id="sub-category" className="dropdown-select" required disabled>
                    <option value="" disabled hidden>Select Sub Category</option>
                    <option value="online-courses">ONLINE COURSES</option>
                    <option value="language-training">LANGUAGE TRAINING</option>
                    <option value="internal-conference">INTERNAL CONFERENCE</option>
                    <option value="sports">SPORTS</option>
                  </select>
                  <p className="notesin">If any of the club names are not available in the list, kindly contact the Rewards Team.</p>
                </div>   
                <div className="form-options">
                  <div style={{ width: '48%' }}> 
                    <div className="dropdown-label">Activity Category</div>
                    <label className="form-row" style={{ width: '100%' }}>
                      <div className='click--box'>
                        <input
                          type="checkbox"
                          name="honorPoints"
                          disabled
                        />
                      </div>
                      Honor Points
                    </label>
                  </div>
                  <div style={{ width: '48%' }}> 
                    <div className="dropdown-label">Mode of the Event</div>
                    <label className="form-row" style={{ width: '100%' }}>
                      <div className='click--box'>
                        <input
                          type="checkbox"
                          name="honorPoints"
                          disabled
                        />
                      </div>
                      Honor Points
                    </label>
                  </div>
                </div>                             
                <div className="dropdown-container">
                  <label htmlFor="department-year" className="dropdown-label">
                    Departments and Years (e.g., CSE 2nd Year) <span className="required">*</span>
                  </label>
                  <div className="dropdown-select1" style={{ cursor: 'pointer' }} disabled>
                    choose file
                  </div>
                </div>
                <div className="dropdown-container">
                  <div className="dropdown-label">Duration (in hours)</div>
                  <input
                    className="dropdown-select1"
                    type='number'
                    placeholder='Type here...'
                    required
                    disabled
                  />
                </div>
                <div className="dropdown-container">
                  <div className="dropdown-label">Number of Students</div>
                  <input
                    className="dropdown-select1"
                    type='number'
                    placeholder='Type here...'
                    required
                    disabled
                  />
                </div>
                <div className="dropdown-container">
                  <div className="dropdown-label">Upload Document</div>
                  <input
                    className="dropdown-select1"
                    type='file'
                    accept="application/pdf"
                    disabled
                  />
                </div>
              </div>
              <div className="col-imo">
                <div className="dropdown-container">
                  <label htmlFor="event-name" className="dropdown-label">
                    Name of Event <span className="required">*</span>
                  </label>
                  <input id="event-name" className="dropdown-select1" type="text" placeholder="Name" required disabled />
                </div>

                <div className="notesin">Kindly mention the Name of the clubs / Technical Societies / Department associations along with the event name.</div>

                <div className="dropdown-container">
                  <label htmlFor="event-details" className="dropdown-label">
                    Details About the Event
                  </label>
                  <textarea id="event-details" className="multiline-input" placeholder="Type here..." required disabled />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                  <div className="dropdown-container">
                    <label htmlFor="max-points" className="dropdown-label">
                      Maximum Reward Points <span className="required">*</span>
                    </label>
                    <input id="max-points" className="dropdown-select1-ry" type="number"  placeholder="Type here..." required disabled />
                  </div>

                  <div className="dropdown-container">
                    <label htmlFor="rubics-sheet" className="dropdown-label">
                      Rubics Sheet <span className="required">*</span>
                    </label>
                    <div className="rubics-main">view sheet</div>
                  </div>
                </div>
                <div className='col-imo'>
                  <div className="dropdown-container1">
                    <div className="dropdown-label">Start Date and Time</div>
                    <input
                      className="dropdown-select1"
                      type='datetime-local'
                      required
                      // disabled 
                    />
                  </div>
                  <div className="dropdown-container1">
                    <div className="dropdown-label">End Date and Time</div>
                    <input
                      className="dropdown-select1"
                      type='datetime-local'
                      required
                    />
                  </div>
                  <div className="dropdown-container1">
                    <div className="dropdown-label">Scheduling Start Date and Time</div>
                    <input
                      className="dropdown-select1"
                      type='datetime-local'
                      required
                    />
                  </div>
                  <div className="dropdown-container1">
                    <div className="dropdown-label">Scheduling End Date and Time</div>
                    <input
                      className="dropdown-select1"
                      type='datetime-local'
                      required
                    />
                  </div>
                </div>
                
            <div className="threebuttonintwopage1">
              <div>
                <button type="button" className="previouseventbut1" disabled>
                  <div style={{ fontSize: '19px', alignItems: 'center' }}>🗑️</div>
                  <div>Trash Required</div>
                </button>
              </div>
              <div>
                <button type="submit" className="createeventbut1" disabled>
                  Next Section &ensp; {'>'}
                </button>
              </div>
            </div>
              </div>
              
            </div>


            </div></div></div>
        {showNotifications && (<Notipopup ></Notipopup>)}
    </div>
  )
}

export default Rejecter