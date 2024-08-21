import {React , useState}from 'react'
import { RxCross1 } from "react-icons/rx";
import './trash.css'
import { TbTrashXFilled } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
function Trash({ darkMode, handDelete, h }) {

  
  const dele=()=>{
   
    handDelete()
    h()
  }
  return (
    <div className={`pop ${darkMode ? 'dark-mode' : ''}`} style={{display:'flex', justifyContent:'flex-end' }}>
      
        <div className='popupmainbox'>
            


            <div className='eventstat'>Are you sure to cancel request</div>

            <div style={{padding:'25px 0px', justifyContent:'center',display:'flex'}}>
              <div className='eventpopicon-trash'>
                <div className='chekck' ><TbTrashXFilled />
                </div>
              </div>
              
            </div>
            <div className='trashbuttondiv'>
              <div className='poptrashdivstyle'><button className='nocontiuebut' onClick={h}>NO Continue </button></div>
              <div className='poptrashdivstyle'><button className='trashreqbut'onClick={dele}> YES Trash Request</button></div>
          </div>
      </div>
    </div>
  )
}

export default Trash