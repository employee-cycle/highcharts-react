
//import React, { Component } from "react";
//import { PropTypes } from "prop-types";
//import { render } from "react-dom";
//import PieChart from "./Piechart.js";
//import Barchart from "./Barchart.js";

// Import our demo components
//import Chart from "./components/Chart.jsx";
//import Container from "./components/Container.jsx";


// Load Highcharts modules
//import HighchartsReact from "highcharts-react-official";
//import Highcharts from "highcharts";
//require("highcharts/indicators/indicators")(Highcharts);
//require("highcharts/indicators/pivot-points")(Highcharts);
//require("highcharts/indicators/macd")(Highcharts);
//require("highcharts/modules/exporting")(Highcharts);
//require("highcharts/modules/map")(Highcharts);



class App extends React.Component {
	state = {piechartdata: null, 
		barchartdata: null};

  static propTypes = {
    data: PropTypes.array.isRequired,
    
  };

  componentDidMount() {
   fetch('https://ecycle-neo.herokuapp.com/people').then(data => setState({piechartdata: data}))
   fetch('https://ecycle-neo.herokuapp.com/people').then(data => setState({barchartdata: data}))
    
  }


      render() {
    return (
    	<div>
    <PieChart data = {this.state.piechartdata}/>

<BarChart data = {this.state.barchartdata} />
</div>

    )
  }
}

// Render app with demo chart


export default App
