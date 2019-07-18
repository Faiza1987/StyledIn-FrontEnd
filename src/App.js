import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUpQuery from './components/SignUpQuery';
import StylistRegistrationForm from './components/stylists/StylistRegistrationForm';
import SalonOwnerRegistrationForm from './components/salonowner/SalonOwnerRegistrationForm';
import LogInQuery from './components/LogInQuery';
import StylistLogIn from './components/stylists/StylistLogIn';
import StylistLoginSuccess from './components/stylists/StylistLoginSuccess';
import SearchJobs from './components/stylists/SearchJobs';
import StylistProfile from './components/stylists/StylistProfile';
import SalonOwnerLogin from './components/salonowner/SalonOwnerLogin';
import SalonOwnerLoginSuccess from './components/salonowner/SalonOwnerLoginSuccess';
import SalonProfile from './components/salonowner/SalonProfile';
import CreateJob from './components/salonowner/CreateJob';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stylistId: null,
      salonOwnerId: null,

    }
  }

  componentDidMount() {
    this.setState({
      stylistId: localStorage.getItem('stylistId')
    })
  }
  setStylistId = (id) => {
    this.setState({
      stylistId: id
    })
  }


  render(){
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
              <StylistLogIn
                toggleLoginButtonCallback={this.toggleLoginButton}
                setStylistIdCallback={this.setStylistId}
              />
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
          <Route path="/search-jobs" component={SearchJobs} />
          <Route
            path="/login-salonowner"
            render={props => (
              <SalonOwnerLogin
                toggleLoginButtonCallback={this.toggleLoginButton}
              />
            )}
          />
          <Route path="/salonowner-login-success" component={SalonOwnerLoginSuccess} />
          <Route path="/salon-profile" component={SalonProfile} />
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
