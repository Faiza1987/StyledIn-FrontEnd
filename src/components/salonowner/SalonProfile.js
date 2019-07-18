import React, {Component} from 'react';
import './SalonProfile.css';
import axios from 'axios';


class SalonProfile extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			salonData: null,
			error: null,
		}
	}

	componentDidMount() {
		axios
			.get(
				"https://salonowners-api.herokuapp.com/owners_api/users/" + 
					localStorage.getItem("salonId"),
				{
					headers: {
						Authorization: `JWT ${localStorage.getItem("salonId")}`
					}
				}
			)
			.then(response => {
				console.log(
          "This is what response.data looks like from the API on a successful response",
          response.data
				);
				
				this.setState({
					salonData: response.data
				})
			})
			.catch(error => {
				this.setState({
					error: error.message
				});
			});
	}

	render() {
		if (this.state.salonData === null){
			return null;
		}

		return (
      <div>
        <h3> Profile: </h3>
        <section className="salon-details">
          <ul>
            <li>First Name: {this.state.first_name}</li>
            <li>Last Name: {this.state.last_name}</li>
            <li>Email: {this.state.email}</li>
            <li>Salon Name: {this.state.profile.salon_name}</li>
            <li>Salon Address: {this.state.profile.salon_address}</li>
            <li>Salon City: {this.state.profile.salon_city}</li>
            <li>Salon State: {this.state.profile.salon_state}</li>
            <li>Salon Zip Code: {this.state.profile.salon_state}</li>
            <li>Salon Description: {this.state.profile.salon_state}</li>
          </ul>
        </section>
      </div>
    );
	}
}

export default SalonProfile;