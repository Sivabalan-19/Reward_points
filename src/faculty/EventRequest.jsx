import React, { useState } from 'react';
import Faculti1 from './EventOne';
import Faculti2 from './Eventtwo';
import axios from 'axios';
import '../Student/Dashboard.css'
function EventRequest() {
  const [currentPage, setCurrentPage] = useState(1);
  const [file,setfile]=useState()
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
  const formdata=new FormData()
  const handleImageSubmit = async(event) => {
    
  
    const response=await axios.post('http://localhost:2500/upload', formdata)    
  }

  const handlefile=(e)=>{
    setfilE(e.target.files[0])
  }
  const handleUpload=()=>{
    console.log(filE)
    formdata.append('image',filE)
    formdata.append('eventId', formData.eventName);
    handleImageSubmit()
  }

  const handleDelete=()=>{
    
    setFormData(initialFormData);
    setCurrentPage(1);
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
    
  
    const response=await axios.post('http://localhost:2500/addevents', {
      eventdata: formData,
    
     
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
