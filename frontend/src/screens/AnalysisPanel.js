import React from "react";
import "./AnalysisPanel.scss";
import Card from "../components/Card";

export default class AnalysisPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer__empty">
        <div className="panel__conatainer__empty__row">
          <Card />
          <Card />
        </div>
        <div className="panel__conatainer__empty__row">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="panel__conatainer__empty__row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
