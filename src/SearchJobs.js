import React, { Component } from 'react';
import axios from 'axios';
import './SearchJobs.css';


class SearchJobs extends Component {
	constructor(props){
		super(props);

		this.state = {
			allJobs: null,
			error: null,
		}
	}

	componentDidMount(){
		axios.get(
			"https://salonowners-api.herokuapp.com/jobs_api/jobs/"
    )
          .then(response => {
            console.log("ALL JOBS", response.data);

            this.setState({
              allJobs: response.data
            });
          })
          .catch(error => {
            this.setState({
              error: error.message
            });
          });
	}

  applyJob = () => {
    if(localStorage.getItem("stylistId") !== null){
      alert("Your application has been submitted!");
    } else {
      alert("You must be logged in as a stylist to apply for jobs");
    }
    const payload = {
      stylistId: localStorage.getItem("stylistId"),
      title: this.state.allJobs[0].title,
      hourly_rate: this.state.allJobs[0].hourly_rate,
      company: this.state.allJobs[0].company,
      address: this.state.allJobs[0].address,
      city: this.state.allJobs[0].city,
      state: this.state.allJobs[0].state,
      zip_code: this.state.allJobs[0].zip_code,
      description: this.state.allJobs[0].description,
      contact_email: this.state.allJobs[0].contact_email
    };
    axios
      .post(
        "https://styledin-stylists-api.herokuapp.com/jobs_api/applied_jobs/",
        payload,
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("token")}`
          }
        }
      )
      .then(response => {})
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }
	render(){

		if(this.state.allJobs === null){
			return null;
		}

		const mappedJobs = this.state.allJobs.map((job, i) => {
			return (
        <div key={i} className="job-details">
          <ul>
            <li>
              <span className="label">Title: </span> {job.title}
            </li>
            <li>
              <span className="label">Hourly Rate:</span>
              {job.hourly_rate}
            </li>
            <li>
              <span className="label">Salon:</span> {job.company}
            </li>
            <li>
              <span className="label">City:</span> {job.city}
            </li>
            <li>
              <span className="label">State:</span> {job.state}
            </li>
            <li>
              <span className="label">Contact:</span>
              <a href={`mailto:${job.contact_email}`}>
                Jobs at {job.company}
              </a>
            </li>
            <br/>
            <li>
              <button
                type="submit"
                className="apply" 
                onClick={this.applyJob} 
              > 
                Apply
              </button>
            </li>
          </ul>
          <hr />
        </div>
      );
		})

		return (
      <div>
        <h3> All Jobs: </h3>
        <summary>
					{mappedJobs}
        </summary>
      </div>
    );
	}
}

export default SearchJobs;