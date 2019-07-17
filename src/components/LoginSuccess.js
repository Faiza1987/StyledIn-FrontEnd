import React from 'react';
import { Link } from 'react-router-dom'


const LoginSuccess = () => {
	return (
    <div>
      <h3> You have successfully logged in! </h3>

      <button>
        <Link to="/stylist-profile"> Veiw Profile </Link>
      </button>

      <button>
        <Link to="/search-jobs"> Search Jobs </Link>
      </button>
    </div>
  );
}

export default LoginSuccess;
