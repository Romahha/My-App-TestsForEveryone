import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

class Header extends React.Component {
  render() {
    return (
      <ul className="topnav">
		  <li><a href="#home" className={this.props.isActive ? "active" : null}>Home</a></li>
		  <li><a href="#tests" className={this.props.isActive ? "active" : null}>Tests</a></li>
	  </ul>
    );
  }
}

export default Header;