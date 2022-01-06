import React from "react";
import { Col, Row, Button, Nav, Form } from "react-bootstrap";
import "./Posting.scss";
import { Link } from "react-router-dom";
import PostingRow from "../components/PostingRow";

export default class Posting extends React.Component {
  isCheckedFreelancerFilter() {
    const check = document.querySelector(".filter__freelancer");
    if (!check.classList.contains("checked__filter")) {
      check.classList.add("checked__filter");
    } else {
      check.classList.remove("checked__filter");
    }
  }
  isCheckedJobSeekerFilter() {
    const check = document.querySelector(".filter__JobSeeker");
    if (!check.classList.contains("checked__filter")) {
      check.classList.add("checked__filter");
    } else {
      check.classList.remove("checked__filter");
    }
  }
  render() {
    return (
      <>
        <Col style={{ flex: "1" }}>
          <Row className="Posting__nav">
            <Col>
              <Row className="posting__heading">
                <svg
                  viewBox="0 -31 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="m497.09375 60.003906c-.03125 0-.0625-.003906-.09375-.003906h-136v-15c0-24.8125-20.1875-45-45-45h-120c-24.8125 0-45 20.1875-45 45v15h-136c-8.351562 0-15 6.84375-15 15v330c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-329.683594c0-.019531 0-.039062 0-.058594-.574219-9.851562-6.632812-15.199218-14.90625-15.253906zm-316.09375-15.003906c0-8.269531 6.730469-15 15-15h120c8.269531 0 15 6.730469 15 15v15h-150zm295.1875 45-46.582031 139.742188c-2.042969 6.136718-7.761719 10.257812-14.226563 10.257812h-84.378906v-15c0-8.285156-6.714844-15-15-15h-120c-8.285156 0-15 6.714844-15 15v15h-84.378906c-6.464844 0-12.183594-4.121094-14.226563-10.257812l-46.582031-139.742188zm-175.1875 150v30h-90v-30zm181 165c0 8.269531-6.730469 15-15 15h-422c-8.269531 0-15-6.730469-15-15v-237.566406l23.933594 71.796875c6.132812 18.40625 23.289062 30.769531 42.6875 30.769531h84.378906v15c0 8.285156 6.714844 15 15 15h120c8.285156 0 15-6.714844 15-15v-15h84.378906c19.398438 0 36.554688-12.363281 42.6875-30.769531l23.933594-71.796875zm0 0" />
                </svg>
                Posting
              </Row>
              <Row>
                <Nav
                  variant="pills"
                  defaultActiveKey="/dashboard/companies/details"
                >
                  <Nav.Link
                    to="/dashboard/companies/details"
                    href="/dashboard/companies/details"
                    as={Link}
                    className="posting__nav__link"
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#09C956",
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    ></div>
                    Open
                  </Nav.Link>
                  <Nav.Link
                    to="/dashboard/companies/details/draft"
                    as={Link}
                    className="posting__nav__link"
                    eventKey="link-1"
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#5C3DFF",
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    ></div>
                    Draft
                  </Nav.Link>
                  <Nav.Link
                    to="/dashboard/companies/details/closed"
                    as={Link}
                    className="posting__nav__link"
                    eventKey="link-2"
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#ff4d4d",
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    ></div>
                    Closed
                  </Nav.Link>
                  <Nav.Link
                    to="/dashboard/companies/details/hold"
                    as={Link}
                    className="posting__nav__link"
                    eventKey="link-3"
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "#ffae0c",
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                    ></div>
                    Hold
                  </Nav.Link>
                </Nav>
              </Row>
            </Col>
            <Col className="Posting__nav__left">
              <Button
                variant="primary"
                className="filter__box filter__freelancer"
                onClick={this.isCheckedFreelancerFilter}
                style={{ marginRight: "10px" }}
              >
                Freelancer
              </Button>
              <Button
                variant="primary"
                className="filter__box filter__JobSeeker"
                onClick={this.isCheckedJobSeekerFilter}
              >
                Job Seeker
              </Button>
            </Col>
          </Row>
          <Row className="posting__table__row__heading">
            <Col className="title table__heading">Title</Col>
            <Col className="applicants table__heading">Applicats</Col>
            <Col className="interested table__heading">Interested</Col>
            <Col className="visitors table__heading">Visitors</Col>
            <Col className="date-created table__heading">Created</Col>
            <Col className="state table__heading">Status</Col>
            <Col className="edits table__heading">Date</Col>
          </Row>
          <PostingRow status="live" />
          <PostingRow status="live" />
          <PostingRow status="hold" />
          <PostingRow status="live" />
          <PostingRow status="hold" />
          <PostingRow status="closed" />
          <PostingRow status="live" />
          <PostingRow status="live" />
          <PostingRow status="live" />
          <PostingRow status="live" />
        </Col>
      </>
    );
  }
}
