import React, { useState,setState } from "react";
import logo1 from '../assets/image1.png'
import logo2 from '../assets/image2.png'
import logo3 from '../assets/image3.png'
import logo4 from '../assets/image4.png'
import { useMemo, useEffect } from "react";
import axios from "axios";
import Table from "../component/tableButton"
import { IoMoon } from "react-icons/io5";
import { MdLightMode, MdOutlineAccountTree } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { format } from 'date-fns';
import {
  MdOutlineAddAlert,
  MdBarChart,
  MdSummarize,
  MdNotificationsNone,
  MdOutlineLightMode,
  MdDarkMode,
} from "react-icons/md";
import { Divider } from "@mui/material";
import { FaRegBell , FaSearch } from "react-icons/fa";
import Notipopup from '../Student/Notipopup';
import Noevent from "./Noevent";
function Myevents({nextPage}) {
  const [filterText, setFilterText] = useState('');
  const [filtersort, setFiltersort] = useState('');
  const [Data, setData] = useState([]);
  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };
  const selectchange =(event)=>{
    setFiltersort(event.target.value=="Reward"?0:6)
    console.log("hi")
  }

  const filterData = Data.filter(student => {
    return (student.Activity_type.toLowerCase().includes(filterText.toLowerCase()) ||
      student.Activity_name.toLowerCase().includes(filterText.toLowerCase())) && student.status==filtersort
  });
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
 const gotoNextPage=(id)=>{
  console.log("gg")
  nextPage(id)
 }
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(process.env.REACT_APP_API_URL+"r",{
          headers:{
                   withCredentials:true,
                   'Authorization': localStorage.getItem("authToken")
                  }
 });
        console.log(response.data.message)
       
        const reversedData = response.data.message.reverse().map((row, index) => ({ ...row, sno: index + 1 }));
    setData(reversedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const Card = ({ title, status,Activity_type,id,nextPage }) => (
    <div className="card">
      <div className="image" style={{ backgroundColor: 'pink' }}>
        {
      Activity_type=="external-technical"? <img src={logo1} style={{height:'100%',width:'100%', position:'relative'}} />:
      Activity_type=="technical-society"? <img src={logo2} style={{height:'100%',width:'100%', position:'relative'}} />:
      Activity_type=="extra-curricular"? <img src={logo3} style={{height:'100%',width:'100%', position:'relative'}} />:<img src={logo4} style={{height:'100%',width:'100%', position:'relative'}} />
        }
       
      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="view"><button onClick={() => nextPage(id)
     }>view</button></div>
      </div>
      <div className="stepper" style={{ backgroundColor: 'green' }}>
        {/* stepper */}
      </div>
      <div className="status">{status?"approved":"pending"}</div>
    </div>
  );


  const cardsData = [
    { title: 'AI TECHNOLOGY - FUTURE OF THE INDUSTRIAL REVOLUTION', status: 'Event Approval Pending' },
  ];

  
  return (
    <div className='con'> 
    <div className="header1">
        <div className="Dash-pt" style={{display:'flex',justifyContent:'space-between',width:'60%'}}> 
        <div>My Events</div>
        <div className="search-bar-fal">
        <div style={{color: '#2B3674',fontSize:'12px',alignSelf:'center'}}><FaSearch /></div>
        <input
          type="text"
          placeholder="Search"
          className="bar"
          value={filterText}
          onChange={handleFilterTextChange}
        />
        </div>
        
        <div className="search-bar-em1-rep">
            <select className="ba-em" onChange={selectchange}>
              <option style={{ color: '#2B3674', fontWeight: '600' }} value=""  selected disabled hidden>Sort By Type</option>
              <option value="Reward">Active Event</option>
              <option value="Honour">In Active Event</option>
            </select>
        </div>
        </div>
        <div className="theme">
          <div className="noti" onClick={() => setShowNotifications(!showNotifications)} >
            <MdNotificationsNone />
          </div>
          <div className="light" >
             <MdLightMode />
          </div>
        </div>
      </div>
      <div className="main-container" style={{ '--columns': cardsData.length === 1   ? 1 : 'auto-fit' }}>
        {filterData.length==0?<Noevent></Noevent>:
      filterData.map((card, index) => (
        <Card key={index} title={card.Activity_name
          } status={card.status} Activity_type={card.Activity_type} id={card.Event_id} nextPage={nextPage} />
      ))}
    </div>
    {showNotifications && (<Notipopup ></Notipopup>)}
    </div>
  );
}

export default Myevents;