import React, { useState } from 'react';

function Rubics({h,rows,setRows}) {
//   const [rows, setRows] = useState([
//     { id: 1, name: 'Abcd', maxMarks: 20 },
//     { id: 2, name: 'Abcd', maxMarks: 20 },
//     { id: 2, name: 'Abcd', maxMarks: 20 },
//   ]);

  const totalPoints = rows.reduce((total, row) => total + row.maxMarks, 0);

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1, name: 'Abcd', maxMarks: 20 };
    setRows([...rows, newRow]);
  };

  const handleSave = () => {
    h()
  };

  const handleTrash = () => {
    setRows(rows.slice(0, -1));
  };

  const handleEditRow = (id, newName, newMarks) => {
    setRows(rows.map(row => row.id === id ? { ...row, name: newName, maxMarks: newMarks } : row));
  };

  return (
    <div className="rubicsheet">
      <div className='button-out'><button className="add-button" onClick={handleAddRow}>Add +</button></div>
        <div className='table-layout'><table className='rubictable'>
          <thead>
            <tr>
              <th className="thofrubic">S.No </th>
              <th className="thofrubic">Name</th>
              <th className="thofrubic">Max marks</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td>{row.id < 10 ? `0${row.id}` : row.id}</td>
                <td>
                  <input 
                    className='name-rubic'
                    type="text"
                    value={row.name}
                    onChange={(e) => handleEditRow(row.id, e.target.value, row.maxMarks)}
                  />
                </td>
                <td>
                  <input
                    className='name-rubic'
                    type="number"
                    value={row.maxMarks}
                    onChange={(e) => handleEditRow(row.id, row.name, Number(e.target.value))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total points</td>
              <td>{totalPoints}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      
      <div className="button-group-bot">
        <button className="trash-button-bot" onClick={handleTrash}>Trash</button>
        <button className="save-button-bot" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Rubics;