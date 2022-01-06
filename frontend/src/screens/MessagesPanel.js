import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import Messengers from "../components/Messengers";
import "./MessagesPanel.scss";
import UserPic from "../assets/userPic.png";
import MessageOther from "../components/MessageOther";
import MessageLogedInUser from "../components/MessageLogedInUser";
import MessageTimeStamp from "../components/MessageTimeStamp";

export default class MessagesPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Messages</div>
        <div className="panel__main__messages">
          <div className="messages__side__panel">
            <div className="messenger__search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.769"
                height="17.784"
                viewBox="0 0 17.769 17.784"
                style={{ marginRight: "0.5em" }}
              >
                <path
                  id="search"
                  d="M466.96,1033.086a6.985,6.985,0,1,0-1.05-1.051l-5.369,5.384,1.051,1.05Zm4.376-10.915a5.488,5.488,0,1,1-5.488,5.488A5.494,5.494,0,0,1,471.336,1022.172Z"
                  transform="translate(-460.541 -1020.686)"
                  fill="#d0dbe5"
                />
              </svg>
              <Form.Control
                placeholder="Search"
                style={{ border: "none", fontSize: "14px" }}
              />
            </div>
            <div className="messenger__panel">
              <Messengers badges="3" />
              <Messengers />
              <Messengers />
              <Messengers badges="8" />
              <Messengers />
              <Messengers />
              <Messengers />
              <Messengers />
              <Messengers />
              <Messengers badges="2" />
              <Messengers badges="5" />
              <Messengers />
              <Messengers />
              <Messengers />
              <Messengers />
              <Messengers />
              <Messengers />
            </div>
          </div>
          <div className="messages__panel">
            <Col style={{ flex: "1" }}>
              <Row className="massenger__row message__row">
                <Col>
                  <Row
                    style={{
                      marginBottom: "1em",
                      position: "sticky",
                      padding: "1em 0em",
                      top: 0,
                      backgroundColor: "#f3f9f9",
                    }}
                  >
                    <Col
                      style={{
                        padding: "0em",
                        maxWidth: "fit-content",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={UserPic}
                        alt="profile-pic"
                        className="profile-pic"
                        style={{ width: "60px", marginRight: ".5em" }}
                      />
                    </Col>
                    <Col
                      style={{
                        padding: "0em 2em",
                        maxWidth: "fit-content",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Row className="user-profile-name">John James</Row>
                    </Col>
                  </Row>
                  <MessageOther />
                  <MessageLogedInUser />
                  <MessageOther />
                  <MessageTimeStamp />
                  <MessageLogedInUser />
                  <MessageTimeStamp />
                  <MessageLogedInUser />
                  <MessageOther />
                  <MessageTimeStamp />
                  <MessageOther />
                  <MessageLogedInUser />
                  <MessageOther />
                  <MessageTimeStamp />
                  <MessageLogedInUser />
                  <MessageTimeStamp />
                  <MessageLogedInUser />
                  <MessageOther />
                </Col>
              </Row>
              <Row style={{ padding: "1em", backgroundColor: "#f3f9f9" }}>
                <Form className="massenger__form">
                  <Form.Control
                    type="text"
                    placeholder="Say Something"
                    className="massenger__input__field"
                  />
                  <Button className="massenger__button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </Button>
                </Form>
              </Row>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}
