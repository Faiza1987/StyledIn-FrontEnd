import React from 'react';
import './LogInQuery.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import StylistRegistrationForm from "./StylistRegistrationForm";
import SalonOwnerRegistrationForm from "./SalonOwnerRegistrationForm";

const LogInQuery = (props) => {
	return(
		<Router>
			<div className="login-query">
				<h3> Log In As: </h3>
				<ul>
					<li className="stylist">
						<button className="link-button">
							<Link to='/login-stylist'> Stylist </Link>
						</button>
					</li>
					<li className="salon-owner">
						<button className="link-button">
							<Link to='/login-salonowner'> Salon Owner </Link>
						</button>
					</li>
				</ul>
			</div>
			
		</Router>
	);
}

export default LogInQuery;