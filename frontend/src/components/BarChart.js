import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataHorizontal: {
      labels: ["Red", "Orange", "Yellow", "Green"],
      datasets: [
        {
          label: "My First Dataset",
          data: [22, 33, 55, 12],
          fill: true,
          backgroundColor: ["#15878C", "#0B4447", "#20CBD4", "#1AA6AD"],
          borderWidth: 0.5,
        },
      ],
    },
  };

  render() {
    return (
      <HorizontalBar
        data={this.state.dataHorizontal}
        options={{ responsive: true }}
      />
    );
  }
}

export default ChartsPage;
