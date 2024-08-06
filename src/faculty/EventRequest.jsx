import React, { useState } from 'react';
import Faculti1 from './EventOne';
import Faculti2 from './Eventtwo';
import axios from 'axios';
import '../Student/Dashboard.css'
function EventRequest() {
  const [currentPage, setCurrentPage] = useState(1);
  const [file,setfile]=useState()
  const [rows, setRows] = useState([
    { id: 1, name: 'Abcd', maxMarks: 20 },
    { id: 2, name: 'Abcd', maxMarks: 20 },
    { id: 2, name: 'Abcd', maxMarks: 20 },
  ]);

  let currentTime = new Date();
  const initialFormData = {
    EventType: '',
    selectedType: '',
    mode: "",
    category: "",
    eventName: '',
    onlinemode: true,
  offinemode: false,
  rewardmode: true,
  honourmode: false,
    eventDetails: '',
    maxPoints: '',
    departmentAndYear: '',
    startDateTime: currentTime,
    endDateTime: '',
    schedulingStartDateTime: currentTime,
    schedulingEndDateTime: '',
    duration: '',
    noOfStudents: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const[filE,setfilE]=useState()

  const handlefile=(e)=>{
    setfilE(e.target.files[0])
  }
  // const handleUpload=()=>{
    
  //   formdata.append('image',filE)
  //   formdata.append('eventId', formData.eventName);
   
  //   console.log(formData)
  //   if(formData){
  //     console.log(formData)
  //     console.log("image upload start")
  //     const response=axios.post(process.env.REACT_APP_API_URL+'upload', formdata,{
  //       headers:{
  //                withCredentials:true,
  
  //               }
  // })    
  //   }
    
  // }
  const handleUpload = async () => {
    if (!filE) {
      alert('Please select a file first!');
      return;
    }

    const formDatA = new FormData();
    formDatA.append('pdf', filE);
    formDatA.append('eventId', formData.eventName);
    console.log(formDatA)
    axios.defaults.withCredentials = true;
    Response=await axios.post("http://localhost:5000/upload", 
    formDatA,{
      headers:{
               withCredentials:true,

              }
}
   );

     
    }
  const handleDelete=()=>{
    
    // setFormData(initialFormData);
    // setCurrentPage(1);
  console.log(formData)
  
    
  }
  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFormDataChange = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleSubmit = async(event) => {
    
    axios.defaults.withCredentials = true;
    const response=await axios.post(process.env.REACT_APP_API_URL+'addevents', {
      eventdata: formData,
    
     
    },{
      headers:{
               withCredentials:true,

              }
})

      
  }

  return (
    <div style={{height:'100%'}} className='eventrequesteve'>
      {currentPage === 1 && (
        <Faculti1
          goToNextPage={goToNextPage}
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handDelete={handleDelete}
          rows={rows}
          setRows={setRows}
        />
      )}
      {currentPage === 2 && (
        <Faculti2
          goToPreviousPage={goToPreviousPage}
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleSubmit={handleSubmit}
          handDelete={handleDelete}
          filE={filE}
          handlefile={handlefile}
          handleUpload={handleUpload}
        />
      )}
    </div>
  );
}

export default EventRequest;
