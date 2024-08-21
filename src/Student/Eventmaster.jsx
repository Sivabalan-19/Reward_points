
  import React, { useState,setState } from "react";
  import { useMemo, useEffect } from "react";
  import axios from "axios";
  import Dialog from '@mui/material/Dialog';
  import Table from "../component/tableButton"
  import { IoMoon } from "react-icons/io5";
  import { MdLightMode, MdOutlineAccountTree } from "react-icons/md";
  import { IoIosArrowForward } from "react-icons/io";
  import {
    MdOutlineAddAlert,
    MdBarChart,
    MdSummarize,
    MdNotificationsNone,
    MdOutlineLightMode,
    MdDarkMode,
  } from "react-icons/md";
  import Eventview from "./Eventview";
  import { format } from 'date-fns';
  import Notipopup from "./Notipopup";
    const  PointContainer2 = ({ darkMode, toggleDarkMode }) => {
      const [showEventRegister, setShowEventRegister] = useState(false);
      const [data, setData] = useState([]);
      const [eventData, setEventData] = useState(null);
      
      const showRegisterForm = (id,data) => {

        setShowEventRegister(true);
        
        let row = data.find(o => o.id == id);
        setEventData(id);
      
      };
    
      const formClose = () => {
        setShowEventRegister(false);
        setEventData(null);
      };
    
      const [showNotifications, setShowNotifications] = useState(false);


      const columns = useMemo(
          () => [
            {
              Header: "SNO",
              accessor: "sno"
            },
            {
              // first group - TV Show
              Header: "Date",
              accessor: "Date",
              
        Cell: ({ cell: { value } }) => (
          <span>{format(new Date(value), 'dd-MM-yy')}</span>
        )
          
              // First group columns
            },
            {
              // Second group - Details
              Header: "Activity_name",
              accessor: "Activity_name",
      
            },
            {
              // Second group - Details
              Header: "Activity_code",
              accessor: "Activity_code",
      
            },
          
            {
              // Second group - Details
              Header: "Activity Category",
              accessor: "Activity_type",
      
            },
            {
              // Second group - Details
              Header: "Points",
              accessor: "points",
      
            },
            {
              // first group - TV Show
              Header: "Organiser",
              accessor: "Organier",
          
              // First group columns
            },
            {
              // first group - TV Show
              Header: "Status",
              accessor: "status", 
              Cell: ({ cell: { value } }) => (
                <div style={{display:'flex'}}>
                <span >{value ==8 ?<div className="COMPLEATED-REP">COMPLETED</div>:<div className="UPCOMING">ON GOING </div>}</span>
                <span></span>
              </div>
              )

          
              // First group columns
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
        const [showregister, setshowregister] = useState([]);
        useEffect(() => {
          const fetchData = async () => {
            try {
              axios.defaults.withCredentials = true;
              const response = await axios.get(process.env.REACT_APP_API_URL+"register",{
                headers:{
                         withCredentials:true,
                         'Authorization': localStorage.getItem("authToken")
                        }
       });
              // Assuming your data has an 'id' field, otherwise, adjust accordingly
              const reversedData = response.data.message.reverse().map((row, index) => ({ ...row, sno: index + 1 }));
              setData(reversedData);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
        }, []);
       
        const handleDeleteRow = async(id) => {
          setshowregister(!showregister)
          axios.defaults.withCredentials = true;
          const response=await axios.post(process.env.REACT_APP_API_URL+"changeregister", {
            id: id,
      
          },{
            headers:{
                     withCredentials:true,
                     'Authorization': localStorage.getItem("authToken")
                    }
   })

        };
    return (
      
      <div className={`con ${darkMode ? 'dark-mode' : ''}`}>
        <div className="header11">
          <div style={{display:'flex',width:'100%', alignItems:'center',height:'100%'}}> 
            <div className="Dash-em">Event Registration  </div> <div className="Dash-em1" ><IoIosArrowForward /></div> <div className="em-subtiti"  >My Events</div>
          </div>
          <div className="theme">
            <div className="noti" onClick={() => setShowNotifications(!showNotifications)} >
              <MdNotificationsNone />
            </div>
            <div className="light" onClick={toggleDarkMode}>
              {darkMode ? <IoMoon /> : <MdLightMode />}
            </div>
          </div>
        </div>
      <div className="allbody" >
        <Table columns={columns} data={data} Table_header_name="My Events" handleDeleteRow={handleDeleteRow} />
      </div>
      

      {showNotifications && (<Notipopup ></Notipopup>)}
          <Dialog  open={showEventRegister} onClose={formClose}>
          <Eventview detail={data} id={eventData} onDeleteRow={(id) => handleDeleteRow(id)} onc={formClose}/>
        </Dialog>
      </div>
    )
  }

  export default PointContainer2