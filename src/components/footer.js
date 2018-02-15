import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
 		<img alt="white-logo" className="logo" />
 		<address >
 			Olga Solomakha <br/>
 			Dublin 4, Ireland<br/>
 			TEL: +3 &nbsp &nbsp <a href="mailto:osromanenkoo@gmail.com">Email: osromanenkoo@gmail.com</a>
 		</address>
 	 </footer>
    );
  }
}

export default Footer;

