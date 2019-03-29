
import React from 'react'

class BarChart extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    
  };
 
  
barchart = Highcharts.chart('barchartid', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of Employees by Company'
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
});

  
  render() {
    return (
      <div id="barchartid"></div>
    )
  }
}

export default BarChart

