import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Chart from 'chart.js';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
    this.fetchData = this.fetchData.bind(this);
    this.makeChart = this.makeChart.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/data')
      .then((response) => {
        this.setState({
          data: response.data,
        });
        this.makeChart();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  makeChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    ctx.canvas.width = 1000;
    ctx.canvas.height = 300;

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randomBar(date, lastClose) {
      const open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
      const close = randomNumber(open * 0.95, open * 1.05).toFixed(2);
      return {
        t: date.valueOf(),
        y: close,
      };
    }

    const dateFormat = 'MMMM DD YYYY';
    let values = Object.values(this.state.data);
    let keys = Object.keys(this.state.data);

    const { color } = Chart.helpers;

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: keys,
        datasets: [{
          label: 'price data',
          data: values,
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2,
        }],
      },
      options: {
        scales: {
          yAxes: [{
            type: 'time',
            distribution: 'series',
            ticks: {
              source: 'data',
              autoSkip: true,
            },
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Closing price ($)',
              stacked: true,
            },
          }],
        },
        tooltips: {
          intersect: false,
          mode: 'index',
          callbacks: {
            label(tooltipItem, myData) {
              let label = myData.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label += ': ';
              }
              label += parseFloat(tooltipItem.value).toFixed(2);
              return label;
            },
          },
        },
      },
    });
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
