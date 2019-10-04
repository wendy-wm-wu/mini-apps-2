import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PinSelector from './PinSelector.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return(
      <div>
        <PinSelector />
      </div>
    );
  }
}


ReactDOM.render(<app />, document.getElementById('app'));
