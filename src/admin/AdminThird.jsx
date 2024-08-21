import React from 'react'
import { MdLightMode, MdNotificationsNone } from 'react-icons/md'
import Rpapproveltable from './Rpapproveltable'

function AdminThird() {
  return (
    <div className='con'>
        <div className="header11">
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', height: '100%' }}>
          <div className="Dash-em">Reward Point</div>
        </div>
        <div className="theme">
          <div className="noti" > 
            <MdNotificationsNone />
          </div>
          <div className="light" >
             <MdLightMode />
          </div>
        </div>
      </div>

      <div className="allbody">
        <Rpapproveltable />
      </div>
    </div>
  )
}

export default AdminThird