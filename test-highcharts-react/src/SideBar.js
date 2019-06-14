import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';




class SideBar extends React.Component {

  state = {
    chart: {
        type: 'column'
    },
    title: {
        text: this.props.title
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    },
    xAxis: {
        categories: this.props.categories,
        title: {
            text: null
        },
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
        title: {
            text: 'Population (millions)',
	    style: {"color":'#F0F0F0'}
        },
	min: 0,
	 gridLineColor: '#89939B', 
	 labels: {
            style: {
                color: '#F0F0F0'
            }
         },
	 lineColor: '#89939B',
	 lineWidth: 1,

    },
    tooltip: {
        valueSuffix: ' millions'
    },
    series: this.props.series
 }


  render() {
    return(
        <div>
    <HighchartsReact highcharts={Highcharts} options={this.state} />
  </div>
      );
  }
}
SideBar.propTypes = {
    series: PropTypes.array,
    title: PropTypes.string,
    categories: PropTypes.array,
    
  };
export default SideBar;