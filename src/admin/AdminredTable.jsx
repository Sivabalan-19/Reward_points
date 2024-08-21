import React from 'react'

function AdminredTable() {
  return (
    <div className='col-body' >
         <div style={{height:'15%',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{height:'60%',display:'flex',flexDirection:'column',justifyContent:'space-between',width:'22%'}}>
                <div >Academic Year <span className="required">*</span></div>    
                <div className="search-bar-em1-rep1-ad">
            <select className="ba-em----s">
              <option style={{ color: '#2B3674', fontWeight: '600' }} value="" selected disabled hidden>Choose Academic year</option>
              <option style={{ color: '#2B3674', fontWeight: '600' }} value="First">First Year</option>
              <option style={{ color: '#2B3674', fontWeight: '600' }} value="Second">Second Event</option>
              <option style={{ color: '#2B3674', fontWeight: '600' }} value="Third">Third Year</option>
              <option style={{ color: '#2B3674', fontWeight: '600' }} value="Fourth">Fourth Event</option>
            </select>
        </div>
                </div>
                <div style={{height:'60%',display:'flex',flexDirection:'column',justifyContent:'space-between',width:'22%'}}>
                <div >department <span className="required">*</span></div>                
                <input  className='inp-fal-rep'></input>
                </div>
                <div style={{height:'60%',display:'flex',flexDirection:'column',justifyContent:'space-between',width:'22%'}}>
                <div>Redemption Ratio <span className="required">*</span></div>                
                <input 
                // placeholder='Enter the Redemption Ratio' 
                type='number' className='inp-fal-rep'></input>
                </div>
                
                <div style={{height:'60%',display:'flex',justifyContent:'center',alignItems:'end',width:'22%'}}>
                    <button className='asdfghjkl'>
                        Submit
                    </button>
                </div>
            </div>   
    </div>
  )
}

export default AdminredTable