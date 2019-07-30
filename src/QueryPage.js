import React from 'react';
import { Link } from 'react-router-dom';

const Query = () => {
	return (
    <div className="signup-query">
      <ul>
        <li className="link">
          <button className="link-button">
            <Link to="/signup-query"> Sign Up </Link>
          </button>
        </li>
        <br />
        <li>
          <button className="link-button">
            <Link to="/login-query"> Login </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Query;