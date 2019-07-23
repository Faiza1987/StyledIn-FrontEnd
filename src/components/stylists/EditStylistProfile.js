import React, { Component } from 'react';
import axios from 'axios';

class EditStylistProfile extends Component {
	constructor(props){
		super(props);

		this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      years_experience: "",
      licenses: null,
      photo1: null,
      photo2: null,
      photo3: null,
      photo4: null,
      photo5: null,
      photo6: null,
      specializations: ""
    };
	}


	onChangeHandler = event => {
		const newState = {};
		newState[event.target.name] = event.target.value;

		this.setState(newState);
	};

	onFileChangeHandler = event => {
		this.setState({
      licenses: event.target.files[0],
      photo1: event.target.files[0],
			photo2: event.target.files[0],
			photo3: event.target.files[0],
			photo4: event.target.files[0],
			photo5: event.target.files[0],
			photo6: event.target.files[0]
    });
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      years_experience: "",
      licenses: "",
      photo1: "",
      photo2: "",
      photo3: "",
      photo4: "",
      photo5: "",
      photo6: "",
      specializations: "",
      error: null
    });
	}

	editProfile = () => {
    const updatedStylistData = {
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      profile: {
        phone_number: this.state.phone_number,
        years_experience: this.state.years_experience
      }
    };
    if (this.state.licenses !== null) {
      updatedStylistData.profile.licenses = this.state.licenses;
    }
    if (this.state.photo1 !== null) {
      updatedStylistData.profile.photo1 = this.state.photo1;
    }
    if (this.state.photo2 !== null) {
      updatedStylistData.profile.photo2 = this.state.photo2;
    }
    if (this.state.photo3 !== null) {
      updatedStylistData.profile.photo3 = this.state.photo3;
    }
    if (this.state.photo4 !== null) {
      updatedStylistData.profile.photo4 = this.state.photo4;
    }
    if (this.state.photo5 !== null) {
      updatedStylistData.profile.photo5 = this.state.photo5;
    }
    if (this.state.photo6 !== null) {
      updatedStylistData.profile.photo6 = this.state.photo6;
    }
		updatedStylistData.profile.specializations = this.state.specializations;
		
		axios.put(
      "https://styledin-stylists-api.herokuapp.com/api/users/" + localStorage.getItem("stylistId") + "/",
      updatedStylistData,
      {
				headers: {
					Authorization: `JWT ${localStorage.getItem("token")}`
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
            className="EditStylistProfileForm_form"
            onSubmit={this.handleSubmit}
          >
            <section className="user_inputs">
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
                placeholder="Phone Number (1234567890)"
                type="text"
                name="phone_number"
                value={this.state.phone_number}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Email"
                type="email"
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
                placeholder="Experience (In Years)"
                type="text"
                name="years_experience"
                value={this.state.years_experience}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <section className="files">
                <label className="label-font">
                  licenses or Certifications:
                </label>
                <input
                  type="file"
                  name="licenses"
                  id="license"
                  accept="license/pdf"
                  onChange={this.onFileChangeHandler}
                />
                <br />
                <label className="label-font">Photo 1:</label>
                <input
                  type="file"
                  name="photo1"
                  id="photo1"
                  accept="photo1/png, photo1/jpeg, photo1/jpg"
                  onChange={this.onFileChangeHandler}
                />
                <br />
                <label className="label-font">Photo 2:</label>
                <input
                  type="file"
                  name="photo2"
                  id="photo2"
                  accept="photo2/png, photo2/jpeg, photo2/jpg"
                  onChange={this.onFileChangeHandler}
                />
                <br />
                <label className="label-font">Photo 3:</label>
                <input
                  type="file"
                  name="photo3"
                  id="photo3"
                  accept="photo3/png, photo3/jpeg, photo3/jpg"
                  onChange={this.onFileChangeHandler}
                />
                <br />
                <label className="label-font">Photo 4:</label>
                <input
                  type="file"
                  name="photo4"
                  id="photo4"
                  accept="photo4/png, photo4/jpeg, photo4/jpg"
                  onChange={this.onFileChangeHandler}
                />
                <br />
                <label className="label-font">Photo 5:</label>
                <input
                  type="file"
                  name="photo5"
                  id="photo5"
                  accept="photo5/png, photo5/jpeg, photo5/jpg"
                  onChange={this.onFileChangeHandler}
                />
                <br />
                <label className="label-font">Photo 6:</label>
                <input
                  type="file"
                  name="photo6"
                  id="photo6"
                  accept="photo6/png, photo6/jpeg, photo6/jpg"
                  onChange={this.onFileChangeHandler}
                />
                <br />
              </section>
              <textarea
                placeholder="Specializations"
                type="text"
                name="specializations"
                value={this.state.specializations}
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

export default EditStylistProfile;