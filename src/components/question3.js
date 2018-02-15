import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Svg from './svg.js';
import Table from './table.js';
import './../index.css';

class Question3 extends React.Component {
        render() {
       	return (
        	<div>
        	<h1>What time is it?</h1>
        	<table>
        	<tbody>
        	<tr>
			    <td><Table minutes = "rotate(150 31 34)" hours ="rotate(12 31 34)" /></td>
			    <td><Table minutes = "rotate(300 31 34)" hours ="rotate(24 31 34)" /></td> 
			    <td><Table minutes ="rotate(450 31 34)" hours ="rotate(36 31 34)" /></td>
			    <td><Table minutes ="rotate(600 31 34)" hours ="rotate(48 31 34)" /></td>
			</tr>
			<tr>
			    <td><Table minutes ="rotate(750 31 34)" hours ="rotate(60 31 34)" /></td>
			    <td><Table minutes ="rotate(900 31 34)" hours ="rotate(72 31 34)" /></td> 
			    <td><Table minutes ="rotate(1050 31 34)" hours ="rotate(84 31 34)" /></td>
			     <td>?</td>
			</tr>
			</tbody>
			</table>
        	<div>
        	<Svg  minutes ="rotate(150 65 69)" hours ="rotate(12 65 69)" />
        	<Svg  minutes ="rotate(300 65 69)" hours ="rotate(24 65 69)"/>
        	<Svg  minutes ="rotate(450 65 69)" hours ="rotate(36 65 69)"/>
        	<Svg  minutes ="rotate(600 65 69)" hours ="rotate(48 65 69)"/>
        	</div>
        	</div>
        );
    }
}


export default Question3;