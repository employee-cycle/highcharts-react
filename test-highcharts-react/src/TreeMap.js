import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';
import highchartsTree from "highcharts/modules/treemap";

highchartsTree(Highcharts);

class TreeMap extends React.Component {

  state = {
    colorAxis: {
	minColor: Highcharts.getOptions().colors[0], //'#FFFFFF',
        maxColor: '#282828' //Highcharts.getOptions().colors[3]
    },
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: this.props.data,
	dataLabels: {
            //enabled: true,
	    style: {
		textOutline: false
	    }
        }
    }],

    title: {
        text: this.props.title
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
TreeMap.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    
  };
export default TreeMap;