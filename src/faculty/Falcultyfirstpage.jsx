
import React, { useState,setState } from "react";
import axios from "axios";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdLightMode, MdOutlineAccountTree } from "react-icons/md";
import { useMemo, useEffect } from "react";
import {store, useGlobalState} from 'state-pool';
import Table from "../component/table";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";
import { IoMoon } from "react-icons/io5";
import {
  MdOutlineAddAlert,
  MdBarChart,
  MdSummarize,
  MdNotificationsNone,
  MdOutlineLightMode,
  MdDarkMode,
} from "react-icons/md";
import Notipopup from "../Student/Notipopup";
import { FaSearch } from "react-icons/fa";



function Falcultyfirstpage(props) {
    const [showNotifications, setShowNotifications] = useState(false);
    const [isTableReady, setIsTableReady] = useState(false);
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsTableReady(true);
      }, 100); // 1 second delay
  
      return () => clearTimeout(timeoutId);
    }, []);
  
    if (!isTableReady) {
      return <div></div>;
    }
  return (
    <div className="con ">
      <div className="header1">
        <div className="Dash"> Event Details </div>
        <div className="theme">
          <div className="noti" onClick={() => {setShowNotifications(!showNotifications)}} >
            <MdNotificationsNone />
          </div>
          <div className="light" >
             <MdLightMode />
          </div>
        </div>
      </div>
      
      <div className="allbody-rep" >
        <div className="fal-11-rep">
            <div style={{height:'98%',width:'70%'
                ,backgroundColor:'white'
                ,borderRadius:'10px'
                }}>

            <div className="heade"> 

                <div className="Reward" style={{marginLeft:'2%'}}>Attendance</div> 
            </div>
            <div className="heade1">
            <div className="Dash-pt" style={{display:'flex',justifyContent:'space-between',width:'50%'}}> 
        <div className="search-bar-fal-rep">
        <div style={{color: '#2B3674',fontSize:'12px',alignSelf:'center'}}><FaSearch /></div>
        <input
          type="text"
          placeholder="Search"
          className="bar"
        />
        </div>
        <div className="search-bar-em1-rep1">
            <select className="ba-em">
              <option style={{ color: '#2B3674', fontWeight: '600' }} value="" selected disabled hidden>Academic year</option>
              <option value="First">First Year</option>
              <option value="Second">Second Event</option>
              <option value="Third">Third Year</option>
              <option value="Fourth">Fourth Event</option>
            </select>
        </div>
        </div>
            </div>
            <div className="heade2"> </div>
                
            </div>
            <div style={{height:'98%',width:'28%'
                ,backgroundColor:'white'
                ,borderRadius:'10px'
                }}>
                
            </div>
        </div>
      </div>



      {showNotifications && (<Notipopup></Notipopup>)}
    </div>
  )
}

export default Falcultyfirstpage