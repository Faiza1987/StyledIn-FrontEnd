import React from 'react';
import { Link } from 'react-router-dom'
import './StylistLoginSuccess.css';


const StylistLoginSuccess = () => {
	return (
    <div className="success">
      <h3> You have successfully logged in! </h3>
      <ul>
        <li className="profile">
          <button className="link-button">
            <Link to="/stylist-profile"> View Profile </Link>
          </button>
        </li>
        <br />
        <li className="jobs">
          <button className="link-button">
            <Link to="/search-jobs"> Search Jobs </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default StylistLoginSuccess;
