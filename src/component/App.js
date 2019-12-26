import React, {Component} from 'react';
import Grid from './Grid';
import Home from './home/Home';
import '../style/style.css';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render(){
    return (
      <Router>
      <div className="header">
        <div className="container warna">
          <nav className="navbar navbar-expand-lg navbar-light warna">
            <Link className="navbar-brand" to="/"> <img className="logo" src={require('../logo/logo.PNG')} alt="logo" /> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="toggle-navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expadnded="false">
                    Promo
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="#">Promo</Link>
                    <Link className="dropdown-item" to="#">Partnership</Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-extended="false">
                    Paket & Add-On
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="#">Action</Link>
                    <Link className="dropdown-item" to="#">Another Action</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Something Else Here</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Pusat Bantuan</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="">
            <Home/>
          </div>
        </div>

      </div>
      </Router>
    )
  }
}

export default App;
