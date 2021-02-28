import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render(){
    return (
      <div>
        <ul>
          <li><Link to={"/"}>JobList</Link></li>
          <li><Link to={"/create"}>JobCreate</Link></li>
        </ul>

      </div>
    );
  }
};

export default Header;
