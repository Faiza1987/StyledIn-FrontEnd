import React from 'react';
import { Link } from 'react-router-dom';

const Query = () => {
	return (
    <div className="container">
      <ul id="query-buttons">
        <li>
          <button className="signup-link">
            <Link to="/signup-query"> Sign Up </Link>
          </button>
        </li>
        <br />
        <li> OR </li>
        <br />
        <li>
          <button className="login-link">
            <Link to="/login-query"> Login </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Query;