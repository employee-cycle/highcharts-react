import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";

class PieChart extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    
  };

pieChart = {
  title: {
    text: ""
  },
  series: [
    {
      data: [[1, "Highcharts"], [1, "React"], [3, "Highsoft"]],
      keys: ["y", "name"],
      type: "pie"
    }
  ]
};


// Render app with demo chart
    render() {
    return (
    <HighchartsReact
    highcharts={Highcharts}
    options={pieChart}
  />
    )
  }

export default PieChart


 
