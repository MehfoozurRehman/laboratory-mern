import React from "react";
import "./ReportsPanel.scss";

export default class ReportsPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Reports</div>
        <div className="panel__main__reports"></div>
      </div>
    );
  }
}
