
// import React from 'react';
// import { MdSummarize } from 'react-icons/md';

// const PenaltyCard = ({ bgColor, points }) => {
//   const cardStyle = {
//     width: '205px',
//     height: '134px',
//     backgroundColor: bgColor,
//     borderRadius: '6.38px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
//     fontFamily: 'Arial, sans-serif',
//     fontWeight: 'bold',
//     overflow:'hidden',
//     position: 'relative'
//   };

//   const circleStyle = {
//     position: 'absolute',
//     top: '-40px',
//     left: '-40px',
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//     border: '16px solid rgba(139, 0, 0, 0.2)',
//     boxSizing: 'border-box'
//   };

//   return (
//     <div style={cardStyle}>
//       <div style={circleStyle}></div>
//       <div style={{ fontSize: '22px', fontWeight:'lighter' }}>Penalties Points</div>
//       <div style={{ fontSize: '35px', fontWeight:'bold', paddingTop:'6px' }}>{points}</div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//    <div className='rpcardcontainer'>
//     <div className='pointsum'>
//       <div style={{fontSize:'29px',color:'#4318FF'}}><MdSummarize/></div>
//       <div style={{fontSize:'24px', fontWeight:'bold'}}>Points Summary</div>
//     </div>
//      <div className='rpline'>
//        <PenaltyCard bgColor="#4318FF" points="RP 2238" />
//        <PenaltyCard bgColor="#01B574" points="RP 1274" />
//        <PenaltyCard bgColor="#FF975C" points="RP 1903" />
//        <PenaltyCard bgColor="#F65656" points="RP 0000" />
//      </div>



//      <div className='eligiblerp'>
//       <div className='eligiblepreviousem'>
//         <div style={{fontSize:'18px', fontWeight:'bold'}}>Eligible carry in points from <br/>previous semester (2023 - ODD)</div>
//         <div style={{fontSize:'27px', fontWeight:'bold', color:'#4318FF'}}>RP 1000</div>
//       </div>
//       <div className='eligiblenextsem'>
//         <div style={{fontSize:'18px', fontWeight:'bold'}}>Eligible carry forward points to<br/>next semester (2023 - EVEN)</div>
//         <div style={{fontSize:'27px', fontWeight:'bold', color:'#4318FF'}}>RP 1000</div>
//       </div>
//      </div>
//    </div>
//   );
// };

// export default App;
