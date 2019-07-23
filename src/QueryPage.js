import React from 'react';
import { Link } from 'react-router-dom';

const Query = () => {
	return(
		
		<div>
			<button>
				<Link to="/signup-query"> Sign Up </Link>	
			</button> 
			<br/>
			OR
			<br/>
			<button>
				<Link to="/login-query"> Login </Link>
			</button>
		</div>
	);
}

export default Query;