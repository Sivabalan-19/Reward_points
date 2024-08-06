import React, { useState } from 'react';
import { MdNotificationsNone, MdLightMode, MdDarkMode } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import Popup from './Popup.js';
import Rubicspopup from './Rubicspopup.jsx';
import Notipopup from '../Student/Notipopup.jsx';
import Deptpopup from './Deptpopup.jsx';
function Faculti1({ goToNextPage, formData, handleFormDataChange, handDelete ,rows,setRows}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showNotifications3, setShowNotifications3] = useState(false);
  const [showNotifications1, setShowNotifications1] = useState(false);
  const [showNotifications2, setShowNotifications2] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSelectChange = (event) => {
    handleFormDataChange({ EventType: event.target.value });
  };

  const handleSubCategoryChange = (event) => {
    handleFormDataChange({ selectedType: event.target.value });
  };

  const handleModeChange = (mode) => {
    if (mode === 'online') {
      handleFormDataChange({ onlinemode: true, offinemode: false });
    } else if (mode === 'offline') {
      handleFormDataChange({ onlinemode: false, offinemode: true });
    }
  };

  const handleCategoryChange = (category) => {
    if (category === 'reward') {
      handleFormDataChange({ rewardmode: true, honourmode: false });
    } else if (category === 'honour') {
      handleFormDataChange({ rewardmode: false, honourmode: true });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.EventType && formData.selectedType && formData.eventName && formData.eventDetails && formData.maxPoints ) {
      goToNextPage();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <form 
    onSubmit={handleSubmit}
     className={ `con ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="header1">
          <div className="Dash">Event Request </div>
          <div className="theme">
            <div className="noti"
            onClick={() => setShowNotifications(!showNotifications)} 
            >
              <MdNotificationsNone />
            </div>
            <div className="light" onClick={toggleDarkMode}>
              {isDarkMode ?   <MdDarkMode /> :<MdLightMode />}
            </div>
          </div>
        </div>
        
        <div className='below-header'>
          <div className='inside-below'>
            <div className='inside-below-padding'>
              <div style={{ display: 'flex', width: '100%', height: '50px', alignItems: 'center' }}>
                <div className='event-details'>EVENT DETAILS</div>
                <div style={{width:'100%'}}>
                <div style={{display:'flex',width:'100%',gap:'1%'}}>
                  <div style={{width:'40%',borderRadius:'50%'}}><progress  value="100" max="100"  class="progressibar">  </progress></div>
                  <div style={{width:'40%',borderRadius:'50%'}}><progress  value="0"  max="100" class="progressibar"> </progress></div>
                </div>
                <div style={{fontSize:'12px',color:'#0B1437',}}> step 1 of 2</div>
                </div>

              </div>
              <div className='note'>Note</div>
              <div className='box-tt'>
                <div>1. THE FACULTY MEMBERS ARE REQUESTED TO SUBMIT THE PROPOSAL WITH THEIR BITSATHY MAIL ID ONLY (NO NEED TO SUBMIT THE HARD COPY OF THE PROPOSAL)</div>
                <div>2. TYPE EVERYTHING IN CAPITAL LETTERS</div>
              </div>
              <div className='row-imo'>
                <div className='col-imo'>
                  <div className="dropdown-container">
                    <label htmlFor="event-type" className="dropdown-label">
                      Type of Event <span className="required">*</span>
                    </label>
                    <select
                      id="event-type"
                      className="dropdown-select"
                      value={formData.EventType}
                      onChange={handleSelectChange}
                      required
                    >
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
                    <select
                      id="sub-category"
                      className="dropdown-select"
                      value={formData.selectedType}
                      onChange={handleSubCategoryChange}
                      required
                    >
                      <option value="" disabled hidden>Select Sub Category</option>
                      <option value="online-courses">ONLINE COURSES</option>
                      <option value="language-training">LANGUAGE TRAINING</option>
                      <option value="internal-conference">INTERNAL CONFERENCE</option>
                      <option value="sports">SPORTS</option>
                    </select>
                    <p className='notesin'>If any of the club names are not available in the list, kindly contact the Rewards Team.</p>
                  </div>

                  <div className="form-group">
                    <label className="form-label" >Mode of the Event <span className="required">*</span></label>
                    <div className="form-options">
                      <label className="form-row">
                        <div className='click--box'>
                          <input
                            type="checkbox"
                            name="online"
                            checked={formData.onlinemode}
                            value="online"
                            onChange={() => handleModeChange('online')}
                          />
                        </div>
                        Online
                      </label>
                      <label className="form-row">
                        <div className='click--box'>
                          <input
                            type="checkbox"
                            name="offline"
                            value="offline"
                            checked={formData.offinemode}
                            onChange={() => handleModeChange('offline')}
                          />
                        </div>
                        Offline
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Activity Category <span className="required">*</span></label>
                    <div className="form-options">
                      <label className="form-row" >
                        <div className='click--box'>
                          <input
                            type="checkbox"
                            name="rewardPoints"
                            checked={formData.rewardmode}
                            onChange={() => handleCategoryChange('reward')}
                          />
                        </div>
                        Reward Points
                      </label>
                      <label className="form-row">
                        <div className='click--box'>
                          <input
                            type="checkbox"
                            name="honorPoints"
                            checked={formData.honourmode}
                            onChange={() => handleCategoryChange('honour')}
                          />
                        </div>
                        Honor Points
                      </label>
                    </div>
                  </div>
                </div>
                <div className='col-imo'>
                  <div className="dropdown-container">
                    <label htmlFor="event-name" className="dropdown-label">
                      Name of Event <span className="required">*</span>
                    </label>
                    <input
                      id="event-name"
                      className="dropdown-select1"
                      type='text'
                      placeholder='Name'
                      value={formData.eventName}
                      onChange={(e) => handleFormDataChange({ eventName: e.target.value })}
                      required
                    />
                  </div>

                  <div className='notesin'>Kindly mention the Name of the clubs / Technical Societies / Department associations along with the event name.</div>

                  <div className="dropdown-container">
                    <label htmlFor="event-details" className="dropdown-label">
                      Details About the Event
                    </label>
                    <textarea
                      id="event-details"
                      className="multiline-input"
                      value={formData.eventDetails}
                      onChange={(e) => handleFormDataChange({ eventDetails: e.target.value })}
                      placeholder="Type here..."
                      required
                    />
                  </div>

                  <div  style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                  <div className="dropdown-container">
                    <label htmlFor="max-points" className="dropdown-label">
                      Maximum Reward Points <span className="required">*</span>
                    </label>
                    <input
                      id="max-points"
                      className="dropdown-select1-ry"
                      type='number'
                      value={formData.maxPoints}
                      onChange={(e) => handleFormDataChange({ maxPoints: e.target.value })}
                      placeholder='Type here...'
                      required
                    />
                  </div>

                  <div className="dropdown-container">
                    <label htmlFor="max-points" className="dropdown-label"  >
                      Rubics Sheet <span className="required">*</span>
                    </label>
                    <div className="rubics-main"  onClick={() => {
                    setShowNotifications2(!showNotifications2)}} >view sheet</div>
                  </div>
                  </div>

                  <div className="dropdown-container">
                    <label htmlFor="department-year" className="dropdown-label">
                      Departments and Years (e.g., CSE 2nd Year) <span className="required">*</span>

                    </label>
                    <div
                      className="dropdown-select1"
                      style={{cursor:'pointer'}}
                      onClick={() => {
                        setShowNotifications3(!showNotifications3)}}
                    >
                      choose file
                      </div>
                  </div>
                </div>
              </div>
              <div className='threebuttonintwopage1'>
                <div>
                  <button type="button" className='previouseventbut1' onClick={() => {
                    setShowNotifications1(!showNotifications1)}}>
                    <div style={{ fontSize: '19px', alignItems: 'center' }} >
                      <TbTrashXFilled />
                    </div>
                    <div >Trash Required</div>
                  </button>
                </div>
                <div>
                  <button type="submit" className='createeventbut1'>
                    Next Section &ensp; {'>'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showNotifications && (<Notipopup ></Notipopup>)}
        {showNotifications3 && (<Deptpopup ></Deptpopup>)}
        {showNotifications1 && (<Popup handDelete={handDelete}></Popup>)}
        {showNotifications2 && (<Rubicspopup row={rows} setRows={setRows}></Rubicspopup>)}
        
    </form>
  );
}

export default Faculti1;
