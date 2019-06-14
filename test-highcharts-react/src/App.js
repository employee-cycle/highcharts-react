import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import LineChart from './LineChart'
import PieChart from './Pie'
import BarChart from './Barchart'
import SideBar from './SideBar'
import FunnelChart from './FunnelChart'
import HeatMap from './HeatMap'
import HundredStacked from './HundredStacked'
import TreeMap from './TreeMap'
import GaugeChart from './GaugeChart'
import Histogram from './Histogram'
import * as serviceWorker from './serviceWorker';

var classNames = require('classnames');

const middleDivStyle = {
  backgroundColor: '#282828',
  height: '30px'
};

var halfclasses = classNames({
      'col-lg-6': true,
      'col-md-6': true,
      'col-sm-12': true,
      'col-xs-12': true,
    });



Highcharts.theme = {
      colors: ['#0BB7FB',"#7ED321","#F5A623",'#FF62C2','#0D8DD4',"#00BC6F","#FF485E","#EB1414",
		     "#0BB75B","#F0F0F0","#D8D8D8","#89939B","#697B89","#282828"],
    chart: {
        backgroundColor: '#282828',
	marginTop: 100
    },
    title: {
        style: {
            color: '#F0F0F0',

            fontSize: '25px',
	    fontWeight: 'bold',
	    fontFamily : 'Open Sans'
        },
	floating: true,
	align: "center",
	y: 10
    },
    subtitle: {
        style: {
            color: '#89939B', //'#666666',
            fontSize: '18px',
	    fontFamily : 'Open Sans'
          },
	y:50,
	align: "center"
    },

    legend: {
        itemStyle: {
            font: '12pt',
	    fontFamily : 'Open Sans',
            color: '#F0F0F0'
        },
        itemHoverStyle:{
            color: 'gray'
        },
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        floating: false,
        backgroundColor: '#282828'
 
    },
      /*xAxis: {
        //crosshair: true,
	labels: {
            style: {
                color: '#F0F0F0'
            }
        },
	lineColor: '#89939B',  <!-- axis line at origin of plot -->
	lineWidth: 1       <!-- make axis line visible  -->

    },
     yAxis: {
         min: 0,
	 gridLineColor: '#89939B', 
	 labels: {
            style: {
                color: '#F0F0F0'
            }
         },
	 lineColor: '#89939B',
	 lineWidth: 1,
         title: {
	    style: {"color": '#F0F0F0'}
         }

    },*/
    plotOptions: {
        labels : {
	    "color":'#F0F0F0'
	},
	column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
	pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		shape: null,
                style: {
		    color: '#F0F0F0'
                },
                connectorColor: 'silver'
            }
        },
	line: {
            dataLabels: {
                enabled: false  // set this to true to display values on the line plot
            },
            enableMouseTracking: true
        },
	solidguage: {
	    dataLabels: {
                enabled: true,
                style: {
		    color: '#F0F0F0'
                }
	    }
	},
    },
      credits: {
        enabled: false
    },
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);


class App extends React.Component {

    state = {
    bardata: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    bartitle: 'Average Salary by Department',
    linedata: [{
        name: 'IT',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Sales',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'HR',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Marketing',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Management',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
    linetitle: 'Separations Over Time by Department',
    piedata: [
            { name: 'GenX', y: 61.41 },
            { name: 'GenY', y: 11.84 },
            { name: 'Millennials', y: 10.85 },
            { name: 'iGen', y: 4.67 },
            
        ],
    pietitle: 'Employees by Generation',
    sidebarcategories: ['IT', 'Sales', 'HR', 'Marketing', 'Management'],
    sidebartitle: 'Count of Gender by Department',
    sidebarseries: [{
        name: 'Male',
        data: [107, 31, 635, 203, 2]
    }, {
        name: 'Female',
        data: [133, 156, 947, 408, 6]
    }, {
        name: 'Bigender',
        data: [814, 841, 3714, 727, 31]
    }, {
        name: 'Other',
        data: [1216, 1001, 4436, 738, 40]
    }],
    funneldata: [
            ['Application Submitted', 100],
            ['Application Approved', 50],
            ['First Interview', 20],
            ['Interview Debrief', 15],
            ['Second Interview', 10],
            ['Hired', 5]
        ],
    funneltitle: 'Applicants by Stage',
    heatmaptitle: 'Sales per employee per weekday',
    heatmapxcat: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura'],
    heatmapycat: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 
    heatmapdata: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
    hundredstackeddata: [{
        name: 'Filed Complaint',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'No Complaint',
        data: [2, 2, 3, 2, 1]
    }],
    hundredstackedtitle: 'Complaints by Department',
    hundredstackedcategories: ['IT', 'Sales', 'HR', 'Marketing', 'Management'],
    treemapdata: [{
            name: 'IT',
            value: 6,
            colorValue: 1
        }, {
            name: 'Marketing',
            value: 5,
            colorValue: 2
        }, {
            name: 'HR',
            value: 4,
            colorValue: 3
        }, {
            name: 'Sales',
            value: 3,
            colorValue: 4
        }],
        treemaptitle: 'Number of College Graduates by Department',
        gaugedata: [4.1],
        gaugemax: 5,
        gaugetitle: 'GlassDoor Rating',
        histdata: [[30000,0], [40000,1], [50000,9], [60000,14], [70000,17], [80000,15], [90000,11], [100000,7], [110000,5], [120000,3], [130000,2], [140000,2], [150000,1]],
        histtitle: 'Overall Salary Distribution'


  };

  render() {
    return (
      <div>
      <div className={'row'}>
            <div className={halfclasses}>
            <BarChart data={this.state.bardata} title={this.state.bartitle} />
            </div>
              <div className={halfclasses}>
 <PieChart data={this.state.piedata} title={this.state.pietitle} />
              </div>
              </div>

            <div style={middleDivStyle}></div>
            <LineChart data={this.state.linedata} title={this.state.linetitle} />
            <div style={middleDivStyle}></div>
            <SideBar series={this.state.sidebarseries} title={this.state.sidebartitle} categories={this.state.sidebarcategories} />
            <div style={middleDivStyle}></div>
            <FunnelChart data={this.state.funneldata} title={this.state.funneltitle}  />
            <div style={middleDivStyle}></div>
            <HeatMap xcat={this.state.heatmapxcat} ycat={this.state.heatmapycat} data={this.state.heatmapdata} title={this.state.heatmaptitle}  />
            <div style={middleDivStyle}></div>
            <HundredStacked data={this.state.hundredstackeddata} title={this.state.hundredstackedtitle} categories={this.state.hundredstackedcategories}  />
            <div style={middleDivStyle}></div>
            <TreeMap data={this.state.treemapdata} title={this.state.treemaptitle} />
            <div style={middleDivStyle}></div>
             <Histogram data={this.state.histdata} title={this.state.histtitle} />
            <div style={middleDivStyle}></div>

            
          </div>
    );
  }

}

export default App;