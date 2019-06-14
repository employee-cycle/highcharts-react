import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';




class BarChart extends React.Component {

  state = {
    chart: {
        type: 'column'
    },
    title: {
    text: this.props.title
  },
series: [{
        name: 'Salary',
        data: this.props.data
    }],
 plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    }
  
}


/*arr = new Array(names.length);
      for (i = 0; i < name.length; i++) {
        arr[i] = [names[i], count[i]];
      }
      options.series[0].data = arr;

const BarChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={barChartOptions} />
  </div>
);*/
  render() {
    return(
        <div>
    <HighchartsReact highcharts={Highcharts} options={this.state} />
  </div>
      );
  }
}
BarChart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    
  };
export default BarChart;