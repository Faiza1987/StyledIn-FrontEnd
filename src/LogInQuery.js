import React from 'react';
import './LogInQuery.css';
import {Link} from 'react-router-dom';

const LogInQuery = (props) => {
	return(

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
	);
}

export default LogInQuery;