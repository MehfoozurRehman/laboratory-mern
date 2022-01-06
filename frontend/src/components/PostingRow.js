import React, { useState } from "react";
import {
  Row,
  Col,
  Alert,
  Button,
  Nav,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Status({ value }) {
  if (value === "live") {
    return (
      <Alert key="live" className="status status-live">
        Live
      </Alert>
    );
  } else if (value === "hold") {
    return (
      <Alert key="hold" className="status status-hold">
        Hold
      </Alert>
    );
  } else if (value === "closed") {
    return (
      <Alert key="closed" className="status status-closed">
        Closed
      </Alert>
    );
  }
}

export default class PostingRows extends React.Component {
  render() {
    return (
      <Nav.Link className="nav__link__padding">
        <Row className="posting__table__row data__row">
          <Col className="table__data__col">
            <Row className="table__data__row" style={{ marginRight: "2em" }}>
              <Col className="title row__heading">Title</Col>
              <Col className="applicants row__heading">Applicats</Col>
              <Col className="interested row__heading">Interested</Col>
              <Col className="visitors row__heading">Visitors</Col>
              <Col className="date-created row__heading">Created</Col>
              <Col className="state row__heading">Status</Col>
              <Col className="edits row__heading">DATE CREATED</Col>
            </Row>
            <Row className="table__data__row">
              <Nav.Link
                to="/dashboard/companies/details/applicant-profile"
                as={Link}
                className="title table__data"
              >
                <Col>Sales Manager</Col>
              </Nav.Link>
              <Nav.Link
                to="/dashboard/companies/details/applicant-profile"
                as={Link}
                className="applicants table__data"
              >
                <Col>10</Col>
              </Nav.Link>
              <Nav.Link
                to="/dashboard/companies/details/applicant-profile"
                as={Link}
                className="interested table__data"
              >
                <Col>2</Col>
              </Nav.Link>
              <Nav.Link
                to="/dashboard/companies/details/applicant-profile"
                as={Link}
                className="visitors table__data"
              >
                <Col>7</Col>
              </Nav.Link>
              <Nav.Link
                to="/dashboard/companies/details/applicant-profile"
                as={Link}
                className="date-created table__data"
              >
                <Col>2 days ago</Col>
              </Nav.Link>
              <Col className="status__col">
                <Status value={this.props.status} />
              </Col>
              <Nav.Link
                to="/dashboard/companies/details/applicant-profile"
                as={Link}
                className="date table__data"
              >
                <Col>6/4/21</Col>
              </Nav.Link>
            </Row>
          </Col>
        </Row>
      </Nav.Link>
    );
  }
}
