import React, { useState, useEffect } from 'react';
import Reportstatus from './Reportstatus';
import RevieW from './RevieW';
import '../Student/Dashboard.css';

function ReviewRequest() {
  const [currentPage, setCurrentPage] = useState(2);
  const [id, setId] = useState(0);
  const [formData, setFormData] = useState({
    referenceNo: '',
    serialActivityCode: '',
    startDateTime: '',
    endDateTime: '',
    noOfStudentsRegistered: '',
    noOfStudentsAttended: '',
    noOfStudentsGotPoints: '',
    totalPoints: '',
    maximumPoint: '',
    minimumPoint: '',
    averagePoint: '',
    medianPoint: '',
  });

  const goToPreviousPage = (value) => {
    setCurrentPage((prevPage) => prevPage - 1);
    setId(value);
  };

  useEffect(() => {
    console.log(id); // This will log the updated id after state change
  }, [id]);

  return (
    <div style={{ height: '100%' }} className='eventrequesteve'>
      {currentPage === 1 && (
        <Reportstatus formData={formData} 
        id={id}/>
      )}
      {currentPage === 2 && (
        <RevieW
          goToPreviousPage={goToPreviousPage}
          formData={formData}
        />
      )}
    </div>
  );
}

export default ReviewRequest;
