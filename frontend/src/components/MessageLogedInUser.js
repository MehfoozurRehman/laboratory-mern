import React from "react";
import { Row } from "react-bootstrap";

export default class MessageLogedIn extends React.Component {
  render() {
    return (
      <Row className="message__other__user__row">
        <div className="message__other__user">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          doloribus dolores sed illo, modi dolorum!
        </div>
      </Row>
    );
  }
}
