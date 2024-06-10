import React, { useState, useEffect, useMemo } from "react";
import Eventinfo from "./firsttwopage/Eventregister";
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import Table from "./tableButton"
import { IoMoon } from "react-icons/io5";
import { MdLightMode, MdNotificationsNone } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegBell, FaSearch } from "react-icons/fa";

const PointContainer2 = ({ darkMode, toggleDarkMode }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showEventRegister, setShowEventRegister] = useState(false);
  const [data, setData] = useState([]);
  const [eventData, setEventData] = useState(null);
  
  const showRegisterForm = (id,data) => {
    console.log(data)
    setShowEventRegister(true);
    
    let row = data.find(o => o.id == id);
    setEventData(id);
  
  };

  const formClose = () => {
    setShowEventRegister(false);
    setEventData(null);
  };

  const columns = useMemo(
    () => [
      { Header: "SNO", accessor: "sno" },
      { Header: "Date", accessor: "Date" },
      { Header: "Activity_name", accessor: "Activity_name" },
      { Header: "Activity_code", accessor: "Activity_code" },
      { Header: "Activity Category", accessor: "Activity_type" },
      { Header: "Points", accessor: "points" },
      { Header: "Organiser", accessor: "Organier" },
      { Header: "available", 
        accessor: "seat" ,
        Cell: ({ cell: { value } }) => {
          
          return (
            <div style={{display:'flex'}}>
              <span >{value < 10 ?<div style={{color:'red'}}>{value} Seats</div>:<div>{value} Seats</div>}</span>
              <span></span>
            </div>
          );
        }




      },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({ cell: { value } }) => (
          <div>
            <button className="view-em" onClick={() => showRegisterForm(value,data)}>
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
        const response = await axios.get("http://localhost:2500/pointtable");
        setData(response.data.message.map((row, index) => ({ ...row, sno: index + 1 })));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);



  const handleDeleteRow = async (id) => {
    const response = await axios.post('http://localhost:2500/changeregister', { id });
    setData((prevData) => prevData.filter((row) => row.id !== id));
    setShowEventRegister(false);
    setEventData(null);
  };

  return (
    <div className={`con ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header11">
        <div style={{ display: 'flex', width: '90%', alignItems: 'center', height: '100%' }}>
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
        <Table columns={columns} data={data} Table_header_name="Event Master" handleDeleteRow={handleDeleteRow} />
      </div>

      {showNotifications && (
        <div className="l">
          <div className="logs-popup">
            <div>
              <div className="noti1">
                <div className="logs">Logs</div>
                <div className="bellicon">
                  <FaRegBell />
                </div>
              </div>
              <div style={{ justifyContent: 'center', display: 'flex' }}>
                <div className="search-bar">
                  <div style={{ marginTop: '2px', color: '#2B3674', fontSize: '12px', alignSelf: 'center' }}>
                    <FaSearch />
                  </div>
                  <input type="text" placeholder="Search" className="bar" />
                </div>
              </div>
              <div className='notilist'>
                <div className='notiitems'></div>
                <div className='notiitems'></div>
                <div className='notiitems'></div>
                <div className='notiitems'></div>
                <div className='notiitems'></div>
                <div className='notiitems'></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog  open={showEventRegister} onClose={formClose}>
        <Eventinfo detail={data} id={eventData} onDeleteRow={(id) => handleDeleteRow(id)}/>
      </Dialog>
    </div>
  );
};

export default PointContainer2;
