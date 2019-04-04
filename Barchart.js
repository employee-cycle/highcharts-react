import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";


class BarChart extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    
  };


 const barChart = {
    chart: {
        type: 'column'
    },
    title: {
    text: "Employees by Company"
  },
   data: {
csvURL: {this.props.data}
},
 plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    }
  
};

    render() {
    return (
     <Chart options={barChart} highcharts={Highcharts} />
    )
  }
}

export default BarChart

