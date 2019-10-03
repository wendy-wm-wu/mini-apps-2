import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=BTC&start=2013-09-01&end=2013-09-05`)
    .then(function(response) {
      console.log(response.data.bpi);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        Powered by CoinDesk
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

