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
      <table className="in-tab">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Max marks</th>
          </tr>
        </thead>
        <tbody>
          {studentTasks.map((mark, index) => (
            <tr key={mark.sno}>
              <td>{index+1}</td>
              <td>{mark.point_Name}</td>
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
        <tfoot>
          <tr>
            <td colSpan="2" className="totalPoints">
              Total points
            </td>
            <td>{totalPoints}</td>
          </tr>
        </tfoot>
      </table>
      <div className="ru-but">
        <button
          className="ru-trashBut"
          onClick={() => {
            setShowNotifications1(false);
          }}
        >
          Trash
        </button>
        <button className="ru-saveBut" onClick={()=>{
          props.setShowNotifications1(false)
        }}>Save</button>
      </div>
    </div>
  );
};

export default RubricsMarkSheet;
