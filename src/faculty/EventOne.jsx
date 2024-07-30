import React, { useState } from 'react';
import { MdNotificationsNone, MdLightMode, MdDarkMode } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import Popup from './Popup.js';

function Faculti1({ goToNextPage, formData, handleFormDataChange, handDelete }) {
  const [showNotifications, setShowNotifications] = useState(false);
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
    if (formData.EventType && formData.selectedType && formData.eventName && formData.eventDetails && formData.maxPoints && formData.departmentAndYear) {
      goToNextPage();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <form onSubmit={handleSubmit} className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className='con'>
        <div className="header101">
          <div className="Dash">Event Request </div>
          <div className="theme">
            <div className="noti">
              <MdNotificationsNone />
            </div>
            <div className="light" onClick={toggleDarkMode}>
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </div>
          </div>
        </div>
        
        <div className='below-header'>
          <div className='inside-below'>
            <div className='inside-below-padding'>
              <div style={{ display: 'flex', width: '90%', height: '50px', alignItems: 'center' }}>
                <div className='event-details'>EVENT DETAILS</div>
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
                    <label className="form-label" >Mode of the Event *</label>
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
                    <label className="form-label">Activity Category *</label>
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

                  <div className="dropdown-container">
                    <label htmlFor="max-points" className="dropdown-label">
                      Maximum Reward Points
                    </label>
                    <input
                      id="max-points"
                      className="dropdown-select1"
                      type='number'
                      value={formData.maxPoints}
                      onChange={(e) => handleFormDataChange({ maxPoints: e.target.value })}
                      placeholder='Type here...'
                      required
                    />
                  </div>

                  <div className="dropdown-container">
                    <label htmlFor="department-year" className="dropdown-label">
                      Departments and Years (e.g., CSE 2nd Year)
                    </label>
                    <input
                      id="department-year"
                      className="dropdown-select1"
                      type='text'
                      value={formData.departmentAndYear}
                      onChange={(e) => handleFormDataChange({ departmentAndYear: e.target.value })}
                      placeholder='Type here...'
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='threebuttonintwopage1'>
                <div>
                  <button type="button" className='previouseventbut1' onClick={() => {
              setShowNotifications(!showNotifications)}}>
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
        {showNotifications && (  <Popup handDelete={handDelete}></Popup>
       
      )}
      </div>
    </form>
  );
}

export default Faculti1;
