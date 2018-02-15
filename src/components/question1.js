import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import IceCream from './icecream.js';
import './../index.css';

class Question1 extends React.Component {
       render() {
         return (
        	<div>
        	<h1>Which picture is superfluous?</h1>
        	<IceCream firstIng="#8E5E47" secondIng="#FDFF87" />
        	<IceCream  firstIng="#FE7E8D" secondIng="#FDFF87" />
        	<IceCream  firstIng="#FE7E8D" secondIng="#FCE3C8"/>
        	<IceCream  firstIng="#8E5E47" secondIng="#FE7E8D"/>
        	</div>
        );

    }
}

export default Question1;
