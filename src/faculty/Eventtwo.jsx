import React, { useState } from 'react';
import { TbTrashXFilled } from "react-icons/tb";
import { MdNotificationsNone, MdLightMode } from "react-icons/md";
import Popup from './Popup.js';
import Created from './Createdfile.jsx';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function Faculti2({ goToPreviousPage, formData, handleFormDataChange, handleSubmit, handDelete,handlefile,handleUpload }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreated, setShowCreated] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formData.duration && formData.noOfStudents && formData.startDateTime && formData.endDateTime && formData.schedulingStartDateTime && formData.schedulingEndDateTime) {
      console.log(formData);
      setShowCreated(true);

      await delay(2000);
      handleUpload()
      handleSubmit();
      handDelete();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleFileChange = (event) => {
    handleFormDataChange({ document: event.target.files[0] });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='con'>
        <div className="header101">
          <div className="Dash">Event Request</div>
          <div className="theme">
            <div className="noti" onClick={() => setShowNotifications(!showNotifications)}>
              <MdNotificationsNone />
            </div>
            <div className="light">
              <MdLightMode />
            </div>
          </div>
        </div>

        <div className='below-header'>
          <div className='inside-below'>
            <div className='inside-below-padding'>
              <div style={{ display: 'flex', width: '90%', height: '50px', alignItems: 'center' }}>
                <div className='event-details'>EVENT DETAILS</div>
              </div>
              <div style={{ color: '#0B1437', fontWeight: '600' }}>Note</div>
              <div className='box-tt'>
                <div>1. THE FACULTY MEMBERS ARE REQUESTED TO SUBMIT THE PROPOSAL WITH THEIR BITSATHY MAIL ID ONLY (NO NEED TO SUBMIT THE HARD COPY OF THE PROPOSAL)</div>
                <div>2. TYPE EVERYTHING IN CAPITAL LETTERS</div>
              </div>
              <div className='row-imo'>
                <div className='col-imo'>
                  <div className="dropdown-container">
                    <div className="dropdown-label">Start Date and Time</div>
                    <input
                      className="dropdown-select1"
                      type='datetime-local'
                      value={formData.startDateTime}
                      onChange={(e) => handleFormDataChange({ startDateTime: e.target.value })}
                      required
                    />
                  </div>
                  <div className="dropdown-container">
                    <div className="dropdown-label">End Date and Time</div>
                    <input
                      className="dropdown-select1"
                      type='datetime-local'
                      value={formData.endDateTime}
                      onChange={(e) => handleFormDataChange({ endDateTime: e.target.value })}
                      required
                    />
                  </div>
                  <div className="dropdown-container">
                    <div className="dropdown-label">Scheduling Start Date and Time</div>
                    <input
                      className="dropdown-select1"
                      type='datetime-local'
                      value={formData.schedulingStartDateTime}
                      onChange={(e) => handleFormDataChange({ schedulingStartDateTime: e.target.value })}
                      required
                    />
                  </div>
                  <div className="dropdown-container">
                    <div className="dropdown-label">Scheduling End Date and Time</div>
                    <input
                      className="dropdown-select1"
                      type='datetime-local'
                      value={formData.schedulingEndDateTime}
                      onChange={(e) => handleFormDataChange({ schedulingEndDateTime: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className='col-imo'>
                  <div className="dropdown-container">
                    <div className="dropdown-label">Duration (in hours)</div>
                    <input
                      className="dropdown-select1"
                      type='number'
                      value={formData.duration}
                      onChange={(e) => handleFormDataChange({ duration: e.target.value })}
                      placeholder='Type here...'
                      required
                    />
                  </div>
                  <div className="dropdown-container">
                    <div className="dropdown-label">Number of Students</div>
                    <input
                      className="dropdown-select1"
                      type='number'
                      value={formData.noOfStudents}
                      onChange={(e) => handleFormDataChange({ noOfStudents: e.target.value })}
                      placeholder='Type here...'
                      required
                    />
                  </div>
                  <div className="dropdown-container">
                    <div className="dropdown-label">Upload Document</div>
                    <input
                      className="dropdown-select1"
                      type='file'
                      onChange={handlefile}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className='threebuttonintwopage'>
                <div>
                  <button type="button" className='trashbutinpage' onClick={() => setShowNotifications(!showNotifications)}>
                    <TbTrashXFilled />
                  </button>
                </div>
                <div>
                  <button type="button" className='previouseventbut' onClick={goToPreviousPage}>{'<'} Previous Event</button>
                </div>
                <div>
                  <button type="submit" className='createeventbut'>Create Event</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showNotifications && <Popup handDelete={handDelete} />}
        <Created open={showCreated} onClose={() => setShowCreated(false)} />
      </div>
    </form>
  );
}

export default Faculti2;
