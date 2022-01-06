import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataDoughnut: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "#15878C",
            "#0B4447",
            "#20CBD4",
            "#1AA6AD",
            "#374957",
          ],
          hoverBackgroundColor: [
            "#15878C",
            "#0B4447",
            "#20CBD4",
            "#1AA6AD",
            "#374957",
          ],
        },
      ],
    },
  };

  render() {
    return (
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    );
  }
}

export default ChartsPage;
