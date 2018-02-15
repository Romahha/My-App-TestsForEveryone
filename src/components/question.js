import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Svg from './svg.js';
import './../index.css';

class Question1 extends React.Component {
       render() {
         return (
        	<div>
        	<h1>Which picture is superfluous?</h1>
        	<Svg firstIng="#8E5E47" secondIng="#FDFF87" />
        	<Svg firstIng="#FE7E8D" secondIng="#FDFF87" />
        	<Svg firstIng="#FE7E8D" secondIng="#FCE3C8"/>
        	<Svg firstIng="#8E5E47" secondIng="#FE7E8D"/>
        	</div>
        );

    }
}

export default Question1;
