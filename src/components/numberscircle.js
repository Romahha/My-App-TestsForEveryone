import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

class NumbersCircle extends React.Component {
       render() {
       let x, y, z, k, pointX, pointY;
	   x = Math.floor(Math.random() * 3)+ 1; 
	   y = Math.floor(Math.random() * 3)+ 4; 
	   z = Math.floor(Math.random() * 3)+ 7; 
	   k = Math.floor(Math.random() * 8)+ 2;
	   if(x*k>9 && y*k>9){ pointX=35; pointY=130;}
	   else if(y*k>9 && x*k<=9){ pointX=45; pointY=130; }
	   else if(y*k<=9 && x*k>9){ pointX=45; pointY=120; }
	   else { pointX=45; pointY=120;}
        return (
        <div className="container">
		 <svg className="svg">
		 <g>
		  <title>Layer 1</title>
		  <ellipse stroke="#aa93bf" fillOpacity="0" ry="84" rx="85" id="svg_1" cy="99" cx="100" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="5" fill="#000000"/>
		  <text className="numbers" x="135" y="130" fill="#aa93bf">{x}</text>
		  <text className="numbers" x={pointX} y="85" fill="#aa93bf">{x*k}</text>
		  <text className="numbers" x="45" y="130" fill="#aa93bf">{y}</text>
		  <text className="numbers" x={pointY} y="85" fill="#aa93bf">{y*k}</text>
		  <text className="numbers" x="92" y="155" fill="#aa93bf">{z}</text>
		  <text className="numbers" x="92" y="70" fill="#aa93bf">?</text>
		  <line stroke="#aa93bf" id="svg_3" y2="167" x2="147" y1="30" x1="48" fillOpacity="0" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="5" fill="none"/>
		  <line stroke="#aa93bf" id="svg_6" y2="167" x2="48" y1="30" x1="147" fillOpacity="0" strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth="5" fill="none"/>
		  <line id="svg_7" y2="98" x2="185" y1="98" x1="15" fillOpacity="0" strokeLinecap="null" strokeLinejoin="null" strokeasharray="null" strokeWidth="5" stroke="#aa93bf" fill="none"/>
		 </g>
		</svg>
		<div>
		 <div className="brn-answer">{z*k-1}</div>
		 <div className="brn-answer">{z*k}</div>
		 <div className="brn-answer">{z*k+1}</div>
		 <div className="brn-answer">{z*k+2}</div>
		 </div>
	    </div>
        );

    }
}

export default NumbersCircle;









					  

