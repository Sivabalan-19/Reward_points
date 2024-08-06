import React, { useState, useEffect, useRef } from 'react';
import { IoMdHome } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { TbLogin2 } from "react-icons/tb";
import '../Student/Dashboard.css';
import { MdOutlineEditCalendar } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import photo from '../assets/photo1.png'
import { useAuth } from '../AuthContext';
import axios from 'axios';
const Sidebar = ({ darkMode }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [linePosition, setLinePosition] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const itemRefs = useRef([]);

  const handleLogout = () => {
    localStorage.removeItem('activeItem');
    localStorage.removeItem('linePosition');
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(process.env.REACT_APP_API_URL+"logout",{
          headers:{
                   withCredentials:true,

                  }
 });
       
       
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData()
    logout();
  };

  const handleItemClick = (item, index) => {
    setActiveItem(item);
    const itemOffsetTop = itemRefs.current[index].offsetTop;
    const dropdownOffset = dropdownVisible && (item === 'Event Masters' || item === 'My Events') ? itemRefs.current[2].offsetTop : 0;
    setLinePosition(itemOffsetTop + dropdownOffset);

    localStorage.setItem('activeItem', item);
    localStorage.setItem('linePosition', itemOffsetTop + dropdownOffset);

    if (item === 'Event Register') {
      setDropdownVisible(!dropdownVisible);
    } else {
      setDropdownVisible(item === 'Event Masters' || item === 'My Events');
    }

    // Add navigation logic here
    switch (item) {
      case 'Dashboard':
        navigate('/dashboard');
        break;
      case 'Points Container':
        navigate('/dashboard/points-container');
        break;
      case 'Event Register':
        // The dropdown visibility is handled separately
        break;
      case 'My Events':
        navigate('/dashboard/my-events');
        break;
      case 'Event Masters':
        navigate('/dashboard/event-masters');
        break;
      case 'Sign-Out':
        handleLogout();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const savedLinePosition = parseFloat(localStorage.getItem('linePosition'));
    const savedActiveItem = localStorage.getItem('activeItem');

    if (savedLinePosition && savedActiveItem) {
      setLinePosition(savedLinePosition);
      setActiveItem(savedActiveItem);
    } else {
      setLinePosition(itemRefs.current[0].offsetTop);
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
        onClick={() => handleItemClick('Dashboard', 0)}
      >
        <IoMdHome className="icon" />&ensp;Dashboard
      </div>
      <div
        ref={el => itemRefs.current[1] = el}
        className={`Home ${activeItem === 'Points Container' ? 'active' : ''}`}
        onClick={() => handleItemClick('Points Container', 1)}
      >
        <MdOutlineBarChart className="icon" />&ensp;Points Container  
      </div>
      <div
        ref={el => itemRefs.current[2] = el}
        className={`Home ${activeItem === 'Event Register' ? 'active' : ''}`}
        // className="Home"
        onClick={() => handleItemClick('Event Register', 2)}
      >
        <MdOutlineEditCalendar className="icon" />&ensp;Event Register
      </div>
      {dropdownVisible && (
        <div className="Dropdown">
          <div
            ref={el => itemRefs.current[3] = el}
            className={`Home ${activeItem === 'Event Register' ? 'active' : ''}`}
            onClick={() => handleItemClick('Event Register', 3)}
          >
            &ensp;
          </div>
          <div
            ref={el => itemRefs.current[4] = el}
            className={`DropdownItem ${activeItem === 'Event Masters' ? 'active' : ''}`}
            onClick={() => handleItemClick('Event Masters', 4)}
          >
            Event Masters
          </div>
          <div
            ref={el => itemRefs.current[6] = el}
            className={`DropdownItem ${activeItem === 'My Events' ? 'active' : ''}`}
            onClick={() => handleItemClick('My Events', 6)}
          >
            My Events
          </div>
        </div>
      )}
      <div className="photo1">
        <img src={photo} alt="photo1" style={{ maxWidth: '82.7%', maxHeight: '20.3%' }} />
      </div>
      <div className="Signout" onClick={handleLogout}>
        <TbLogin2 className="icon" />&ensp;Sign-Out
      </div>
    </div>
  );
};

export default Sidebar;
