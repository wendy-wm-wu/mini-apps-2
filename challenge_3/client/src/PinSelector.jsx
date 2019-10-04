import React, { Component } from 'react';

class PinSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: '',
    }
  }
  render() {
    return (
      <div>
        <label for="pin-number">Choose number of pins</label>
        <select name="pins" id="pin-number">
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option>
          <option value="six">6</option>
          <option value="seven">7</option>
          <option value="eight">8</option>
          <option value="nine">9</option>
          <option value="ten">10</option>
        </select>
      </div>
    );
  }
}

export default PinSelector;
