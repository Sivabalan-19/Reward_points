
import React, { useState,setState } from "react";
import { useMemo, useEffect } from "react";
import axios from "axios";
import Table from "./tablewithsearch"
export default function PointContainer() {
    const columns = useMemo(
        () => [
          {
            // first group - TV Show
            Header: "date",
            accessor: "Date",
         
            // First group columns
          },
          {
            // Second group - Details
            Header: "Activity_code",
            accessor: "Activity_code",
    
          },
          {
            // Second group - Details
            Header: "Activity_name",
            accessor: "Activity_name",
    
          },
          {
            // Second group - Details
            Header: "Tpye",
            accessor: "Tpye",
    
          },
          {
            // Second group - Details
            Header: "points",
            accessor: "points",
    
          },
        ],
        []
      );
    const [data1, setData] = useState([]);
    useEffect(() => {
        (async () => {
          const result = await axios("http://localhost:2500/pointtable");
    
          setData(result.data.message);
          
        })();
      }, []);
      console.log(data1);
  return (
    <div className="App">
        <Table columns={columns} data={data1} />
    </div>
  )
}
