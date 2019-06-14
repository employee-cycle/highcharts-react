import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsFunnel from "highcharts/modules/funnel";
import ReactDOM from 'react-dom';
import './index.css';

highchartsFunnel(Highcharts);


class FunnelChart extends React.Component {

  state = {

    chart: {
        type: 'funnel'
    },
    title: {
        text: this.props.title
    },
    legend: {
        enabled: false
    },

    series: [{
        name: 'Unique users',
        data: this.props.data,
	dataLabels: {
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                softConnector: true,
		style: {
		    color: '#F0F0F0'
                },
        },
        center: ['40%', '50%'],
        neckWidth: '30%',
	neckHeight: '25%',
        width: '80%'
    
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                plotOptions: {
                    series: {
                        dataLabels: {
                            inside: true
                        },
                        center: ['50%', '50%'],
                        width: '100%'
                    }
                }
            }
        }]
    }
}


 render() {
    return(
        <div>
    <HighchartsReact highcharts={Highcharts} options={this.state} />
  </div>
      );
  }
}
FunnelChart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    
  };
export default FunnelChart;