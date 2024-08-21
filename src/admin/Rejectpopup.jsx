import React,{useState} from 'react'
import { RxCross1 } from "react-icons/rx";
import { TbTrashXFilled } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
function Rejectpop(props,darkMode) {
    const[rd,srd]=useState()
  const dele=()=>{
  
  
    
    props.reject()
    props.setRejectNotifications(false)
    props.setRejectNotifications(false)
    // props.h()
  }
  const datachange=(e)=>{
srd(e.target.value)
props.setrejectdetails(rd)
  }
  return (
    <div  style={{display:'flex', justifyContent:'flex-end' }} className={`pop ${darkMode ? 'dark-mode' : ''}`}>
      
        <div className='popupmainbox'>
            


            <div className='eventstat'>Are you sure to Reject the Event</div>

            <div style={{padding:'25px 0px', justifyContent:'center',display:'flex'}}>
            <textarea
                      className="multi-rej"
                      style={{backgroundColor:'transparent'}}
                      value={rd}
                      onChange={datachange}
                    />
              
            </div>
            <div className='trashbuttondiv'>
              <div className='poptrashdivstyle'><button className='nocontiuebut' onClick={()=>{props.setRejectNotifications(false)}}>NO Thanks </button></div>
              <div className='poptrashdivstyle'><button className='trashreqbut'onClick={dele}> Reject Request</button></div>
          </div>
      </div>
    </div>
  )
}

export default Rejectpop