import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';




class PieChart extends React.Component {

  state = {
    chart: {
        type: 'pie'
    },
    title: {
        text: this.props.title,
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },

    series: [{
        name: 'Data',
        data: this.props.data
    }]
}


 render() {
    return(
        <div>
    <HighchartsReact highcharts={Highcharts} options={this.state} />
  </div>
      );
  }
}

PieChart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    
  };
export default PieChart;