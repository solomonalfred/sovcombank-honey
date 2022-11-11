import React, { Component } from 'react';
import CanvasJSReact from './lib/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    const date = new Date();
    const options = {
      animationEnabled: true,
      title: {
        text: "Наши возможности сделать норм проект"
      },
      axisX: {
        valueFormatString: "DD"
      },
      axisY: {
        title: "Шанс",
        prefix: "%",
        includeZero: true
      },
      data: [{
        yValueFormatString: "$#",
        xValueFormatString: "DD",
        type: "spline",
        dataPoints: [
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
          { x: new Date(date.setDate(date.getDate() + 1)), y: Math.floor(Math.random() * 100) },
        ]
      }]
    }

    return (
      <CanvasJSChart options={options} />
    );
  }
}

export default Chart;                           
