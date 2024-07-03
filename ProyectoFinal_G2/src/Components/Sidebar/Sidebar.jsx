import React from 'react';
import './SidebarDark.css';
import './SidebarLight.css';
import starIconDark from '../../assets/icons/starIconDark.svg';
import calendarIconDark from '../../assets/icons/calendarIconDark.svg';
import clockIconDark from '../../assets/icons/clockIconDark.svg';
import searchIconDark from '../../assets/icons/searchIconDark.svg';
import likeIconDark from '../../assets/icons/likeIconDark.svg';
import starIconLight from '../../assets/icons/starIconLight.svg';
import calendarIconLight from '../../assets/icons/calendarIconLight.svg';
import clockIconLight from '../../assets/icons/clockIconLight.svg';
import searchIconLight from '../../assets/icons/searchIconLight.svg';
import likeIconLight from '../../assets/icons/likeIconLight.svg';

const Sidebar = ({ theme }) => {

  const starIcon = theme === 'light' ? starIconLight : starIconDark;
  const calendarIcon = theme === 'light' ? calendarIconLight : calendarIconDark;
  const clockIcon = theme === 'light' ? clockIconLight : clockIconDark;
  const searchIcon = theme === 'light' ? searchIconLight : searchIconDark;
  const likeIcon = theme === 'light' ? likeIconLight : likeIconDark;
  
  return (
    <div className={`sidebar ${theme}`}>
      <ul>
        <li className="main-item"><a href="home">Home</a></li>
        <li className="main-item"><a href="reviews">Reviews</a></li>
        <li className="main-item">
          <a href="newReleases">New Releases</a>
          <ul className='sub-menu'>
            <li><a href="thisWeek"><img src={starIcon} alt="Star Icon" className="icon" /> This week</a></li>
            <li><a href="thisMonth"><img src={calendarIcon} alt="Calendar Icon" className="icon" /> This month</a></li>
            <li><a href="comingSoon"><img src={clockIcon} alt="Clock Icon" className="icon" /> Coming soon</a></li>
          </ul>
        </li>
        <li className="main-item">
          <a href="popular">Popular</a>
          <ul className="sub-menu">
            <li><a href="lastSearches"><img src={searchIcon} alt="Search Icon" className="icon" /> Last searches</a></li>
            <li><a href="bestOfTheYear"><img src={likeIcon} alt="Like Icon" className="icon" /> Best of the year</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;