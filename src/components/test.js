import React from 'react';
import ReactDOM from 'react-dom';
import Question1 from './question1.js';
import Question2 from './question2.js';
import Question3 from './question3.js';
import './../index.css';

class Test extends React.Component {
  render() {
    return (
      <ul className="test">
		  <li style={{ zIndex: 10 }}><Question1 /></li>
		  <li style={{ zIndex: 9 }}><Question2 /></li>
		  <li className="top hidden" style={{ zIndex: 8 }}><Question3 /></li>
	  </ul>
    );
  }
}

export default Test;