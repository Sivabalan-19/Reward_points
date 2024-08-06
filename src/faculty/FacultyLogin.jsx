import React, { useState, useEffect, useRef } from 'react';
import { IoMdHome } from "react-icons/io";
import { MdOutlineBarChart } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import photo from '../assets/photo1.png'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';
const Asidefalculti = ({ darkMode }) => {
  const { logout } = useAuth();
  const [activeItem1, setActiveItem] = useState(localStorage.getItem('activeItem1') || 'My Event');
  const [linePosition1, setLinePosition] = useState(0);
  const itemRefs1 = useRef([]);
  const navigate = useNavigate();
  const handleItemClick = (item, index) => {
    setActiveItem(item);
    const itemOffsetTop = itemRefs1.current[index].offsetTop;
    setLinePosition(itemOffsetTop);
    localStorage.setItem('activeItem1', item);
    localStorage.setItem('linePosition1', itemOffsetTop);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('activeItem');
    localStorage.removeItem('linePosition');
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get(process.env.REACT_APP_API_URL+"r",{
          headers:{
                   withCredentials:true,

                  }
 });
 fetchData()
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    logout();

  };

  useEffect(() => {
    const savedLinePosition = parseFloat(localStorage.getItem('linePosition1'));
    const savedActiveItem = localStorage.getItem('activeItem1');

    if (savedLinePosition && savedActiveItem) {
      setLinePosition(savedLinePosition);
      setActiveItem(savedActiveItem);
    } else {
      setLinePosition(itemRefs1.current[0].offsetTop);
    }
  }, []);

  return (
    <div className={`Sidebar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="Sidehead">
        <div className="Reward">REWARD&nbsp;</div>
        <div className="points">POINTS</div>
      </div>
      <div className="line" style={{ top: linePosition1 }}></div>
      <div
        ref={el => itemRefs1.current[0] = el}
        className={`Home ${activeItem1 === 'My Event' ? 'active' : ''}`}
        onClick={() => {handleItemClick('My Event', 0)
          navigate('My-Events')
        }
          
        }
      >
        <IoMdHome className="icon" />&ensp;My Event
      </div>
      <div
        ref={el => itemRefs1.current[1] = el}
        className={`Home ${activeItem1 === 'Points Container' ? 'active' : ''}`}
        onClick={() => {handleItemClick('Points Container', 1)
          navigate('event-enter')
        }}
      >
        <MdOutlineBarChart className="icon" />&ensp;Event Request
      </div>
      <div
        ref={el => itemRefs1.current[2] = el}
        className={`Home ${activeItem1 === 'Event Register' ? 'active' : ''}`}
        onClick={() => {handleItemClick('Event Register', 2)
          navigate('review')
        }}
      >
        <MdOutlineEditCalendar className="icon" />&ensp;Reports
      </div>
      <div className="photo1">
        <img src={photo} alt="photo1" style={{ maxWidth: '82.7%', maxHeight: '20.3%' }} />
      </div>
      <div className="Signout"  onClick={handleLogout}>
        <TbLogin2 className="icon" />&ensp;Sign-Out
      </div>
    </div>
  );
}

export default Asidefalculti;