import React, { useState } from "react";

const RubricsMarkSheet = (props) => {
  const { student_id, Task, setTask, setShowNotifications1 } = props;

  // Filter tasks by student_id
  const studentTasks = Task.filter((task) => task.user_id === student_id);

  // Handle mark changes for the specific student
  const handleMarksChange = (sno, newMarks) => {
    const updatedMarks = Task.map((mark) =>
      mark.sno === sno && mark.user_id === student_id
        ? { ...mark, obtained_mark: newMarks }
        : mark
    );
    setTask(updatedMarks);
  };

  // Calculate the total points for the student
  const totalPoints = studentTasks.reduce(
    (total, mark) => total + parseInt(mark.obtained_mark || 0, 10),
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
                  value={mark.obtained_mark || ""}
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
          props.setShowNotifications1(false)
        }}>Save</button>
      </div>
    </div>
  );
};

export default RubricsMarkSheet;
