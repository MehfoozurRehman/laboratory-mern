import React from "react";
import { Form } from "react-bootstrap";

export default class InputboxComponent extends React.Component {
  render() {
    return (
      <Form.Control
        placeholder={this.props.placeholder}
        type={this.props.type}
        className={this.props.ClassName}
      />
    );
  }
}
