import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { render } from "react-dom";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ReactDOM from 'react-dom';
import './index.css';

class MapChart extends React.Component {

  state = {

    var H = Highcharts,
    map = H.maps['countries/us/us-all'],
    chart;

// Add series with state capital bubbles
$.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/us-capitals.json', function (json) {
    var data = [];
    $.each(json, function () {
        this.z = this.population;
        data.push(this);
    });

    chart = Highcharts.mapChart('geomap_dark_ID', {
        title: {
            text: 'Highmaps lat/lon demo'
        },

        tooltip: {
            pointFormat: '{point.capital}, {point.parentState}<br>' +
                'Lat: {point.lat}<br>' +
                'Lon: {point.lon}<br>' +
                'Population: {point.population}'
        },

        xAxis: {
            crosshair: {
                zIndex: 5,
                dashStyle: 'dot',
                snap: false,
                color: 'gray'
            }
        },

        yAxis: {
            crosshair: {
                zIndex: 5,
                dashStyle: 'dot',
                snap: false,
                color: 'gray'
            }
        },

        series: [{
            name: 'Basemap',
            mapData: map,
            borderColor: '#606060',
            nullColor:  "#D8D8D8", //'rgba(200, 200, 200, 0.2)',
            showInLegend: false
        }, {
            name: 'Separators',
            type: 'mapline',
            data: H.geojson(map, 'mapline'),
            color: '#101010',
            enableMouseTracking: false,
            showInLegend: false
        }, {
            type: 'mapbubble',
            dataLabels: {
                enabled: true,
                format: '{point.capital}',
		style: {
		    textOutline: false,
		    color: 'black'
		}
            },
            name: 'Cities',
            data: data,
            maxSize: '12%',
            color: H.getOptions().colors[0]
	    
        }]
    });
});

// Display custom label with lat/lon next to crosshairs
$('#container').mousemove(function (e) {
    var position;
    if (chart) {
        if (!chart.lab) {
            chart.lab = chart.renderer.text('', 0, 0)
                .attr({
                    zIndex: 5
                })
                .css({
                    color: '#505050'
                })
                .add();
        }

        e = chart.pointer.normalize(e);
        position = chart.fromPointToLatLon({
            x: chart.xAxis[0].toValue(e.chartX),
            y: chart.yAxis[0].toValue(e.chartY)
        });

        chart.lab.attr({
            x: e.chartX + 5,
            y: e.chartY - 22,
            text: 'Lat: ' + position.lat.toFixed(2) + '<br>Lon: ' + position.lon.toFixed(2)
        });
    }
});

$('#container').mouseout(function () {
    if (chart && chart.lab) {
        chart.lab.destroy();
        chart.lab = null;
    }
});

]
