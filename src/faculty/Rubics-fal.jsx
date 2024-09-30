import React, { useState } from "react";
import axios from "axios";
const RubricsMarkSheet = (props) => {
  const { student_id, Task, setTask, setShowNotifications1,filterInput2 } = props;
  const [ioru,setioru]=useState(0)
  console.log(filterInput2,Task)
  const mark_insert=async ()=>{
    var points_text=""
    try {
    
      Task.forEach((item) => {
        if (item.user_id === student_id && item.level==filterInput2) {
         
          points_text += `(${item.point_obtained},${item.task_id},${item.user_id}),`;
        }
        
      });
      points_text = points_text.slice(0, -1);
      axios.defaults.withCredentials = true;
      await axios.post(
        process.env.REACT_APP_API_URL + "faculty/inserttask",
        { task:points_text,student_id:student_id },
        {
          headers: {
            withCredentials: true,
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  }
  const mark_update=async ()=>{
       var points_text=""
    try {
      Task.forEach((item) => {
        if (item.user_id === student_id) {
        
          points_text += `(${item.point_obtained},${item.task_id},${item.user_id}),`;
        }
        
      });
      points_text = points_text.slice(0, -1);
      axios.defaults.withCredentials = true;
      await axios.post(
        process.env.REACT_APP_API_URL + "faculty/updatetask",
        { task:points_text,student_id:student_id },
        {
          headers: {
            withCredentials: true,
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  }
const sumbit_task=()=>{
  (ioru==1)?mark_insert():mark_update()
}
  const studentTasks = Task.filter((task) => task.user_id === student_id && task.level==filterInput2);

  const handleMarksChange = async(sno, newMarks) => {
 
  
    const updatedMarks = Task.map((mark) => {
      if (mark.sno === sno && mark.user_id === student_id) {
        mark.point_obtained!=-1?setioru(1):setioru(0)
        return { ...mark, point_obtained: newMarks };
      }
      return mark; 
    });
  
    

  
    setTask(updatedMarks);
  
  };
  
  const totalPoints = studentTasks.reduce(
    (total, mark) => total + parseInt(mark.point_obtained || 0, 10),
    0
  );

  return (
    <div className="rupop">
      <div className="Reward" style={{ margin: "10px 0px" }}>
        Rubrics Mark Sheet
      </div>
      <div className='table-layout'>
      <table className="rubictable">
        <thead>
          <tr>
            <th className="thofrubic">S.No</th>
            <th className="thofrubic">Name</th>
            <th className="thofrubic">Max marks</th>
          </tr>
        </thead>
        <tbody>
          {studentTasks.map((mark, index) => (
            <tr key={mark.sno}>
              <td
               className='ru-inp-so'
              >{index+1}</td>
              <td className='ru-inp-inp'>{mark.point_Name}</td>
              <td>
                <input
                  type="number"
                  value={mark.point_obtained!=-1?mark.point_obtained:0}
                  onChange={(e) => handleMarksChange(mark.sno, e.target.value)}
                  className="ru-inp"
                />{" "}
                / {mark.max_point}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot  className='total-ru'>
          <tr>
            <td colSpan="2" >
              Total points
            </td>
            <td>{totalPoints}</td>
          </tr>
        </tfoot>
      </table>
      </div>
      <div className="button-group-bot">
        <button
          className="trash-button-bot"
          onClick={() => {
            setShowNotifications1(false);
          }}
        >
          Trash
        </button>
        <button className="save-button-bot" onClick={()=>{
          sumbit_task();
          props.setShowNotifications1(false)
        }}>Save</button>
      </div>
    </div>
  );
};

export default RubricsMarkSheet;
