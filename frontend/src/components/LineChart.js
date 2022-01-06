import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class SpineChart extends React.Component {
  state = {
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "transparent",
          borderColor: "#15878c",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#15878c",
          pointBackgroundColor: "#15878c",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#15878c",
          pointHoverBorderColor: "#15878c",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "transparent",
          borderColor: "#374957",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#374957",
          pointBackgroundColor: "#374957",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#374957",
          pointHoverBorderColor: "#374957",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    },
  };

  render() {
    return <Line data={this.state.dataLine} options={{ responsive: true }} />;
  }
}

export default SpineChart;
