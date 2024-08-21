import React, { useState,useEffect } from 'react';
import { MdNotificationsNone, MdLightMode } from "react-icons/md";
import Notipopup from '../Student/Notipopup';
import axios from 'axios';
import { IoMoon } from "react-icons/io5";
import { format, parseISO, isValid } from 'date-fns';
import { TbTrashXFilled } from 'react-icons/tb';

const initialFormData = {
  Activity_type: '',
  selectedType: '',
  Activity_category: "",
  category: "",
  Activity_name: '',
  onlinemode: true,
  offinemode: false,
  rewardmode: true,
  honourmode: false,
  description: '',
  points: '',
  departmentAndYear: '',
  StartDate: '',
  EndDate: '',
  start_bigintscheduling: '',
  end_bigintscheduling: '',
  duration: '',
  No_of_students_expected: '',
  document: '',
  event_review:''
};

function Approved({ selectedEventId,prevPage,darkMode,toggleDarkMode }) {
  const [showNotifications, setShowNotifications] = useState(false);


  const [Data, setData] = useState(initialFormData);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(process.env.REACT_APP_API_URL + "pending", {
          id: selectedEventId
        }, {
          headers: {
            withCredentials: true,
            'Authorization': localStorage.getItem("authToken")
          }
        });

   
        setData(response.data.message[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (selectedEventId) {
      fetchData();
    }
  }, [selectedEventId]);

  useEffect(() => {
  }, [Data]);

  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return isValid(date) ? format(date, 'yyyy-MM-dd\'T\'HH:mm') : '';
  };

  return (
    <div className={`con ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header1">
          <div className="Dash">Dashboard</div>
          <div className="theme">
            <div className="noti"
            onClick={() => setShowNotifications(!showNotifications)} 
            >
              <MdNotificationsNone />
            </div>
            <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <IoMoon /> : <MdLightMode />}
          </div>
          </div>
        </div>

        <div className='allbody' >
          <div className='main-body--1'>
          <div className="Reward" style={{marginBottom:'10px'}}>Event Details</div>
            <div className="row-imo--1">
            <div className="col-imo-1">
                  <div className="dropdown-label-rep">
                    Type of Event 
                  </div>
                  <div className='dropdown-select-1'>
                  <input
                    className="text-input--rep-1"
                    style={{backgroundColor:'transparent'}}
                    type="text"
                    value={Data.Activity_type}
                  />
                </div>
                  <div className="dropdown-label-rep ">
                    Sub Category
                  </div>
                  <div className='dropdown-select-1'>
                  <input
                    className="text-input--rep-1"
                    style={{backgroundColor:'transparent'}}
                    type="text"
                    // placeholder="Auto fill"
                    value={Data.selectedType}
                  />
                </div>

              <div className="form-options" style={{marginTop:'10px'}}>
                  <div style={{ width: '48%' }}> 
                    <div className="dropdown-label-rep">Activity Category</div>
                    <label className="form-row" style={{ width: '100%' }}>
                      <div className='click--box'>
                        <input
                          type="checkbox"
                          name="honorPoints"checked={true}
                          
                        />
                      </div>
                      Honor Points
                    </label>
                  </div>
                  <div style={{ width: '48%' }}> 
                    <div className="dropdown-label-rep">Mode of the Event</div>
                    <label className="form-row" style={{ width: '100%' }}>
                      <div className='click--box'>
                        <input
                          type="checkbox"
                          name="honorPoints"checked={true}                          
                        />
                      </div>
                      Online
                    </label>
                  </div>
                </div>

                  <label htmlFor="department-year" className="dropdown-label-rep" style={{marginTop:'5px'}}>
                    Departments and Years 
                  </label>
                  <div className='dropdown-select-1'>
                  <input
                    className="text-input--rep-1"
                    style={{backgroundColor:'transparent'}}
                    type="text"
                    // placeholder="Auto fill"
                    value= "auto"
                  />
                </div>

                  <label htmlFor="department-year" className="dropdown-label-rep" style={{marginTop:'5px'}}>
                    Duration
                  </label>
                  <div className='dropdown-select-1'>
                  <input
                    className="text-input--rep-1"
                    style={{backgroundColor:'transparent'}}
                    type="text"
                    // placeholder="Auto fill"
                    value={Data.duration}
                  />
                </div>

                  <label htmlFor="department-year" className="dropdown-label-rep" style={{marginTop:'5px'}}>
                    Total Student Expected
                  </label>
                  <div className='dropdown-select-1'>
                  <input
                    className="text-input--rep-1"
                    style={{backgroundColor:'transparent'}} 
                    type="text"
                    value={Data.No_of_students_expected}
                  />
                </div>
                  <label htmlFor="department-year" className="dropdown-label-rep">
                    Document Attached
                  </label>
                  <div className='dropdown-select-1'>
                  <div className="text-input--rep-111" style={{display:'flex',justifyContent:'center',textDecoration:'underline'}}> view Sheet</div>
                </div>

            </div>
            <div className="col-imo-1">
                  <label  className="dropdown-label-rep">
                    Name of the Event
                  </label>
                  <div className='dropdown-select-1'>
                  <input
                    className="text-input--rep-1"
                    style={{backgroundColor:'transparent'}}
                    type="text"
                    value={Data.Activity_name}
                  />
                </div>
                <div className="dropdown-container-rep">
                    <label htmlFor="event-details" className="dropdown-label-rep">
                      Details About the Event
                    </label>
                    <textarea
                      className="multiline-input-1"
                      style={{backgroundColor:'transparent'}}
                      value={Data.description}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{width:'49%'}}>
                  <label  className="dropdown-label-rep ">
                  Maximum Reward Points pre Student
                  </label>
                  <div className='dropdown-select-1'>
                  <input
                    className="text-input--rep"
                    style={{backgroundColor:'transparent'}}
                    type="text"
                    value={Data.points}
                  />
                </div>
                </div> 
                  <div style={{width:'49%'}}>
                    <label className="dropdown-label-rep">
                      Rubics Sheet 
                    </label>
                    <div className="rubics-main-1">view sheet</div>
                  </div>
                </div>
                    <div className="dropdown-label-rep" >Start Date and Time</div>
                    <input
                className="text-input-11"
                type='datetime-local'
                style={{ backgroundColor: 'transparent' }}
                value={formatDate(Data.StartDate)}
                disabled
              />
                    <div className="dropdown-label-rep" >End Date and Time</div>
                    <input
                className="text-input-11"
                type='datetime-local'
                style={{ backgroundColor: 'transparent' }}
                value={formatDate(Data.EndDate)}
                disabled
              />
                    <div className="dropdown-label-rep" >Scheduling Start Date and Time</div>
                    <input
                className="text-input-11"
                type='datetime-local'
                style={{ backgroundColor: 'transparent' }}
                value={formatDate(Data.start_bigintscheduling)}
                disabled
              />
                    <div className="dropdown-label-rep" >Scheduling End Date and Time</div>
                    <input
                className="text-input-11"
                type='datetime-local'
                style={{ backgroundColor: 'transparent' }}
                value={formatDate(Data.end_bigintscheduling)}
                disabled
              />        
            </div>
            </div>
            
            </div>
            </div>
        {showNotifications && (<Notipopup ></Notipopup>)}
    </div>
  )
}

export default Approved