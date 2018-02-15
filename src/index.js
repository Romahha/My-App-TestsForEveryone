import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/footer.js';
import Test from './components/test.js';
import Header from './components/header.js';


class Game extends React.Component {
  render() {
    return (
      <div className="game">
          <Header />
          <Test />
          <Footer />
      
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
