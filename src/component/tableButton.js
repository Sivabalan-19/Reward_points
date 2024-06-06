import React, { useState } from "react";
import { useFilters, useTable } from "react-table";
import '../component/pointconttable.css';
import { FiSun, FiMoon } from "react-icons/fi"; 
export default function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, 
    setFilter,
  } = useTable({
    columns,
    data
  },useFilters
);
const [filterInput, setFilterInput] = useState("");
const [filterInput2, setFilterInput2] = useState("");

const [sortDir, setSortDir] = useState("lowtohigh");
// Update the state when input changes
const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("Activity_name", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput(value);
  };
  const handleFilterChange2 = event => {
    const value1 = event.target.value || undefined;
    setFilter("Activity_code", value1); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput2(value1);
  };
 
  const handleFilterChange3 = event => {
    
    setFilter("Tpye", event.target.value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
  
  };
 

// Input element

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <div>
         <input value={filterInput} onChange={handleFilterChange} placeholder={"Acitivity name"} className="inputwithsearch"/>
         <div className="input-container">
            <input 
                value={filterInput2} 
                onChange={handleFilterChange2} 
                placeholder={"Search Activity code"} 
                className="input-with-search" 
            />
          
        </div>
        <select onChange={handleFilterChange3} className="inputwithsearch">
            <option value="" selected disabled hidden>Search Acitivity code</option>
      <option value="Technical">Technical</option>
      <option value="Non Technical">Non Technical</option>
    </select>
            <table {...getTableProps()}>
            
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
}