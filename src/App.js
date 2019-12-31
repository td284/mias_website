import React from 'react';
import './App.css';
import Logo from "./duck.jpg"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home.js"
import Albums from "./Albums.js"
import Album from "./Album.js"
import Image from "./Image.js"



function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Smiley face" height="42" width="42" />
      <ul className="navbar-menu">
        <NavbarItem value="Home" toPath="/home" />
        <NavbarItem value="Albums" toPath="/albums" />
      </ul>
    </div>
  )
}

function NavbarItem(props) {
  return (
    <li className="navbar-item"><Link to={props.toPath}>{props.value}</Link></li>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/albums/:albumID" component={Album} />
          <Route exact path="/images/:imageID" component={Image} />
        </Switch>
      </Router>

    </div>
  );
}




export default App;
