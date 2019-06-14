import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';
import highchartsGauge from "highcharts/modules/solid-gauge";

highchartsGauge(Highcharts);


class GaugeChart extends React.Component {

  state = {

    chart: {
        type: 'solidgauge'
    },

    title: {
	text: "Speed - Gauge Map"
    },

    pane: {
        center: ['50%', '85%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },
    yAxis: {
        min: 0,
        max: this.props.max,
        title: {
            text: this.props.title
        },
        stops: [
            [0.1, '#00BC6F'], // green
            [0.5, '#00BC6F'], // green
            [0.9, '#EB1414'] // red
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

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true,
		enabled: true,
		style: {
		    color: '#F0F0F0'
                }
            }
        }
    },
     series: [{
        name: this.props.title,
        data: this.props.data,
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
        ('#F0F0F0') + '">{y}</span><br/>' +
        '<span style="font-size:12px;color:silver">km/h</span></div>'
        },
        tooltip: {
            valueSuffix: ' km/h'
        }
    }]
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