import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';
//import highchartsExporting from 'highcharts-exporting';
//import highchartsMore from 'highcharts-more';
import HC_more from 'highcharts/highcharts-more.src' //module
//import HC_Exporting from 'highcharts/highcharts-exporting.src' //module
//HC_Exporting(Highcharts) //init module
import highchartsGauge from "highcharts/modules/solid-gauge";

HC_more(Highcharts) //init module

highchartsGauge(Highcharts);
//highchartsExporting(Highcharts);
//highchartsMore(Highcharts);


class GaugeChart extends React.Component {

  state = {

    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
         min: 0,
        max: this.props.max,
        title: {
            text: this.props.title
        },
        stops: [
            [4.9, '#7ED321'], // green
            [3, '#DDDF0D'], // yellow
            [1, '#EB1414'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -70
        },
        labels: {
            y: 16
        }
    },

    series: [{
        name: null,
        data: this.props.data,
        dataLabels: {
            format:
                '<div style="text-align:center">' +
                '<span style="font-size:25px; color:white">{y}</span><br/>' +
                '</div>'
        }
    }],
    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};



 render() {
    return(
        <div>
    <HighchartsReact highcharts={Highcharts} options={this.state} />
  </div>
      );
  }
}
GaugeChart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    max: PropTypes.number,
    
  };
export default GaugeChart;