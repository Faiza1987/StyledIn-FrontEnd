import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUpQuery from './components/SignUpQuery';
import StylistRegistrationForm from './components/StylistRegistrationForm';
import SalonOwnerRegistrationForm from './components/SalonOwnerRegistrationForm';
import LogInQuery from './components/LogInQuery';
import StylistLogIn from './components/StylistLogIn';
import LoginSuccess from './components/LoginSuccess';
import SearchJobs from './components/SearchJobs';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allStylists: [],
      stylistId: null,
      allSalonOwners: [],
      salonOwnerId: null,
      isLoggedIn: false,
    }
  }

  showLogout = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
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
                  {" "}
                  {this.state.isLoggedIn === false ? "Log In" : "Log Out"}
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
          <Route path="/login-stylist" component={StylistLogIn}/>
          <Route path="/stylist-profile" component={LoginSuccess} />
          <Route path="/search-jobs" component={SearchJobs} />
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
