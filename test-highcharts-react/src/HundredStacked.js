import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';




class HundredStacked extends React.Component {

  state = {
    chart: {
        type: 'column'
    },
    title: {
        text: this.props.title
    },
    xAxis: {
        categories: this.props.categories,
	crosshair: true,
	labels: {
            style: {
                color: '#F0F0F0'
            }
        },
	lineColor: '#89939B',  
	lineWidth: 1       

    },
    yAxis: {
        min: 0,
	 gridLineColor: '#89939B', 
	 labels: {
            style: {
                color: '#F0F0F0'
            }
         },
	 lineColor: '#89939B',
	 lineWidth: 1,
        title: {
	    text: 'Total Fruit Consumption',
	    style: {"color": '#F0F0F0'}
         }

    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: this.props.data
  }

  render() {
    return(
        <div>
    <HighchartsReact highcharts={Highcharts} options={this.state} />
  </div>
      );
  }
}
HundredStacked.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    categories: PropTypes.array,
    
  };
export default HundredStacked;

