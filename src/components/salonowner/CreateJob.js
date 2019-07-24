import React, {Component} from 'react';
import axios from 'axios';


class CreateJob extends Component {
	constructor(props){
		super(props);

		this.state = {
			title: "",
			hourly_rate: "",
			company: "",
			address: "",
			city: "",
			state: "",
			zip_code: "",
			description: "",
			contact_email: ""
		}
  }
  
  onChangeHandler = event => {
    const newState = {};
    newState[event.target.name] = event.target.value;

    this.setState(newState);
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      title: "",
			hourly_rate: "",
			company: "",
			address: "",
			city: "",
			state: "",
			zip_code: "",
			description: "",
			contact_email: ""
    }); 
  };

  createJob = () => {
    const payload = {
      title: this.state.title,
      hourly_rate: this.state.hourly_rate,
      company: this.state.company,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip_code: this.state.zip_code,
      description: this.state.description,
      contact_email: this.state.contact_email
    };

    // Make a POST request to post job to API
    // WILL NEED: Id of the salon that the job will be attached to
    axios
      .post(
        "https://salonowners-api.herokuapp.com/jobs_api/jobs/",
        payload,
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("salonOwnerToken")}`
          }
        }
      )
      .then(response => {
        console.log(
          "This is what response.data looks like from the API on a successful response",
          response.data
        );

        alert('The job has been created!');
      })
      .catch(error => {
        alert("Something went wrong, please try again shortly.");
        this.setState({
          error: error.message
        });
      });
  };

	render(){
		return (
      <div>
        <h3> Enter Job Details: </h3>
        <section className="container">
          <form className="CreateJobForm_form" onSubmit={this.handleSubmit}>
            <section className="user-inputs">
              <input
                placeholder="Job Title"
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Hourly Rate"
                type="text"
                name="hourly_rate"
                value={this.state.hourly_rate}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Name of Salon"
                type="text"
                name="company"
                value={this.state.company}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Address"
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="City"
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="State"
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <input
                placeholder="Zip Code"
                type="text"
                name="zip_code"
                value={this.state.zip_code}
                onChange={this.onChangeHandler}
                required
              />
              <br />
              <textarea
                placeholder="Description"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.onChangeHandler}
                required
              ></textarea>
              <br />
              <input
                placeholder="Contact Email"
                type="email"
                name="contact_email"
                value={this.state.contact_email}
                onChange={this.onChangeHandler}
                required
              />
            </section>
            <button
              type="submit"
              className="submit-button"
              onClick={this.createJob}
            >
              {" "}
              Create{" "}
            </button>
          </form>
        </section>
      </div>
    );
	}
}

export default CreateJob;