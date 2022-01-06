import React from "react";
import "./DashboardPanel.scss";
import Card from "../components/Card";
import LineChart from "../components/LineChart";
import SpineChart from "../components/SpineChart";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import UserPic from "../assets/userPic.png";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const MessagePanelRow = () => {
  return (
    <Nav.Link
      to="/dashboard/messages"
      as={Link}
      className="message__panel__small__row"
    >
      <div className="message__panel__samll__content">
        <img
          src={UserPic}
          alt="user-pic"
          className="message__panel__small__row__img"
        />
        <div className="messenger__name" style={{ fontWeight: "800" }}>
          Francesca Metts
        </div>
      </div>
      <div className="messenger__name">3 Days Ago</div>
    </Nav.Link>
  );
};

export default class DashboardPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer__empty">
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <LineChart />
          </Card>
          <div className="message__card__col">
            <Card
              heading="Lorem"
              infoHeading="Lorem"
              infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            >
              <div className="message__panel__small">
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
                <MessagePanelRow />
              </div>
            </Card>
          </div>
        </div>
        <div className="panel__conatainer__empty__row">
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,795"
            contentInfo="25 April 2019"
          >
            <SpineChart />
          </Card>
          <Card
            heading="Lorem"
            infoHeading="Lorem"
            infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
            contentHeading="24,345"
            contentInfo="25 April 2019"
          >
            <BarChart />
          </Card>
        </div>
        <div className="panel__conatainer__empty__row">
          <div className="panel__conatainer__empty__row__half">
            <Card
              heading="Lorem"
              infoHeading="Lorem"
              infoContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam."
              contentHeading="24,795"
              contentInfo="25 April 2019"
            >
              <DoughnutChart />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
