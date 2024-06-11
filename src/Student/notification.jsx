import React,{useState,useEffect} from 'react'
import { FaRegBell , FaSearch } from "react-icons/fa";
import axios from 'axios';  
export default function Notification() {
    const [filterText, setFilterText] = useState('');
    const [data1, setData] = useState([]);
    useEffect(() => {
      (async () => {
        const result = await axios("http://localhost:2500/notifications");
  
        setData(result.data.message);
      })();
    }, []);
    console.log(data1);
  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredStudents = data1.filter(student => {
    return student.source_table.toLowerCase().includes(filterText.toLowerCase()) ||
    student.Activity_type.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
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
      
        <input
          type="text"
          placeholder="Search"
          value={filterText}
          onChange={handleFilterTextChange}
          className="bar"
        />

        </div>
        </div>
        <div className='notilist'>
        {filteredStudents.map((student, index) => (
            <div className='notiitems'>
            <div className='photoss'> </div>
            <div className='notimes'> 
                <div className='impname'>{student.source_table}</div>
                <div className='impname1'>{student.Activity_type}</div>
            </div>
            <div className='notipop'></div>
          </div>
    
        ))}

          
        </div>
      </div>
</div>
  </div>
  )
}
