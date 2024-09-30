import React, { useState } from 'react';
import axios from 'axios';

function Addmempop(props) {
  const [roll, setRollNo] = useState("");

  const addMember = async () => {
    try {
     
      axios.defaults.withCredentials = true;
      await axios.post(process.env.REACT_APP_API_URL + "student/event-team-details-add", {
        eventid: props.event_id,
        team_id: props.team_id,
        roll: roll
      }, {
        headers: {
          withCredentials: true,
          'Authorization': localStorage.getItem("authToken")
        }
      });
    } catch (error) {
      console.error("Error adding member:", error);
    }
  };

  return (
    <div className="Stu-ent">
      <div className='Reward'>Add Members</div>
      <div className="dropdown-container">
        <div className="dropdown-label">
          Reg No<span className="required">*</span>
        </div>
        <input
          className="dropdown-select1"
          type="text"
          placeholder="Type here..."
          required
          onChange={(e) => setRollNo(e.target.value)}
          value={roll}
        />
      </div>
      
      <div className="button-group-bot">
        <button className="save-button-bot" onClick={addMember}>Add</button>
      </div>
    </div>
  );
}

export default Addmempop;
