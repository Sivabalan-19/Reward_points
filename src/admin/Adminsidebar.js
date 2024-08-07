import React, { useState, useEffect, useRef } from 'react';
import { IoMdHome } from "react-icons/io";
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import photo from '../assets/photo1.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';

const Adminsidebar = ({ darkMode }) => {
  const { logout } = useAuth();
  const [activeItem, setActiveItem] = useState(localStorage.getItem('activeItem') || 'Dashboard');
  const [linePosition, setLinePosition] = useState(0);
  const itemRefs = useRef([]);
  const navigate = useNavigate();

  const handleItemClick = (item, index) => {
    setActiveItem(item);
    const itemOffsetTop = itemRefs.current[index].offsetTop;
    setLinePosition(itemOffsetTop);
    localStorage.setItem('activeItem', item);
    localStorage.setItem('linePosition', itemOffsetTop);
  };

  const handleLogout = async () => {
    try {
      // Clear local storage
      localStorage.removeItem('activeItem');
      localStorage.removeItem('linePosition');
      
      // Ensure that the active item and line position are reset
      setActiveItem('Dashboard');
      if (itemRefs.current[0]) {
        setLinePosition(itemRefs.current[0].offsetTop);
      }

      // Call logout function
      await logout();
      
      // Fetch data (if needed)
      axios.defaults.withCredentials = true;
      await axios.get(`${process.env.REACT_APP_API_URL}r`, {
        headers: { withCredentials: true }
      });
      
    } catch (error) {
      console.error("Error handling logout:", error);
    }
  };

  useEffect(() => {
    const savedLinePosition = parseFloat(localStorage.getItem('linePosition'));
    const savedActiveItem = localStorage.getItem('activeItem');

    if (savedLinePosition && savedActiveItem) {
      setLinePosition(savedLinePosition);
      setActiveItem(savedActiveItem);
    } else {
      // Set default position if no saved values
      if (itemRefs.current[0]) {
        setLinePosition(itemRefs.current[0].offsetTop);
      }
    }
  }, []);

  return (
    <div className={`Sidebar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="Sidehead">
        <div className="Reward">REWARD&nbsp;</div>
        <div className="points">POINTS</div>
      </div>
      <div className="line" style={{ top: linePosition }}></div>
      <div
        ref={el => itemRefs.current[0] = el}
        className={`Home ${activeItem === 'Dashboard' ? 'active' : ''}`}
        onClick={() => {
          handleItemClick('Dashboard', 0);
          navigate('dashboard');
        }}
      >
        <IoMdHome className="icon" />&ensp;Dashboard
      </div>
      <div
        ref={el => itemRefs.current[1] = el}
        className={`Home ${activeItem === 'Reports' ? 'active' : ''}`}
        onClick={() => {
          handleItemClick('Reports', 1);
          navigate('reports');
        }}
      >
        <MdOutlineEditCalendar className="icon" />&ensp;Reports
      </div>
      <div className="photo1">
        <img src={photo} alt="photo1" style={{ maxWidth: '82.7%', maxHeight: '20.3%' }} />
      </div>
      <div className="Signout" onClick={handleLogout}>
        <TbLogin2 className="icon" />&ensp;Sign-Out
      </div>
    </div>
  );
}

export default Adminsidebar;