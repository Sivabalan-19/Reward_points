import React from 'react'

function Facertifiapp() {
  return (
    <div
      onSubmit={handleSubmit}
      className={`con ${darkMode ? "dark-mode" : ""}`}
    >
      <div className="header1">
        <div className="Dash">Event Request </div>
        <div className="theme">
          <div
            className="noti"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <MdNotificationsNone />
          </div>
          <div className="light" onClick={toggleDarkMode}>
            {darkMode ? <MdDarkMode /> : <MdLightMode />}
          </div>
        </div>
      </div>

      <div className="below-header">
        <div className="inside-below">
          <div className="inside-below-padding" style={{overflowY:'scroll',scrollbarWidth:'none'}}>
            <div className="eventregidetail">
              <div className="Reward" style={{fontSize:'24px'}}>Registration Details</div>
              <button onClick={()=>{handleapprove()}}>approve</button>

              <div className="eventregdet">
                <div style={{height:'100%',display:'flex',alignItems:'center',flexDirection:'column'}}>
                  <div className="evenrewqti">Event Name</div>
                  <div className="evenrewqti">Team Name</div>
                  <div className="evenrewqti">Team Size</div>
                  <div className="evenrewqti">Project Title</div>
                  <div className="evenrewqti">Level Completed</div>
                </div>
                <div  style={{height:'100%',display:'flex',alignItems:'center',flexDirection:'column'}}>
                  <div className="evenrewqti">:</div>
                  <div className="evenrewqti">:</div>
                  <div className="evenrewqti">:</div>
                  <div className="evenrewqti">:</div>
                  <div className="evenrewqti">:</div>
                </div>
                <div style={{height:'100%',display:'flex',alignItems:'center',flexDirection:'column'}}>
                  <div className="evenrewqti">{data.Activity_name}</div>
                  <div className="evenrewqti">{data.teamname}</div>
                  <div className="evenrewqti">{data.team_size}</div>
                  <div className="evenrewqti">{data.project_namel}</div>
                  <div className="evenrewqti">{data.levelcompleted}</div>
                </div>
              </div>

            </div>
            <div className="teamleaddeta">
              <div style={{display:'flex', width:'95%', justifyContent:'space-between'}}>
                    <div className="Reward" style={{fontSize:'24px'}} >Team  Details</div>
                    <div style={{width:'15%'}} onClick={() => setShowNotifications1(!showNotifications1)} ><button className="createeventbutin"><span style={{fontSize:'80%',height:'100%',display:'grid',placeItems:'center'}}  ><FaPlus/></span>Add Member</button></div>

              </div>

            </div>
            <div className="activteamdet">
              <div className="Reward" style={{fontSize:'24px'}}>Active Member Details</div>
              <div>
              
              <Table columns={columns} data={teamdata}/>
              </div>
            </div>


            <div className="geotagcer">
              <div className="Reward" style={{fontSize:'24px'}}>Certificate Upload</div>
              <div className="Geotagimg">
            <h3>Add  Geo Tag Image:</h3>
            <input type="file" onChange={imgshower} />
            <div style={{backgroundColor:'red', width:'100%', height:'50%', justifyContent:'center', display:'flex'}}> <img src={file} style={{height:'100%', width:'20%'}}/></div>
        </div>
        <div>
        <input type="file" accept=".pdf" />

        
    </div>
            </div>



          </div>
        </div>
      </div>

      {showNotifications1 && (<Addmempopcaller  event_id={event_id}   team_id={team_id} ></Addmempopcaller>)}
      {showNotifications && <Notipopup></Notipopup>}
      {/* {showNotifications3 && <Deptpopup setdAta={setdAta}  setSelected={setSelected}
          selected={selected}
          setsaved={setsaved}
          saved={saved} />}
      {showNotifications1 && (
        <Popup handDelete={handDelete} darkMode={darkMode} />
      )}
      {showNotifications2 && (
        <Rubicspopup row={rows} setRows={setRows}></Rubicspopup>
      )} */}
    </div>
  )
}

export default Facertifiapp