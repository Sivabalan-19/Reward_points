import React, { useState, useEffect } from 'react';
import { MdNotificationsNone, MdLightMode } from "react-icons/md";
import axios from "axios";

function Reportstatus({ detail, id }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(process.env.REACT_APP_API_URL+'r', {
          id: id
        },{
          headers:{
                   withCredentials:true,

                  }
 });
        setFormData(response.data.message[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    handleSubmit();
  }, [id]);
  console.log(formData)

  return (
    <div className='con'>
      <div className="header1">
        <div className="Dash">Event Report</div>    
        <div className="theme">
          <div className="noti">
            <MdNotificationsNone />
          </div>
          <div className="light">
            <MdLightMode />
          </div>
        </div>
      </div>

      <div className='below-header'>
        <div className="inside-below">
          <div className="EventReportstitle">Event Reports</div>
          <div className="event-status-pen">
            <div>Event Status :</div>
            <div className="status-text">Event Approval Pending...</div>
          </div>
          <form className="form-report">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="form-group-rp">
                <label className='label-rep'>REFERENCE NO</label>
                <div className='group-ij'>
                  <input
                    className="text-input"
                    type="text"
                    value={formData.Activity_code || ''}
                    placeholder="Eg 2122_OD_GE_206"
                  />
                </div>
              </div>
              <div className="form-group-rp">
                <label className='label-rep'>Serial Activity Code</label>
                <div className='group-ij'>
                  <input
                    value={formData.Activity_name || ''}
                    className="text-input"
                    type="text"
                    placeholder="Eg 2223_OD_1307"
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="form-group-rp">
                <label className='label-rep'>Start Date & Time</label>
                <div className='group-ij'>
                  <input
                    className="text-input"
                    value={formData.StartDate || ''}
                    type="datetime-local"
                  />
                </div>
              </div>
              <div className="form-group-rp">
                <label className='label-rep'>End Date & Time</label>
                <div className='group-ij'>
                  <input
                    className="text-input"
                    type="datetime-local"
                    value={formData.EndDate || ''}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="form-group-4">
                <label className='label-rep'>No of Students Registered</label>
                <div className='group-ij-4'>
                  <input
                    className="text-input"
                    value={formData.No_of_students_expected || ''}
                    type="text"
                    placeholder="Auto fill"
                  />
                </div>
              </div>
              <div className="form-group-4">
                <label className='label-rep'>No of Students Attended</label>
                <div className='group-ij-4'>
                  <input
                    className="text-input"
                    type="text"
                    placeholder="Auto fill"
                    value={formData.No_of_students_expected || ''}
                  />
                </div>
              </div>
              <div className="form-group-4">
                <label className='label-rep'>No of Students Got Points</label>
                <div className='group-ij-4'>
                  <input
                    className="text-input"
                    type="text"
                    placeholder="Auto fill"
                    value={formData.No_of_students_expected || ''}
                  />
                </div>
              </div>
              <div className="form-group-4">
                <label className='label-rep'>Total Points</label>
                <div className='group-ij-4'>
                  <input
                    className="text-input"
                    type="text"
                    placeholder="Auto fill from register form"
                    value={formData.points || ''}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="form-group-4">
                <label className='label-rep'>Maximum Point</label>
                <div className='group-ij-4'>
                  <input
                    className="text-input"
                    type="text"
                    value={formData.maximumPoint || ''}
                    placeholder="Auto fill"
                  />
                </div>
              </div>
              <div className="form-group-4">
                <label className='label-rep'>Minimum Point</label>
                <div className='group-ij-4'>
                  <input
                    className="text-input"
                    type="text"
                    placeholder="Auto fill"
                    value={"80" || ''}
                  />
                </div>
              </div>
              <div className="form-group-4">
                <label className='label-rep'>Average Point</label>
                <div className='group-ij-4'>
                  <input
                    className="text-input"
                    type="text"
                    value={"90" || ''}
                    placeholder="Auto fill"
                  />
                </div>
              </div>
              <div className="form-group-4">
                <label className='label-rep'>Median Point</label>
                <div className='group-ij-4'>
                  <input
                    className="text-input"
                    type="text"
                    value={"70" || ''}
                    placeholder="Auto fill from register form"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reportstatus;
