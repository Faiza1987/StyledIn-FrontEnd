import React, { Component } from 'react';
import axios from 'axios';

class EditSalonProfile extends Component {
	constructor(props){
		super(props);

		this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      salon_name: "",
      salon_address: "",
      salon_city: "",
      salon_state: "",
      salon_zip: "",
      salon_phone_number: "",
      salon_description: "",
      error: null
    };
	}

	onChangeHandler = event => {
		const newState = {};
		newState[event.target.name] = event.target.value;

		this.setState(newState);
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      salon_name: "",
      salon_address: "",
      salon_city: "",
      salon_state: "",
      salon_zip: "",
      salon_phone_number: "",
      salon_description: "",
      error: null
    });
	}

	editProfile = () => {
		const updatedSalonData = {
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password,
      profile: {
        salon_name: this.state.salon_name,
        salon_address: this.state.salon_address,
        salon_city: this.state.salon_city,
        salon_state: this.state.salon_state,
        salon_zip: this.state.salon_zip,
        salon_phone_number: this.state.salon_phone_number,
        salon_description: this.state.salon_description
      }
    };

			axios.put(
				"https://salonowners-api.herokuapp.com/owners_api/users/" + localStorage.getItem("salonId") + "/", updatedSalonData,
				{
					headers: {
						Authorization: `JWT ${localStorage.getItem("salonOwnerToken")}`
					}
				}
			)
			.then(response => {
			console.log("This is what response.data looks like from the API on a successful response", response.data);
			})
			.catch(error => {
				this.setState({
					error: error.message
				});
			});
	}

	render(){
		return (
      <div>
        <h3> Edit Profile: </h3>
        <section className="container">
          <form
            className="SalonOwnerRegistrationForm_form"
            onSubmit={this.handleSubmit}
          >
            <section className="user-inputs">
              <input
                placeholder="First Name"
                type="text"
                name="first_name"
                value={this.state.first_name}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Last Name"
                type="text"
                name="last_name"
                value={this.state.last_name}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Name of Salon"
                type="text"
                name="salon_name"
                value={this.state.salon_name}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Address of Salon"
                type="text"
                name="salon_address"
                value={this.state.salon_address}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="City where Salon is"
                type="text"
                name="salon_city"
                value={this.state.salon_city}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="State where Salon is"
                type="text"
                name="salon_state"
                value={this.state.salon_state}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Zip code of the Salon"
                type="text"
                name="salon_zip"
                value={this.state.salon_zip}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="1234567890"
                type="text"
                name="salon_phone_number"
                value={this.state.salon_phone_number}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <textarea
                placeholder="Description of Salon"
                type="text"
                name="salon_description"
                value={this.state.salon_description}
                onChange={this.onChangeHandler}
                required
              />
            </section>
            <br />
            <button
              type="submit"
              className="submit-button"
              onClick={this.editProfile}
            >
              Update
            </button>
          </form>
        </section>
      </div>
    );
	}
}

export default EditSalonProfile;