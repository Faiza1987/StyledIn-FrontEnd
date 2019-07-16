import React from 'react';
import './SignUpQuery.css';
import { Link } from 'react-router-dom';

const SignUpQuery = (props) => {
	return (
		
		<div className="signup-query">
			<h3> Are you a: </h3>
			<ul>
				<li className="stylist">
					<button className="link-button">
						<Link to='/register-stylist'> Stylist </Link>
					</button>
				</li>
				<li className="salon-owner">
					<button className="link-button">
						<Link to='/register-salonowner'> Salon Owner </Link>
					</button>
				</li>
			</ul>
		</div>

	);
}

export default SignUpQuery;