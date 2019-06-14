import React from 'react';
import { PropTypes } from "prop-types";
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';

class LineChart extends React.Component {

  state = {

  title: {
    text: this.props.title
  },
  series: this.props.data
    
  
};

  render() {
    return(
  <div>
    <HighchartsReact highcharts={Highcharts} options={this.state} />
  </div>
);
}
}

LineChart.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    
  };
export default LineChart;