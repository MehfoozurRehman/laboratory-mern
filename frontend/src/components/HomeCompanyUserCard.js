import React from "react";
import { Card, Col, Row, Button, Nav } from "react-bootstrap";
import HomeCompanyUserCardImg from "../assets/userPic.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class HomeCompanyUserCard extends React.Component {
  render() {
    return (
      <Card className="home__company__user__card">
        <Card.Body styke={{ padding: "0em" }}>
          <Col style={{ padding: "0em" }}>
            <Row>
              <Col
                style={{
                  maxWidth: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0em",
                }}
              >
                <img
                  src={HomeCompanyUserCardImg}
                  alt="userPic"
                  style={{ width: "100%", maxWidth: "70px" }}
                />
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  maxWidth: "fit-content",
                }}
              >
                <div className="home__company__user__card__heading">
                  John Doe
                </div>
                <div className="home__company__user__card__sub__heading">
                  Data Scientest
                </div>
              </Col>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flex: 1,
                }}
              >
                <div className="home__company__user__card__content">
                  <span>14</span> miles away
                </div>
                <div className="home__company__user__card__content">
                  <span>4</span> Years of Experience
                </div>
              </Col>
            </Row>
            <Row style={{ padding: "1em .5em" }}>
              <Col>
                <Row style={{ display: "flex" }}>
                  <Col className="home__company__user__card__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 10.139 10.139"
                    >
                      <path
                        id="Path_381"
                        data-name="Path 381"
                        d="M9.534,6.638a2.055,2.055,0,0,0-2.055-.51L6.756,5.4,9.918,2.242a.757.757,0,0,0,0-1.071L8.969.222A.757.757,0,0,0,7.9.222L4.736,3.384l-.724-.724A2.051,2.051,0,0,0,1.225.179.2.2,0,0,0,1.165.5l.945.945-.668.668L.5,1.169a.2.2,0,0,0-.321.06A2.051,2.051,0,0,0,2.657,4.016l.724.724L.958,7.162A.2.2,0,0,0,.91,7.24l-.862,2.6a.2.2,0,0,0,.25.25l2.6-.862a.239.239,0,0,0,.081-.049L5.4,6.76l.724.724A2.051,2.051,0,0,0,8.912,9.965a.2.2,0,0,0,.06-.321L8.027,8.7l.668-.668.945.945a.2.2,0,0,0,.321-.06,2.051,2.051,0,0,0-.427-2.277ZM8.178.5a.361.361,0,0,1,.511,0l.949.949a.361.361,0,0,1,0,.511L9,2.6l-1.46-1.46ZM2.849,3.649a.2.2,0,0,0-.21-.045,1.656,1.656,0,0,1-2.2-1.93l.86.86a.2.2,0,0,0,.28,0l.948-.948a.2.2,0,0,0,0-.28l-.86-.86a1.656,1.656,0,0,1,1.93,2.2.2.2,0,0,0,.045.21l.811.811-.8.8ZM.548,9.593l.286-.864.578.578Zm1.285-.426L.974,8.308l.212-.639L2.471,8.955Zm1.006-.4-.59-.59L4.187,6.234a.2.2,0,0,0-.28-.28L1.968,7.892l-.59-.59L7.256,1.424l.016.016.574.574L5.173,4.688a.2.2,0,1,0,.28.28L8.126,2.294l.59.59Zm6.857-.291-.86-.86a.2.2,0,0,0-.28,0l-.948.948a.2.2,0,0,0,0,.28l.86.86a1.656,1.656,0,0,1-1.93-2.2.2.2,0,0,0-.045-.21L5.681,6.48l.8-.8.811.811a.2.2,0,0,0,.21.045,1.656,1.656,0,0,1,2.2,1.93Z"
                        transform="translate(-0.001 0)"
                      />
                      <g
                        id="Group_333"
                        data-name="Group 333"
                        transform="translate(4.483 5.261)"
                      >
                        <path
                          id="Path_382"
                          data-name="Path 382"
                          d="M226.6,266.046a.2.2,0,1,1,.194-.159A.2.2,0,0,1,226.6,266.046Z"
                          transform="translate(-226.399 -265.651)"
                        />
                      </g>
                    </svg>
                  </Col>
                  <Col style={{ paddingRight: "0em" }}>
                    <div className="home__company__user__card__content">
                      Enterpreneurship
                    </div>
                    <div className="home__company__user__card__content">
                      Web Programming
                    </div>
                    <div className="home__company__user__card__content">
                      Requirment Gathering
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row style={{ display: "flex" }}>
                  <Col className="home__company__user__card__svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12.499 16.008"
                      fill="currentColor"
                    >
                      <g id="germany" transform="translate(-56)">
                        <path
                          id="Path_654"
                          data-name="Path 654"
                          d="M215.5,352h.5v.47h-.5Z"
                          transform="translate(-154.503 -340.973)"
                        />
                        <path
                          id="Path_655"
                          data-name="Path 655"
                          d="M247.5,352h.5v.47h-.5Z"
                          transform="translate(-185.501 -340.973)"
                        />
                        <path
                          id="Path_656"
                          data-name="Path 656"
                          d="M279.5,352h.5v.47h-.5Z"
                          transform="translate(-216.499 -340.973)"
                        />
                        <path
                          id="Path_657"
                          data-name="Path 657"
                          d="M67.788,6.861A6.3,6.3,0,0,0,65.9,4.682l-.274.381a5.839,5.839,0,0,1,1.413,1.453H65.457a6.863,6.863,0,0,0-.542-1.16,4.631,4.631,0,0,0,.577-2.114,3.242,3.242,0,1,0-6.485,0,4.631,4.631,0,0,0,.577,2.114,6.865,6.865,0,0,0-.542,1.16H57.465a5.839,5.839,0,0,1,1.413-1.453L58.6,4.682a6.248,6.248,0,1,0,9.185,2.179Zm-5.774,8.662a2.958,2.958,0,0,1-2.043-1.63A6.32,6.32,0,0,1,59.544,13h2.47Zm.47,0V13h2.47a6.318,6.318,0,0,1-.427.892A2.958,2.958,0,0,1,62.485,15.523Zm0-2.992v-.517h-.47v.517H59.38a9.23,9.23,0,0,1-.4-2.537h3.036v.517h.47V9.993H65.52a9.23,9.23,0,0,1-.4,2.537ZM56.475,9.993h2.034a9.791,9.791,0,0,0,.38,2.537H57.18a5.74,5.74,0,0,1-.7-2.537Zm4.21-3.007a12.5,12.5,0,0,0,1.329,1.376V9.523H58.979a9.321,9.321,0,0,1,.4-2.537Zm3.129,0h1.3a9.321,9.321,0,0,1,.4,2.537H62.485V8.362A12.5,12.5,0,0,0,63.814,6.986ZM65.99,9.993h2.034a5.74,5.74,0,0,1-.7,2.537H65.61A9.791,9.791,0,0,0,65.99,9.993Zm1.331-3.007c.017.031.034.062.051.093a5.79,5.79,0,0,1,.652,2.444H65.99a9.772,9.772,0,0,0-.379-2.537Zm-2.369-.47h-.77q.256-.345.462-.681A6.478,6.478,0,0,1,64.953,6.516ZM62.25.47a2.776,2.776,0,0,1,2.772,2.772c0,2.051-2.175,4.159-2.772,4.7-.6-.54-2.772-2.646-2.772-4.7A2.776,2.776,0,0,1,62.25.47ZM59.855,5.835q.206.336.462.681h-.77A6.477,6.477,0,0,1,59.855,5.835ZM57.127,7.079c.016-.031.034-.062.051-.093h1.71a9.773,9.773,0,0,0-.379,2.537H56.475A5.789,5.789,0,0,1,57.127,7.079ZM57.467,13h1.576a6.9,6.9,0,0,0,.523,1.129,4.727,4.727,0,0,0,.884,1.121A5.806,5.806,0,0,1,57.467,13Zm6.583,2.25a4.728,4.728,0,0,0,.884-1.121A6.9,6.9,0,0,0,65.456,13h1.576A5.806,5.806,0,0,1,64.05,15.25Z"
                          transform="translate(0)"
                        />
                        <path
                          id="Path_658"
                          data-name="Path 658"
                          d="M188.48,34.24a2.24,2.24,0,1,0-2.24,2.24A2.242,2.242,0,0,0,188.48,34.24Zm-2.24-1.77a1.77,1.77,0,0,1,1.469.783h-2.937A1.77,1.77,0,0,1,186.24,32.47Zm-1.693,1.253h3.386a1.769,1.769,0,0,1,0,1.034h-3.386a1.769,1.769,0,0,1,0-1.034Zm.224,1.5h2.937a1.769,1.769,0,0,1-2.937,0Z"
                          transform="translate(-123.99 -30.998)"
                        />
                      </g>
                    </svg>
                  </Col>
                  <Col style={{ padding: "0em", paddingLeft: ".5em" }}>
                    <div className="home__company__user__card__content">
                      <span>Master in Data Science</span>
                      <br />
                      2016
                    </div>
                    <div className="home__company__user__card__content">
                      <span>Bachlor in Data Science</span>
                      <br />
                      2019
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="dark"
                  style={{
                    width: "100%",
                    maxWidth: "180px",
                    padding: "0em",
                  }}
                >
                  <Nav.Link
                    className="nav__link__reverse"
                    style={{ fontSize: "14px" }}
                    as={Link}
                    to="/dashboard/companies/details/applicant-details"
                  >
                    Get Details
                  </Nav.Link>
                </Button>
              </Col>
            </Row>
          </Col>
        </Card.Body>
      </Card>
    );
  }
}
