import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Attendence from "./Attendence";
import Rpadding from "./Rpadding";
import logo1 from "../assets/image1.png";
import logo2 from "../assets/image2.png";
import logo3 from "../assets/image3.png";
import logo4 from "../assets/image4.png";
import {  MdLightMode, MdNotificationsNone } from "react-icons/md";
import Verticalstepper from "./Verticalstepper";
import { IoMoon } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
function Falcultyfirstpage({ darkMode, toggleDarkMode, nextPage, eventId,status,Activity_type,Activity_name,setstatus}) {
  const [Data, setData] = useState([]); // Initialize Data as an empty array
  const [Task, setTask] = useState([]);
  const [acti_n,setacti_n]=useState()
  const [acti_c,setacti_c]=useState()
  const [acti_t,setacti_t]=useState()

  const [student_id, setStudentId] = useState(0);
  const [showNotifications1, setShowNotifications1] = useState(false);
  const [isTableReady, setIsTableReady] = useState(false);
  useEffect(() => {
    const E_i = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "Event_id",
          { id: eventId },
          {
            headers: {
              withCredentials: true,
              Authorization: localStorage.getItem("authToken"),
            },
          }
        )
        setacti_n(response.data.message[0].Activity_name);
        setacti_t(response.data.message[0].Activity_type)
        
        setacti_c(response.data.message[0].Activity_code)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    E_i();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "attendence",
          { id: eventId },
          {
            headers: {
              withCredentials: true,
              Authorization: localStorage.getItem("authToken"),
            },
          }
        );
        const reversedData = response.data.message
          .reverse()
          .map((row, index) => ({ ...row, sno: index + 1 }));
        setData(reversedData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
   
    const taskData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.post(
          process.env.REACT_APP_API_URL + "task",
          { id: eventId },
          {
            headers: {
              Authorization: localStorage.getItem("authToken"),
            },
          }
        );
        let task = response.data.message.map((row, index) => ({
          ...row,
          sno: index + 1,
        }));
        task = task.map((row) => ({ ...row, obtained_mark: 0 }));
        setTask(task);
     
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };
  
    taskData();
  }, []);

  const taskSumbit = async (points_text) => {
    try {
      axios.defaults.withCredentials = true;
      await axios.post(
        process.env.REACT_APP_API_URL + "sumbittask",
        { text: points_text,id: eventId },
        {
          headers: {
            withCredentials: true,
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
      setstatus(6)
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };
  const attendence_sumbit = async (attend) => {
    try {
      axios.defaults.withCredentials = true;
      await axios.post(
        process.env.REACT_APP_API_URL + "present",
        { text: attend, id: eventId },
        {
          headers: {
            withCredentials: true,
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
      setstatus(5)
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };
  const sumbit_task = () => {
    let points_text = "";

    Task.forEach((item) => {
      points_text += `(${item.user_id},${item.obtained_mark},${item.task_id}),`;
    });
    points_text = points_text.slice(0, -1);
   
    taskSumbit(points_text);
  };
const Sumbit_attendence=()=>{
  let attendence = "";
 
  Data.forEach((item) => {
    if (item.present == 1) {
      attendence += item.user_id;
    }
  });
 
  attendence_sumbit(attendence);
}
  const handlePresent = (sno) => {
    setData((prevData) => {
      return prevData.map((d) => {
        if (d.sno === sno) {
          return { ...d, present: d.present ? 0 : 1 };
        }
        return d; // Return the original object if no update is needed
      });
    });
  };

  const columns = useMemo(
    () => [
      { Header: "SNO", accessor: "sno" },
      { Header: "Reg No", accessor: "rollno" },
      { Header: "Student Name", accessor: "username" },
      { Header: "department", accessor: "department_name" },
      { Header: "year", accessor: "year" },
      {
        Header: "Attendance",
        accessor: "present",
        Cell: ({ cell: { row } }) => (
          <button
            className="view-em"
            onClick={() => handlePresent(row.original.sno)}
          >
            {row.original.present ? "present" : "absent"}
          </button>
        ),
      },
      {
        Header: "view",
        accessor: "user_id",
        Cell: ({ cell: { value } }) => (
          <div
            onClick={() => {
           
           
              setStudentId(value);
              setShowNotifications1(true);
            }}
          >
            <FaEye />
          </div>
        ),
      },
    ],
    [nextPage]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTableReady(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isTableReady) {
    return <div>Loading...</div>;
  }
  const Student_regestration = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "openregistration",
        {
          id: eventId,
        },
        {
          headers: {
            withCredentials: true,
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
      setstatus(3)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const Event_completion = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "close_event",
        {
          id: eventId,
        },
        {
          headers: {
            withCredentials: true,
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
      setstatus(8)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const Student_close = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "closeregistration",
        {
          id: eventId,
        },
        {
          headers: {
            withCredentials: true,
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
      setstatus(4)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="con">
      <div className="header1">
        <div className="Dash">Event Details</div>
        <div className="theme">
          <div
            className="noti"
            onClick={() => setShowNotifications1(!showNotifications1)}
          >
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
          {darkMode ? <IoMoon /> : <MdLightMode />}
          </div>
        </div>
      </div>

      <div className="allbody-rep">
        <div className="fal-11-rep">
          <div className="fac-att-pag">
            <div className="heade">
              <div className="Reward">
                Attendance
              </div>
            </div>
            <div className="heade2">
              <Attendence
                columns={columns}
                data={Data}
                Task={Task}
                Table_header_name="Attendance table"
                handlePresent={handlePresent}
              ></Attendence>
            </div>

            
            <div style={{height:'10%',width:'100%',display:'flex',justifyContent:'end',alignItems:'center',gap:'2%'}}>
              {status==2?<button className="previouseventbut1-cre" onClick={Student_regestration}>Open Registration</button>:""}
              {status==4? <button className="previouseventbut1-cresu" onClick={Sumbit_attendence}>Submit Attendence</button>:""}
              {status==5? <button className="previouseventbut1-cresu" onClick={sumbit_task}>Submit Points</button>:""}
            {status==3?  <button className="previouseventbut1-cretrtr" onClick={Student_close}>Close Registration</button>:""}
            {status==7?  <button className="previouseventbut1-cretrtr" onClick={Event_completion}>Set Event_completed</button>:""}
            </div>
            
          </div>
          <div className="fac-ver-stepp"> 
            <div style={{height:'37%' , display:'flex',flexDirection:'column' }}>
              <div style={{height:'65%' , borderRadius:'10px'}}>
               
                {acti_t == "external-technical" ? (
          <img
            src={logo1}
            style={{ height: "100%", width: "100%" ,borderRadius:'10px' }}
          />
        ) : acti_t == "technical-society" ? (
          <img
            src={logo2}
            style={{ height: "100%", width: "100%" ,borderRadius:'10px'}}
          />
        ) : acti_t == "extra-curricular" ? (
          <img
            src={logo3}
            style={{ height: "100%", width: "100%",borderRadius:'10px' }}
          />
        ) : (
          <img
            src={logo4}
            style={{ height: "100%", width: "100%" ,borderRadius:'10px'}}
          />
        )}
              </div>
              <div className="eventnamefac">
              {acti_n}              
              </div>
              <div className="eventidfacatt">
              Event Code : {acti_c}             
              </div>
            </div>
            <div className="line-rep"></div>
            <div style={{height:'58%' , width:'90%',padding:'0 5%'}}>
              <div className="Reward" style={{paddingBottom:'15px'}}>Progress Status :</div>
            {status && <Verticalstepper status={status}/>}
            </div>
            
          </div>
        </div>
      </div>

      {showNotifications1 && (
        <Rpadding
          setShowNotifications1={setShowNotifications1}
          Task={Task}
          status={status}
          student_id={student_id}
          setTask={setTask}
        />
      )}
    </div>
  );
}

export default Falcultyfirstpage;
