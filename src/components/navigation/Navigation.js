import React, { Component } from 'react';
import {Link} from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div className='navbar navbar-default navbar-fixed-top'>
        <div className="container">
          <ul className="nav navbar-nav">            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servers">Servers</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
