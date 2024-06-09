
import React, { useState,setState } from "react";
import "../Eventmasters.css";
import axios from "axios";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdLightMode, MdOutlineAccountTree } from "react-icons/md";
import { useMemo, useEffect } from "react";
import {store, useGlobalState} from 'state-pool';
import Table from "../table";

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
import { Divider } from "@mui/material";
import { FaRegBell , FaSearch } from "react-icons/fa";



const Dashboard = ({ darkMode, toggleDarkMode }) => {

  const [showNotifications, setShowNotifications] = useState(false);
 
  
  const data = [
    { name: "Average Points", value: 245.12, fill: "#FF975C" },
    { name: "Overall Points", value: 435.34, fill: "#4318FF" },
  ];

  const CustomLabel = ({ x, y, width, value }) => (
    <text
      x={x + width / 2}
      y={y + 35}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={25}
      fontWeight="bold"
    >
      {value}
    </text>
  );

  const CustomBarChart = () => (
    <BarChart width={360} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value">
        <LabelList dataKey="value" content={<CustomLabel />} />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Bar>
    </BarChart>
  );

  const PenaltyCard = ({ bgColor, points, name }) => {
    const cardStyle = {
      width: "22%",
      padding: "20px 5px",
      backgroundColor: bgColor,
      borderRadius: "7px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "Arial, sans-serif",
      fontWeight: "bold",
      overflow: "hidden",
      position: "relative",
    };
    
    const circleStyle = {
      position: "absolute",
      top: "-40px",
      left: "-40px",
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      border: "16px solid rgba(139, 0, 0, 0.2)",
      boxSizing: "border-box",
    };
    return (
      <div style={cardStyle}>
        <div style={circleStyle}></div>
        <div style={{ fontSize: "20px", fontWeight: "lighter" }}>{name}</div>
        <div style={{ fontSize: "30px", fontWeight: "500", paddingTop: "6px" }}>
          {points}
        </div>
      </div>
    );
  };
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Category",
        accessor: "category",
     
        // First group columns
      },
      {
        // Second group - Details
        Header: "Details",
        accessor: "details",

      },
    ],
    []
  );
  const columns2 = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "S.no",
        accessor: "sno",
     
        // First group columns
      },
      {
        // Second group - Details
        Header: "Subject",
        accessor: "subject",

      },
      {
        // Second group - Details
        Header: "IP-1",
        accessor: "ip1",

      },
      {
        // Second group - Details
        Header: "IP-2",
        accessor: "ip2",

      },
      {
        // Second group - Details
        Header: "total",
        accessor: "total",

      },
    ],
    []
  );
  
  
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data1, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
 
  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:2500/rewardtable");

      setData(result.data.message);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const result=await axios("http://localhost:2500/rewarddistributed");
      setData2(result.data.message);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const result=await axios("http://localhost:2500/rewardinternal");
      setData3(result.data.message);
    })();
  }, []);




  return (
    <div className={`con ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header1">
        <div className="Dash">DASHBOARD</div>
        <div className="theme">
          <div className="noti" onClick={() => setShowNotifications(!showNotifications)} >
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <IoMoon /> : <MdLightMode />}
          </div>
        </div>
      </div>
      <div className="allbody" style={{ display:'flex',flexDirection:'column',gap:'2%'}}>
      <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
        <div style={{width:'60%' , display:'flex',flexDirection:'column',justifyContent:'space-between',height:'690px'}}>
        <div className="dashboardgra">
          <div className="dashboardgraph1">
            <div className="graph1details">
              <div>
                <CustomBarChart />
              </div>
              <div
                 className="secondyearcolor"
              >
                Second Year Reward Points Graph
              </div>
            </div>
            <div className="dashboardpointdet">
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                <div className="pointdetailicon">
                  <MdOutlineAddAlert />
                </div>
                <div className="pointdetail">Points Details</div>
              </div>
              <Divider style={{ width: "167px", margin: "auto" }} />
              <div className="averagerewardpoints">
                <div
                 className="pointdetailcolor"
                >
                  Average Reward points &ensp;&ensp;&ensp;&ensp;
                </div>
                <div
                  className="pointdetailcolor"
                >
                  :
                </div>
                <div
                  className="pointdetailcolor"
                >
                  2567
                </div>
              </div>
              <div className="totalrewardpoint">
                <div
                  className="pointdetailcolor"
                >
                  Total Rewards points Earned
                </div>
                <div
                 className="pointdetailcolor"
                >
                  :
                </div>
                <div
                 className="pointdetailcolor"
                >
                  1500
                </div>
              </div>
              <p></p>
              <button className="position">Position#145/240</button>
            </div>
          </div>
          
        </div>

        <div className="rpcardcontainer">
        <div style={{width:'100%'}}>
          <div className="pointsum">
            <div
              style={{ fontSize: "20px", color: "#4318FF", marginTop: "3px" }}
            >
              <MdSummarize />
            </div>
            <div className="rpcardcontainerpointtit">
              Points Summary
            </div>
          </div>
          <div className="rpline">
            <PenaltyCard
              bgColor="#4318FF"
              points="RP 2238"
              name="Total Points"
            />
            <PenaltyCard
              bgColor="#01B574"
              points="RP 1274"
              name="Balance Points"
            />
            <PenaltyCard
              bgColor="#FF975C"
              points="RP 1903"
              name="Redeemed Points"
            />
            <PenaltyCard
              bgColor="#F65656"
              points="RP 0000"
              name="Penalties Points"
            />
          </div>
          <div className="eligiblerp">
            <div className="eligiblepreviousem">
              <div
                className="elegiblecarryrptext"
              >
                Eligible carry in points from <br />
                previous semester (2023 - ODD)
              </div>
              <div
                className="elegiblecarryrppoint"
              >
                RP 1000
              </div>
            </div>
            <div className="eligiblenextsem">
              <div
                className="elegiblecarryrptext"
              >
                Eligible carry forward points to
                <br />
                next semester (2023 - EVEN)
              </div>
              <div
                className="elegiblecarryrppoint"
              >
                RP 1000
              </div>
            </div>
          </div>
        </div>
        </div>

        </div>
      
      <div className='detailedpointbox' >
        <div className='detailedpointhead'>
          <div style={{ fontSize: '25px' }}>
            <RiAccountCircleLine className='detaileailedpointicon' />
          </div>
          <div className='detailedpointtitle'>Detailed Points Split up </div>
        </div>
        <div style={{ fontSize: '20px', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
          2023-2024 Even Semester
        </div>

        <div className='pointdetbutton'>
          <div style={{ fontSize: '24px' }}>
            <MdOutlineAccountTree className='detaileailedpointicon' />
          </div>
          <div className='pointdetailbutton'>Points Details</div>
        </div>
        <div className="r">   <Table columns={columns} data={data1} /></div>
      </div>
 
        
        </div> 


      
        <div className="rpdistributiontablecontainer">
        <div className="table1" style={{ justifyContent:'center', width:'50%'}}>
          <span><i class="fa-solid fa-bars" style={{color:'blue'}}/>  </span><span className="rpinternaldistributon">Reward Points Distribution</span>
          <Table className='table1backend' columns={columns2} data={data2} />
        </div>
        <div className="table2" style={{ justifyContent:'center', width:'50%'}}> 
        <span><i class="fa-solid fa-book" style={{color:'blue'}}/> </span><span className="rpinternaldistributon">Internal Mark Distribution</span>
          <Table columns={columns2} data={data3} />
        </div>
        </div>
        <div style={{height:'20px'}}>

        </div>
      </div>

      {showNotifications && (
        <div className="l">
          <div className="logs-popup">
            <div>
              <div className="noti1">
                <div className="logs">Logs </div>
                <div className="bellicon">
                  <FaRegBell />{" "}
                </div>
              </div>
              <div style={{justifyContent:'center',display:'flex'}}>
              <div className="search-bar">
              <div style={{marginTop:'2px',color: '#2B3674',fontSize:'12px',alignSelf:'center'}}><FaSearch /></div>
              <input type="text" placeholder="Search" className="bar"/>
              </div>
              </div>
              <div className='notilist'>
                <div className='notiitems'> </div>
                <div className='notiitems'> </div>
                <div className='notiitems'> </div>
                <div className='notiitems'> </div>
                <div className='notiitems'> </div>
                <div className='notiitems'> </div>
              </div>
            </div>
    </div>
        </div>
      )}


    </div>
  );
};

export default Dashboard;