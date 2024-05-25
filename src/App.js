import './App.css';
import Sidebar from './Aside';
import Dashboard from './component/Dashboard' 

function App() {
  return (
    <div style={{display:'flex',height:'100vh',width:'100vw',backgroundColor:'red'}}>
      <div className='leftside'>
      <Sidebar />
    </div>
    <div className='rightside'>
      <Dashboard />
    </div>
    </div>
  );
}

export default App;
