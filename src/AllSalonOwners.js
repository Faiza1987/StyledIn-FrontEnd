import React, { Component } from 'react';
import axios from 'axios';
import './AllSalonOwners.css';
import { Link } from 'react-router-dom';
import './BaseURLs';

class AllSalonOwners extends Component {
	constructor(props){
		super(props);

		this.state = {
			allSalons: null,
			error: null,
		}
	}

	componentDidMount(){
		axios.get(
			"https://salonowners-api.herokuapp.com/owners_api/users/"
		)
			// axios
      //   .get("https://styledin-api.herokuapp.com/owners_api/owners/")
        .then(response => {
          console.log("COMPONENT DID MOUNT", response.data);

          this.setState({
            allSalons: response.data
          });
        })
        .catch(error => {
          this.setState({
            error: error.message
          });
        });
	}

	render(){
		console.log("ALL SALON OWNERS FROM STATE", this.state.allSalons);

		if (this.state.allSalons === null) {
			return null;
		}
		

				const mappedSalons = this.state.allSalons
          .filter(salon => salon.profile !== null)
          .map((salon, index) => {
            return (
              <div key={index} className="salon-details">
                <ul>
                  <li>
                    <Link to="/query">
                      <strong>{salon.profile.salon_name}</strong>
                      {<br />}
                      City: {salon.profile.salon_city}
                      {<br />}
                      Job Openings: {salon.jobs.length}
                    </Link>
                  </li>
                </ul>
              </div>
            );
          });
		
				return (
					<div>
						<ul>
							<li>{mappedSalons}</li>
						</ul>
					</div>
				);
	}
}

export default AllSalonOwners;