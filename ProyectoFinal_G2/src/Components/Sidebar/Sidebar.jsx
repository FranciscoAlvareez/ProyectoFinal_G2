import React from 'react';
import './Sidebar.css';
import starIcon from '../../assets/icons/starIcon.svg';
import calendarIcon from '../../assets/icons/calendarIcon.svg';
import clockIcon from '../../assets/icons/clockIcon.svg';
import searchIcon from '../../assets/icons/searchIcon.svg';
import likeIcon from '../../assets/icons/likeIcon.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
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