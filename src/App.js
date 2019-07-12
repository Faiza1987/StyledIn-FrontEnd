import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allStylists: [],
      stylistId: null,
      allSalonOwners: [],
      salonOwnerId: null,
    }
  }
  render(){
    return(
      <div>
        <Router>
          <div className="navbar">
            <ul>
              <li className="logo"> 
                <Link to='/'> StyledIn </Link>
            </li>
              <li className="signup">
                <Link to='/signup'> Sign Up </Link>
              </li>
              <li className="login">
                <Link to='/login'> Log In </Link>
              </li>
            </ul>
          </div>
          <Route path="/" exact component={Title} />
          <Route path="/" exact component={Wallpaper} />
    
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

function Wallpaper() {
  return(
    <section>
      <div className="image">
        <img src={"https://image.freepik.com/free-photo/background-hairdresser-pr-salon-hair_1303-1315.jpg"} alt="hair salon wallpaper"/>
      </div>
    </section>
  )
}
export default App;
