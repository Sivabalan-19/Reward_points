import React, { useState, useEffect, useRef } from 'react';
import './Dashboard.css';
import Dashboard from './Dashboard';
import { IoMdHome } from "react-icons/io";
import { MdOutlineBarChart } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import photo from './photo1.png'

const Sidebar = (props) => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [linePosition, setLinePosition] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const itemRefs = useRef([]);

  const handleItemClick = (item, index) => {
    setActiveItem(item);
    const itemOffsetTop = itemRefs.current[index].offsetTop;
    const dropdownOffset = dropdownVisible && (item === 'Event Masters' || item === 'My Events') ? itemRefs.current[2].offsetTop : 0;
    setLinePosition(itemOffsetTop + dropdownOffset);
    if (item === 'Event Register') {
      setDropdownVisible(!dropdownVisible);
    } else {
      setDropdownVisible(item === 'Event Masters' || item === 'My Events');
    }
  };
  const [value, setValue] = useState(localStorage.getItem("theme"));
  useEffect(() => {
  
    setValue(localStorage.getItem("theme"))
  }, [localStorage.getItem("theme")]);
  useEffect(() => {
    setLinePosition(itemRefs.current[0].offsetTop);
  }, []);
  const [darkMode, setDarkMode] = useState(false);
  if (localStorage.getItem("theme")){
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };}
  else{
    const toggleDarkMode = () => {
      setDarkMode(darkMode);
    };
  }

  return (
      <div className={`Sidebar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="Sidehead">
        <div className="Reward">REWARD&nbsp;</div>
        <div className="points">POINTS {value}</div>
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
        onClick={() => handleItemClick('Event Register', 2)}
        >
        <MdOutlineEditCalendar className="icon" />&ensp;Event Register
      </div>
      {dropdownVisible && (
          <div className="Dropdown">
            <div
            ref={el => itemRefs.current[3] = el}
            className={`DropdownItem ${activeItem === 'My Events' ? 'active' : ''}`}
            onClick={() => handleItemClick('My Events', 3)}
            >&nbsp;
          </div>
          <div
            ref={el => itemRefs.current[4] = el}
            className={`DropdownItem ${activeItem === 'Event Masters' ? 'active' : ''}`}
            onClick={() => handleItemClick('Event Masters', 4)}
            >
            Event Masters
          </div>
          <div
            ref={el => itemRefs.current[5] = el}
            className={`DropdownItem ${activeItem === 'My Events' ? 'active' : ''}`}
            onClick={() => handleItemClick('My Events', 5)}
            >
            My Events
          </div>
        </div>
      )}
      <div className="photo1">
        <img src={photo} alt="photo1" style={{ maxWidth: '82.7%', maxHeight: '20.3%' }} />
      </div>
      <div
        ref={el => itemRefs.current[6] = el}
        className={`Signout ${activeItem === 'Sign-Out' ? 'active' : ''}`}
        onClick={() => handleItemClick('Sign-Out', 6)}
        >
        <TbLogin2 className="icon" />&ensp;Sign-Out
      </div>
    </div>
  )
};

export default Sidebar;
