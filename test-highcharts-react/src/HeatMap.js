import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';
import highchartsHeatMap from "highcharts/modules/heatmap";

highchartsHeatMap(Highcharts);

class HeatMap extends React.Component {

  state = {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },

    title: {
        text: this.props.title
    },

    xAxis: {
        categories: this.props.xcat,
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
        categories: this.props.ycat,
        title: null,
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

    colorAxis: {
        min: 0,
        minColor: Highcharts.getOptions().colors[0], //'#FFFFFF',
        maxColor: '#282828' //Highcharts.getOptions().colors[3]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280,
	itemStyle: {
            font: '12pt',
	    fontFamily : 'open sans',
	    fontWeight: 'bold',
            color: '#F0F0F0'
        },
    },

    tooltip: {
        formatter: function () {
            return '<b>' +
		this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                this.point.value + '</b> items on <br><b>' +
		this.series.yAxis.categories[this.point.y] + '</b>';
        }
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: this.props.data,
        dataLabels: {
            enabled: true,
	    style: {
		textOutline: false
	    }
        }
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
HeatMap.propTypes = {
    xcat: PropTypes.array,
    ycat: PropTypes.array,
    data: PropTypes.array,
    title: PropTypes.string,
    
  };
export default HeatMap;

