// // import React from 'react'
// // import { BarChart } from '@mui/x-charts/BarChart';
// // import '../App.css'
// // import { MdOutlineAddAlert,MdBarChart } from "react-icons/md";
// // import { Divider } from '@mui/material';

// // function Dashboardgraph() {
// //   return (
    
// // <div className='dashboardgra'>
// // <div className='graph2icon'>
// //   <MdBarChart/>
// // </div>
// //        <di.v className='dashboardgraph1'>
         
// //          <div className='graph1details' >
// //               <div className='barchartborder'>
// //          {/* <BarChart
// //              xAxis={[{ scaleType: 'band', data: ['Average Points', 'Overall points']}]}
// //              series={[{ data: [245.12, 435.34] }]}
// //              width={362}
// //              height={328.2}/>  */}</div>
             
// //            <h5>
// //              Second Year Reward Points Graph
// //            </h5>
// //          </div>
      
      
      
         
// //          <div className='dashboardpointdet'>
// //              <div style={{display:'flex', gap:'8px', justifyContent:'start', marginLeft:'94px', marginTop:'23px'}}>
// //                <div><p><MdOutlineAddAlert /></p></div>
// //                <div className='pointdetail'>Point Details</div>
// //              </div>
// //              <Divider style={{width:'167px', marginLeft:'75px'}}/>

// //             <div className='averagerewardpoints'>
// //               <div>Average Reward Points</div>
// //               <div>:</div>
// //               <div>256</div>
// //             </div>
// //             <div className='totalrewardpoint'>
// //               <div>Total Reward Points Earned</div>
// //               <div>:</div>
// //               <div>1500</div>
// //             </div>
// //             <p></p>
// //             <button className='position'>Position#145/240</button>
             
         
// //          </div>
      
// //        </div>
     
// //        </div>
// //   )
// // }

// // export default Dashboardgraph














// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList, Legend, Cell } from 'recharts';
// import { MdOutlineAddAlert, MdBarChart } from "react-icons/md";
// import { Divider } from '@mui/material';
// import '../App.css';

// const data = [
//   {
//     name: 'Average Points',
//     value: 245.12,
//     fill: '#FF975C', // Orange color
//   },
//   {
//     name: 'Overall Points',
//     value: 435.34,
//     fill: '#4318FF', // Blue color
//   },
// ];

// const CustomLabel = ({ x, y, width, value }) => (
//   <text 
//     x={x + width / 2} 
//     y={y + 35}  
//     fill="white" 
//     textAnchor="middle" 
//     dominantBaseline="middle"
//     fontSize={25}
//     fontWeight="bold" 
//   >
//     {value}
//   </text>
// );

// const CustomBarChart = () => (
//   <BarChart
//     width={360} // Changed width
//     height={328} // Changed height
//     data={data}
//   >
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="name" />
//     {/* <YAxis /> */}
//     <Bar dataKey="value">
//       <LabelList dataKey="value" content={<CustomLabel />} />
//       {data.map((entry, index) => (
//         <Cell key={`cell-${index}`} fill={entry.fill} />
//       ))}
//     </Bar>
//   </BarChart>
// );

// function Dashboardgraph() {
//   return (
//     <div className='dashboardgra'>
//       <div className='graph2icon'>
//         <MdBarChart />
//       </div>
//       <div className='dashboardgraph1'>
//         <div className='graph1details'>
//           <div className='barchartborder'>
//             <CustomBarChart />
//           </div>
//           <h5>Second Year Reward Points Graph</h5>
//         </div>
//         <div className='dashboardpointdet'>
//           <div style={{ display: 'flex', gap: '8px', justifyContent: 'start', marginLeft: '94px', marginTop: '23px' }}>
//             <div><p><MdOutlineAddAlert /></p></div>
//             <div className='pointdetail'>Point Details</div>
//           </div>
//           <Divider style={{ width: '167px', marginLeft: '75px' }} />
//           <div className='averagerewardpoints'>
//             <div>Average Reward</div>
//             <div>:</div>
//             <div>256</div>
//           </div>
//           <div className='totalrewardpoint'>
//             <div>Total Rewards Earned</div>
//             <div>:</div>
//             <div>1500</div>
//           </div>
//           <p></p>
//           <button className='position'>Position#145/240</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboardgraph;

