import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Dialog from '@mui/material/Dialog';

import { IoMoon } from "react-icons/io5";
import { MdLightMode, MdNotificationsNone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegBell, FaSearch } from "react-icons/fa";
import Notification from "../Student/notification";
import { format } from 'date-fns';
import Notipopup from "../Student/Notipopup";
import AdminTable from "../component/admintable";
const AdmintableCaller = ({ darkMode, toggleDarkMode,nextPage }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showEventRegister, setShowEventRegister] = useState(false);
  const [data, setData] = useState([]);
  const [eventData, setEventData] = useState(null);
  
  const showRegisterForm = (id,data) => {
   
    setShowEventRegister(true);
    
    let row = data.find(o => o.id == id);
    setEventData(id);
  
  };

  const columns = useMemo(
    () => [
      { Header: "SNO", accessor: "sno" },
      { Header: "Eventtype", accessor: "Activity_type",
        
         },
      { Header: "Event Category", accessor: "Activity_category" },
      { Header: "Event_code", accessor: "Activity_code" },
      { Header: "start date", accessor: "StartDate",
        Cell: ({ cell: { value } }) => (
            <span>{format(new Date(value), 'yyyy-MM-dd')}</span>
          )
      },
      { Header: "end date", accessor: "EndDate",
        Cell: ({ cell: { value } }) => (
            <span>{format(new Date(value), 'yyyy-MM-dd')}</span>
          )
       },
      { Header: "action", accessor: "status" ,Cell: ({ cell: { value } }) => {
          
        return (
        
            <span >{value ==0 ?<div style={{color:'red'}}> pending</div>:value==7?<div>rejected</div>:<div>approved</div>}</span>
           
        );
      } },
      {
        Header: "view",
        accessor: "id",
        Cell: ({ cell: { value } }) => (
          <div>
            <button className="view-em" onClick={() =>nextPage(value)}>
              view
            </button>
          </div>
        )
      }
    ],
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(process.env.REACT_APP_API_URL+"approve",{
          headers:{
                   withCredentials:true,
                   'Authorization': localStorage.getItem("authToken")

                  }
 });
        const reversedData = response.data.message.reverse().map((row, index) => ({ ...row, sno: index + 1 }));
        setData(reversedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);




  return (
    <div className={`con ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header11">
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', height: '100%' }}>
          <div className="Dash-em">Event Registration</div>
          <div className="Dash-em1"><IoIosArrowForward /></div>
          <div className="em-subtiti">Event Master</div>
        </div>
        <div className="theme">
          <div className="noti" onClick={() => setShowNotifications(!showNotifications)}>
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <IoMoon /> : <MdLightMode />}
          </div>
        </div>
      </div>
      <div className="allbody">
 
        <AdminTable columns={columns} data={data} Table_header_name="admin"></AdminTable>
      </div>
    </div>
  );
};
export default AdmintableCaller;
