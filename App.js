
import React from 'react'
import { render } from "react-dom";
import ListThing from "./Piechart.js";
import Barchart from "./Barchart.js";

// Import our demo components
import Chart from "./components/Chart.jsx";
import Container from "./components/Container.jsx";


// Load Highcharts modules
require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/map")(Highcharts);

// Render app with demo chart
const App = () => (
  <div>
    <h1>Demos</h1>
<PieChart data = {this.state.data}/>
<BarChart data = {this.state.data} />

);

render(<App />, document.getElementById("root"));
