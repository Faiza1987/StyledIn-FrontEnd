import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUpQuery from './SignUpQuery';
import StylistRegistrationForm from './components/stylists/StylistRegistrationForm';
import SalonOwnerRegistrationForm from './components/salonowner/SalonOwnerRegistrationForm';
import LogInQuery from './LogInQuery';
import StylistLogIn from './components/stylists/StylistLogIn';
import StylistLoginSuccess from './components/stylists/StylistLoginSuccess';
import SearchJobs from './SearchJobs';
import StylistProfile from './components/stylists/StylistProfile';
import SalonOwnerLogin from './components/salonowner/SalonOwnerLogin';
import SalonOwnerLoginSuccess from './components/salonowner/SalonOwnerLoginSuccess';
import SalonProfile from './components/salonowner/SalonProfile';
import CreateJob from './components/salonowner/CreateJob';
import EditStylistProfile from './components/stylists/EditStylistProfile';
import EditSalonProfile from './components/salonowner/EditSalonProfile';
import AllStylists from './AllStylists';
import AllSalonOwners from './AllSalonOwners';
import QueryPage from './QueryPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stylistId: null,
      salonId: null
    };
  }

  // THIS FUNCTION GETS THE ID FROM THE CALLBACK FUNCTION IN STYLIST LOGIN COMPONENT
  setStylistId = id => {
    this.setState({
      stylistId: id
    });
  };
  // THIS FUNCTION GETS THE ID FROM THE CALLBACK FUNCTION IN SALON OWNER LOGIN COMPONENT
  setSalonId = id => {
    this.setState({
      salonId: id
    });
  };

  // TO SET STYLIST ID SO THE STYLIST LOG IN PERSISTS DURING PAGE REFRESH
  componentDidMount() {
    this.setState({
      stylistId: localStorage.getItem("stylistId"),
      salonId: localStorage.getItem("salonId"),
    });
  }



  render() {
    return (
      <div>
        <Router>
          <div className="navbar">
            <ul>
              <li className="logo">
                <Link to="/"> StyledIn </Link>
              </li>
              <li className="signup">
                <Link to="/signup-query"> Sign Up </Link>
              </li>
              <li className="login">
                <Link to="/login-query">
                  {this.state.stylistId === null ? "Log In" : "Log Out"}
                </Link>
              </li>
              <li className="all-stylists">
                <Link to="/all-stylists"> All Stylists </Link>
              </li>
              <li className="all-salons">
                <Link to="/all-salons"> All Salons </Link>
              </li>
              <li className="all-jobs">
                <Link to="/search-jobs"> All Jobs </Link>
              </li>
            </ul>
          </div>
          <Route path="/" exact component={Title} />
          <Route path="/" component={Footer} />
          <Route path="/signup-query" component={SignUpQuery} />
          <Route
            path="/register-stylist"
            component={StylistRegistrationForm}
          />
          <Route
            path="/register-salonowner"
            component={SalonOwnerRegistrationForm}
          />
          <Route path="/login-query" component={LogInQuery} />
          <Route
            path="/login-stylist"
            render={props => (
              <StylistLogIn setStylistIdCallback={this.setStylistId} />
            )}
          />
          <Route
            path="/stylist-login-success"
            component={StylistLoginSuccess}
          />
          <Route
            path="/stylist-profile"
            render={props => (
              <StylistProfile stylistId={this.state.stylistId} />
            )}
          />
          <Route
            path="/edit-stylist-profile"
            render={props => (
              <EditStylistProfile stylistId={this.stylistId} />
            )}
          />
          <Route path="/all-stylists" component={AllStylists} />
          <Route path="/all-salons" component={AllSalonOwners}/>
          <Route path="/search-jobs" component={SearchJobs} />
          <Route path="/query" component={QueryPage} />
          <Route
            path="/login-salonowner"
            render={props => (
              <SalonOwnerLogin setSalonIdCallback={this.setSalonId} />
            )}
          />
          <Route path="/salonowner-login-success" component={SalonOwnerLoginSuccess} />
          <Route path="/salon-profile" component={SalonProfile} />
          <Route path="/edit-salon-profile" component={EditSalonProfile} />
          <Route path="/create-job" component={CreateJob} />
        </Router>
      </div>
    );
  }
}

function Title() {
  return (
    <section>
      <div className="title">StyledIn </div>
    </section>
  );
}

function Footer() {
return (
    <section>
      <div className="footer"> 
        <span role="img" aria-label="Copyright"> ©️ </span> Faiza Ahsan 2019 
      </div>
    </section>
  );
}
export default App;
