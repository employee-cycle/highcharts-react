import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";


class BarChart extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    
  };


 barChart = {
    chart: {
        type: 'column'
    },
    title: {
    text: "Employees by Company"
  },
series: [{
  data: []
}],
 plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    }
  
};

var arr = new Array(names.length);
      for (i = 0; i < name.length; i++) {
        arr[i] = [names[i], count[i]];
      }
      options.series[0].data = arr;





    render() {
    return (
        <HighchartsReact
    highcharts={Highcharts}
    options={barChart}
  />
    )
  }
}

export default BarChart

