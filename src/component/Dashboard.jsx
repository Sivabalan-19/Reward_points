import '../App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList, Legend, Cell } from 'recharts';
import { MdOutlineAddAlert, MdBarChart } from "react-icons/md";
import { Divider } from '@mui/material';
import { MdSummarize } from 'react-icons/md';
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


function Dashboard() {
    
    
const data = [
    {
      name: 'Average Points',
      value: 245.12,
      fill: '#FF975C', // Orange color
    },
    {
      name: 'Overall Points',
      value: 435.34,
      fill: '#4318FF', // Blue color
    },
  ];
  
  const CustomLabel = ({ x, y, width, value }) => (
    <text 
      x={x + width / 2} 
      y={y + 35}  
      fill="white" 
      textAnchor="middle" 
      dominantBaseline="middle"
      fontSize={25}
      fontWeight="bold" 
    >
      {value}
    </text>
  );
  
  const CustomBarChart = () => (
    <BarChart
      width={300} 
      height={250} 
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      {/* <YAxis /> */}
      <Bar dataKey="value">
        <LabelList dataKey="value" content={<CustomLabel />} />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Bar>
    </BarChart>
  );


  const PenaltyCard = ({ bgColor, points }) => {
    const cardStyle = {
      width: '205px',
      height: '134px',
      backgroundColor: bgColor,
      borderRadius: '6.38px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      overflow:'hidden',
      position: 'relative'
    };
  
    const circleStyle = {
      position: 'absolute',
      top: '-40px',
      left: '-40px',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      border: '16px solid rgba(139, 0, 0, 0.2)',
      boxSizing: 'border-box'
    };
  
    return (
      <div style={cardStyle}>
        <div style={circleStyle}></div>
        <div style={{ fontSize: '22px', fontWeight:'lighter' }}>Penalties Points</div>
        <div style={{ fontSize: '35px', fontWeight:'bold', paddingTop:'6px' }}>{points}</div>
      </div>
    );
  };
  return (
   <div className='con'>
    <header>
      <div className='header1'>
          <div className='Dash'>Dashboard</div>
          <div className='theme'>
              <div className='noti'><MdNotificationsNone /></div>
              <div className='light'><MdOutlineLightMode /></div>
          </div>
          </div>
    </header>
     
    <div flex>
         <div>
         <div className='dashboardgra'>
       <div className='graph2icon'>
         <MdBarChart />
       </div>
       <div className='dashboardgraph1'>
         <div className='graph1details'>
           <div className='barchartborder'>
             <CustomBarChart />
           </div>
           <h5>Second Year Reward Points Graph</h5>
         </div>
         <div className='dashboardpointdet'>
           <div style={{ display: 'flex', gap: '8px', justifyContent: 'start', marginLeft: '94px', marginTop: '23px' }}>
             <div><p><MdOutlineAddAlert /></p></div>
             <div className='pointdetail'>Point Details</div>
           </div>
           <Divider style={{ width: '167px', marginLeft: '75px' }} />
           <div className='averagerewardpoints'>
             <div>Average Reward</div>
             <div>:</div>
             <div>256</div>
           </div>
           <div className='totalrewardpoint'>
             <div>Total Rewards Earned</div>
             <div>:</div>
             <div>1500</div>
           </div>
           <p></p>
           <button className='position'>Position#145/240</button>
         </div>
       </div>
     </div>
     <div className='rpcardcontainer'>
     <div className='pointsum'>
       <div style={{fontSize:'29px',color:'#4318FF'}}><MdSummarize/></div>
       <div style={{fontSize:'24px', fontWeight:'bold'}}>Points Summary</div>
     </div>
      <div className='rpline'>
        <PenaltyCard bgColor="#4318FF" points="RP 2238" />
        <PenaltyCard bgColor="#01B574" points="RP 1274" />
        <PenaltyCard bgColor="#FF975C" points="RP 1903" />
        <PenaltyCard bgColor="#F65656" points="RP 0000" />
      </div>
    
    
    
      <div className='eligiblerp'>
       <div className='eligiblepreviousem'>
         <div style={{fontSize:'18px', fontWeight:'bold'}}>Eligible carry in points from <br/>previous semester (2023 - ODD)</div>
         <div style={{fontSize:'27px', fontWeight:'bold', color:'#4318FF'}}>RP 1000</div>
       </div>
       <div className='eligiblenextsem'>
         <div style={{fontSize:'18px', fontWeight:'bold'}}>Eligible carry forward points to<br/>next semester (2023 - EVEN)</div>
         <div style={{fontSize:'27px', fontWeight:'bold', color:'#4318FF'}}>RP 1000</div>
       </div>
      </div>
    </div>
         </div>    
    </div>
   </div>
  )
}

export default Dashboard