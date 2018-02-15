import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NumbersCircle from './numberscircle.js';
import './../index.css';

class Question2 extends React.Component {
       render() {
         return (
        	<div>
        	<h1>Which number is missing?</h1>
        	<NumbersCircle />
        	</div>
        );
    }
}

export default Question2;
