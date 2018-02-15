import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

class Table extends React.Component {
       render() {
        return (
        <div>
        <svg width="63" height="63">
			 <g>
			  <title>Layer 1</title>
			  <g stroke="null" id="svg_1">
			   <path stroke="null" d="m31.39526,7.40871c-14.64521,0 -26.55896,11.69078 -26.55896,26.0619c0,5.31057 1.63036,10.25237 4.42099,14.3761l-4.56503,8.93026c-0.8857,1.73216 -0.1726,3.8401 1.59261,4.70812c0.51478,0.25359 1.0613,0.37393 1.59974,0.37393c1.30958,0 2.57221,-0.7086 3.19836,-1.93655l3.30147,-6.45724c4.61105,3.78389 10.54388,6.06636 17.01196,6.06636c6.1351,0 11.78604,-2.05689 16.28778,-5.498l3.01036,5.88888c0.62615,1.22794 1.88878,1.93655 3.19836,1.93655c0.53826,0 1.08478,-0.12034 1.59974,-0.37393c1.7652,-0.86802 2.47812,-2.97706 1.59242,-4.70812l-4.14021,-8.09818c3.14821,-4.28314 5.01051,-9.53455 5.01051,-15.208c-0.00132,-14.37131 -11.91487,-26.06208 -26.56008,-26.06208l0,0zm0,45.10704c-10.7022,0 -19.40838,-8.54325 -19.40838,-19.04515s8.70618,-19.04533 19.40838,-19.04533s19.40838,8.54325 19.40838,19.04515s-8.70618,19.04533 -19.40838,19.04533z" fill="#010002" id="svg_2"/>
			   <path stroke="null" d="m18.33326,6.36027c-4.02264,-3.94736 -10.54388,-3.94736 -14.56652,0s-4.02264,10.34654 0,14.29391l14.56652,-14.29391z" fill="#010002" id="svg_4"/>
			   <path stroke="null" d="m59.24126,6.36027c-4.02264,-3.94736 -10.54388,-3.94736 -14.56652,0l14.56652,14.29391c4.02264,-3.94736 4.02264,-10.34765 0,-14.29391z" fill="#010002" id="svg_5"/>
			   <ellipse stroke="null" fill="#010002" strokeWidth="null" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="31" cy="34" id="svg_21" rx="2" ry="2"/>
			   <ellipse  transform = {this.props.hours} stroke="null" fill="#010002" strokeWidth="null" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="38" cy="34" id="svg_23" rx="6" ry="1.5"/>
			   <ellipse  transform = {this.props.minutes} stroke="null" fill="#010002" strokeWidth="null" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="31" cy="25.65016" id="svg_24" rx="1" ry="9"/>
			   <ellipse stroke="null" fill="#010002" strokeWidth="null" strokeDasharray="null" strokeLinejoin="null" strokeLinecap="null" cx="30.90379" cy="28.69467" id="svg_25"/>
			  </g>
			 </g>
			</svg>
			</div>
			 );

    }
}

export default Table;
