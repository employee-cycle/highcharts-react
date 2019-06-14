import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';
import highchartsHistogram from "highcharts/modules/histogram-bellcurve";

highchartsHistogram(Highcharts);




class Histogram extends React.Component {

  state = {
    title: {
        text: this.props.title
    },
    xAxis: [{
        title: { text: 'Salary Bins',
		 style: {"color": "#F0F0F0"}
	       },
        alignTicks: false,
        crosshair: true,
	labels: {
            style: {
                color: '#F0F0F0'
            }
        },
	lineColor: '#89939B',  
	lineWidth: 1       

    }],

    yAxis: [{
        title: {
	    text: 'Frequency',
	    style: {"color": '#F0F0F0'}
	},
	 min: 0,
	 gridLineColor: '#89939B', 
	 labels: {
            style: {
                color: '#F0F0F0'
            }
         },
	 lineColor: '#89939B',
	 lineWidth: 1

    }],
    legend: {
        enabled: false
    },
    series: [{
        name: 'Histogram',
        type: 'histogram',
        data: this.props.data,
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
Histogram.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    
  };
export default Histogram;



