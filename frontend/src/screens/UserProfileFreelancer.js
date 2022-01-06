import React from "react";
import { Col, Row, Nav, Card } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import "./UserProfile.scss";
import UserPic from "../assets/userPic.png";
import placeholderpic from "../assets/HomeCompanyaddpic.png";
import linkedinicon from "../assets/linkedin-auth-icon.png";
import googleicon from "../assets/google-auth-icon.png";
import facebookicon from "../assets/facebook-auth-icon.png";

export default class UserProfile extends React.Component {
  render() {
    return (
      <Col style={{ flex: "1" }}>
        <Row>
          <Col
            style={{
              padding: ".5em 0em",
              maxWidth: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer"
              className="screen__back__btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20.556 17.629"
              >
                <g
                  id="_507257"
                  data-name="507257"
                  transform="translate(0 -31.842)"
                >
                  <g
                    id="Group_506"
                    data-name="Group 506"
                    transform="translate(0 31.842)"
                  >
                    <path
                      id="Path_753"
                      data-name="Path 753"
                      d="M19.32,39.213a1.469,1.469,0,0,0-.254-.019H4.564l.316-.147a2.941,2.941,0,0,0,.831-.588l4.067-4.067a1.522,1.522,0,0,0,.213-1.949,1.471,1.471,0,0,0-2.206-.191L.431,39.606a1.471,1.471,0,0,0,0,2.08h0l7.354,7.354a1.471,1.471,0,0,0,2.206-.147,1.522,1.522,0,0,0-.213-1.949L5.718,42.871a2.942,2.942,0,0,0-.735-.537l-.441-.2H18.984A1.522,1.522,0,0,0,20.536,40.9,1.471,1.471,0,0,0,19.32,39.213Z"
                      transform="translate(0 -31.842)"
                      fill="#15878c"
                    />
                  </g>
                </g>
              </svg>
            </Nav.Link>
          </Col>
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
              style={{ width: "50px", marginRight: "1em" }}
            />
          </Col>
          <Col
            style={{
              maxWidth: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginRight: "1em",
            }}
          >
            <Row className="user-profile-name">John James</Row>
          </Col>
          <Col
            style={{
              padding: ".5em 0em",
              maxWidth: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Nav.Link
              as={Link}
              to="/dashboard/messages"
              className="user__profile__messanger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32.172 28.83"
              >
                <g id="telegram-logo" transform="translate(0.25 0.25)">
                  <path
                    id="Path_377"
                    data-name="Path 377"
                    d="M25.5,38.327a1.254,1.254,0,0,1-.7-.216l-7.964-5.4-4.271,3.073a1.254,1.254,0,0,1-1.945-.7L8.469,26.957.806,24.027A1.254,1.254,0,0,1,.79,21.691L29.928,10.1a1.254,1.254,0,0,1,.413-.1,1.308,1.308,0,0,1,.151,0,1.25,1.25,0,0,1,.8.356c.023.023.045.046.066.07a1.249,1.249,0,0,1,.307.734,1.272,1.272,0,0,1,0,.2,1.218,1.218,0,0,1-.021.143L26.728,37.308A1.254,1.254,0,0,1,25.5,38.327Zm-7.968-8.174,7.094,4.812,3.827-20.08-13.822,13.3,2.868,1.945Zm-5.905-1.07.95,3.6,2.046-1.472-2.68-1.818A1.25,1.25,0,0,1,11.623,29.084ZM4.7,22.833l5.262,2.012a1.254,1.254,0,0,1,.764.851l.667,2.529a1.254,1.254,0,0,1,.378-.773l13.17-12.673Z"
                    transform="translate(0 -9.997)"
                    stroke="#fff"
                    stroke-width="0.5"
                  />
                </g>
              </svg>
              <div className="user-profile-btn-text">Message</div>
            </Nav.Link>
          </Col>
          <Col
            style={{
              padding: ".5em 0em",
              maxWidth: "fit-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: ".5em",
            }}
          >
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer/personal"
              className="user__profile__messanger"
            >
              <div className="user-profile-btn-text">Edit</div>
            </Nav.Link>
          </Col>
        </Row>
        <Row style={{ padding: "1em 0em" }}>
          <Nav variant="pills" defaultActiveKey="/dashboard/freelancer/details">
            <Nav.Link
              to="/dashboard/freelancer/details"
              href="/dashboard/freelancer/details"
              as={Link}
              className="nav__link__horizontal"
            >
              Profile
            </Nav.Link>
            <Nav.Link
              to="/dashboard/freelancer/details/applied"
              as={Link}
              className="nav__link__horizontal"
              eventKey="link-1"
            >
              Applied
            </Nav.Link>
            <Nav.Link
              to="/dashboard/freelancer/details/work-Experience"
              as={Link}
              className="nav__link__horizontal"
              eventKey="link-2"
            >
              Work Experience
            </Nav.Link>
            <Nav.Link
              to="/dashboard/freelancer/details/project-portfolio"
              as={Link}
              className="nav__link__horizontal"
              eventKey="link-3"
            >
              Project Portfolio
            </Nav.Link>
            <Nav.Link
              to="/dashboard/freelancer/details/education"
              as={Link}
              className="nav__link__horizontal"
              eventKey="link-4"
            >
              Education
            </Nav.Link>
            <Nav.Link
              to="/dashboard/freelancer/details/contact"
              as={Link}
              className="nav__link__horizontal"
              eventKey="link-5"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Row>
        <Row>
          <Switch>
            <Route path="/dashboard/freelancer/details" exact>
              <Col>
                <Row>
                  <Col>
                    <Row>
                      <div className="user-profile-heading">Summary</div>
                    </Row>
                    <Row>
                      <Card className="card-box">
                        <Card.Body className="card-list">
                          <Col>
                            <Row className="card-list-item">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 7.444 9.94"
                              >
                                <g id="name" transform="translate(3.582 -1)">
                                  <path
                                    id="Path_285"
                                    data-name="Path 285"
                                    d="M144.425,174.264a1.132,1.132,0,1,0-1.132-1.132A1.132,1.132,0,0,0,144.425,174.264Zm0-1.824a.694.694,0,1,1-.694.694A.694.694,0,0,1,144.425,172.44Zm0,0"
                                    transform="translate(-144.285 -167.987)"
                                  />
                                  <path
                                    id="Path_286"
                                    data-name="Path 286"
                                    d="M110.406,325.122a1.7,1.7,0,0,0-1.23.515,1.816,1.816,0,0,0-.508,1.285.22.22,0,0,0,.219.219h3.039a.22.22,0,0,0,.219-.219,1.816,1.816,0,0,0-.508-1.285A1.7,1.7,0,0,0,110.406,325.122Zm-1.285,1.581a1.339,1.339,0,0,1,.368-.76,1.29,1.29,0,0,1,1.835,0,1.346,1.346,0,0,1,.368.76Zm0,0"
                                    transform="translate(-110.266 -318.428)"
                                  />
                                  <path
                                    id="Path_287"
                                    data-name="Path 287"
                                    d="M1.767,0H-3.487A1.1,1.1,0,0,0-4.582,1.095V8.845A1.1,1.1,0,0,0-3.487,9.94H1.767A1.1,1.1,0,0,0,2.862,8.845V1.095A1.1,1.1,0,0,0,1.767,0Zm.657,8.845a.659.659,0,0,1-.657.657H-3.487a.659.659,0,0,1-.657-.657V1.095A.659.659,0,0,1-3.487.438H1.767a.659.659,0,0,1,.657.657Zm0,0"
                                    transform="translate(1 1)"
                                  />
                                  <path
                                    id="Path_288"
                                    data-name="Path 288"
                                    d="M143.512,59.313h1.752a.219.219,0,1,0,0-.438h-1.752a.219.219,0,1,0,0,.438Zm0,0"
                                    transform="translate(-144.285 -56.844)"
                                  />
                                </g>
                              </svg>
                              John James
                            </Row>
                            <Row className="card-list-item">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 10.95 9.855"
                              >
                                <path
                                  id="suitcase"
                                  d="M10.4,1.643H8.03V.913A.914.914,0,0,0,7.118,0H3.833A.914.914,0,0,0,2.92.913v.73H.548A.548.548,0,0,0,0,2.19V6.253a.55.55,0,0,0,.365.515v2.54a.548.548,0,0,0,.548.548h9.125a.548.548,0,0,0,.548-.548V6.768a.55.55,0,0,0,.365-.515V2.19a.548.548,0,0,0-.548-.548ZM3.285.913A.548.548,0,0,1,3.833.365H7.118a.548.548,0,0,1,.548.548v.73H7.3V.913A.183.183,0,0,0,7.118.73H3.833A.183.183,0,0,0,3.65.913v.73H3.285Zm3.65.73H4.015V1.1h2.92ZM10.22,9.308a.183.183,0,0,1-.183.183H.913A.183.183,0,0,1,.73,9.308V6.831l4.015.554v.463a.548.548,0,0,0,.548.548h.365a.548.548,0,0,0,.548-.548V7.384l4.015-.554ZM5.84,7.848a.183.183,0,0,1-.183.183H5.293a.183.183,0,0,1-.183-.183v-1.1a.183.183,0,0,1,.183-.183h.365a.183.183,0,0,1,.183.183Zm4.745-1.6a.183.183,0,0,1-.157.181l-.051.007-4.173.575V6.753a.548.548,0,0,0-.548-.548H5.293a.548.548,0,0,0-.548.548v.263L.522,6.434a.183.183,0,0,1-.157-.181V2.19a.183.183,0,0,1,.183-.183H10.4a.183.183,0,0,1,.183.183Zm0,0"
                                />
                              </svg>
                              Data Scientest, Seimans
                            </Row>
                            <Row className="card-list-item">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 10.951 10.605"
                              >
                                <g id="age" transform="translate(0 -8.079)">
                                  <path
                                    id="Path_298"
                                    data-name="Path 298"
                                    d="M8.963,16.76A4.98,4.98,0,1,1,7.938,9.154a.161.161,0,0,0,.17-.273,5.306,5.306,0,1,0,1.091,8.1.161.161,0,0,0-.236-.218Z"
                                    transform="translate(0)"
                                  />
                                  <path
                                    id="Path_299"
                                    data-name="Path 299"
                                    d="M52.631,54.507a.161.161,0,0,0-.148-.1h-.226a5.245,5.245,0,0,0-.6-1.869,5.3,5.3,0,0,0-1.313-1.58.161.161,0,1,0-.2.249,4.973,4.973,0,0,1,1.815,3.376.161.161,0,0,0,.159.145l-.512.545-.512-.545H51.2a.162.162,0,0,0,.16-.18,4.391,4.391,0,1,0-8.1,2.83.161.161,0,1,0,.273-.169,4.07,4.07,0,1,1,7.479-2.8h-.3a.162.162,0,0,0-.117.271l.884.941a.162.162,0,0,0,.234,0l.884-.941A.161.161,0,0,0,52.631,54.507Z"
                                    transform="translate(-41.694 -41.694)"
                                  />
                                  <path
                                    id="Path_300"
                                    data-name="Path 300"
                                    d="M98.066,312.093h-.952a.161.161,0,0,0-.152.109,4.071,4.071,0,0,1-6.955,1.328.161.161,0,0,0-.245.208,4.392,4.392,0,0,0,7.466-1.324h.624a4.947,4.947,0,0,1-.69,1.372.161.161,0,0,0,.262.187,5.267,5.267,0,0,0,.8-1.678.161.161,0,0,0-.155-.2Z"
                                    transform="translate(-87.803 -297.512)"
                                  />
                                  <path
                                    id="Path_301"
                                    data-name="Path 301"
                                    d="M100.867,204.38a.161.161,0,0,0,.207-.093l.154-.4h1.023l.152.4a.161.161,0,1,0,.3-.114l-.768-2.035,0,0a.207.207,0,0,0-.192-.129h0a.207.207,0,0,0-.192.129v0l-.775,2.035A.161.161,0,0,0,100.867,204.38Zm.875-1.846.388,1.028h-.78Z"
                                    transform="translate(-98.608 -189.778)"
                                  />
                                  <path
                                    id="Path_302"
                                    data-name="Path 302"
                                    d="M317.507,202.767a.161.161,0,1,0,0-.321h-.862a.161.161,0,0,0-.161.161v2.045a.161.161,0,0,0,.161.161h.862a.161.161,0,1,0,0-.321h-.7v-.7h.637a.161.161,0,1,0,0-.321h-.637v-.7Z"
                                    transform="translate(-309.716 -190.21)"
                                  />
                                  <path
                                    id="Path_303"
                                    data-name="Path 303"
                                    d="M197.527,202.327a.867.867,0,0,1,.487.149.161.161,0,1,0,.18-.266,1.193,1.193,0,1,0-.667,2.182,1.08,1.08,0,0,0,1.052-1.193.161.161,0,0,0-.161-.161H197.8a.161.161,0,0,0,0,.321h.448a.721.721,0,0,1-.721.711.871.871,0,0,1,0-1.743Z"
                                    transform="translate(-192.135 -189.779)"
                                  />
                                </g>
                              </svg>
                              27 years, male
                            </Row>
                            <Row className="card-list-item">
                              <svg
                                stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 6.701 9.436"
                              >
                                <g id="pin" transform="translate(0.279 0.25)">
                                  <path
                                    id="Path_280"
                                    data-name="Path 280"
                                    d="M85.685,1.53A3.032,3.032,0,0,0,83.109,0h-.137A3.032,3.032,0,0,0,80.394,1.53,3.111,3.111,0,0,0,80.354,4.6L82.57,8.659l0,.005a.539.539,0,0,0,.934,0l0-.005L85.726,4.6a3.111,3.111,0,0,0-.041-3.074ZM83.04,4.048A1.257,1.257,0,1,1,84.3,2.792,1.258,1.258,0,0,1,83.04,4.048Z"
                                    transform="translate(-79.968 0)"
                                    fill="none"
                                    stroke-width="0.5"
                                  />
                                </g>
                              </svg>
                              Amsterdam, Netherlands
                            </Row>
                            <Row className="card-list-item">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 9.995 9.995"
                              >
                                <g
                                  id="_3500360"
                                  data-name="3500360"
                                  transform="translate(0 0.009)"
                                >
                                  <ellipse
                                    id="Ellipse_290"
                                    data-name="Ellipse 290"
                                    cy="0.5"
                                    ry="0.5"
                                    transform="translate(4.431 7.258)"
                                  />
                                  <path
                                    id="Path_714"
                                    data-name="Path 714"
                                    d="M72.911,64.382l-3.123-1.367a.2.2,0,0,0-.156,0l-3.122,1.366a.2.2,0,0,0-.118.179v1.2a.587.587,0,0,0-.39.552V67.1a.2.2,0,0,0,.2.2h.781a.2.2,0,0,0,.2-.2v-.781a.587.587,0,0,0-.39-.552V64.86l1.171.512v1.336a.2.2,0,0,0,.116.178,3.51,3.51,0,0,0,3.282,0,.2.2,0,0,0,.116-.178V65.372l1.445-.632a.2.2,0,0,0,0-.358ZM66.781,66.9h-.39v-.586a.2.2,0,0,1,.39,0Zm4.295-.326a3.03,3.03,0,0,1-2.733,0V65.543l1.288.564a.2.2,0,0,0,.156,0l1.288-.564Zm-1.367-.864-2.636-1.153,2.636-1.153,2.636,1.153Z"
                                    transform="translate(-64.712 -61.778)"
                                  />
                                  <path
                                    id="Path_715"
                                    data-name="Path 715"
                                    d="M367.874,203H366.2a.2.2,0,1,0,0,.39h1.679a.2.2,0,1,0,0-.39Z"
                                    transform="translate(-358.855 -199.046)"
                                  />
                                  <path
                                    id="Path_716"
                                    data-name="Path 716"
                                    d="M367.874,243H366.2a.2.2,0,0,0,0,.39h1.679a.2.2,0,0,0,0-.39Z"
                                    transform="translate(-358.855 -238.265)"
                                  />
                                  <ellipse
                                    id="Ellipse_291"
                                    data-name="Ellipse 291"
                                    cy="0.5"
                                    ry="0.5"
                                    transform="translate(4.431 0.258)"
                                  />
                                  <path
                                    id="Path_717"
                                    data-name="Path 717"
                                    d="M9.8,0H5.876a.2.2,0,1,0,0,.39H9.6V6.364H.39V.39H4.119a.2.2,0,1,0,0-.39H.2A.2.2,0,0,0,0,.2V7.731a.2.2,0,0,0,.2.2H3.981L3.664,9.6H3.045a.2.2,0,1,0,0,.39h3.9a.2.2,0,1,0,0-.39H6.331L6.014,7.926H9.8a.2.2,0,0,0,.2-.2V.2A.2.2,0,0,0,9.8,0ZM4.062,9.6l.317-1.679H5.617L5.933,9.6ZM9.6,7.535H.39V6.755H9.6Z"
                                    transform="translate(0 -0.009)"
                                  />
                                </g>
                              </svg>
                              Degree in Computer Science
                            </Row>
                          </Col>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <div className="user-profile-heading">Skills</div>
                    </Row>
                    <Row>
                      <Card className="card-box">
                        <Card.Body className="card-list">
                          <Row>
                            <Col className="card-list-item">
                              <svg
                                fill="currentColor"
                                id="pencil"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 11.435 11.435"
                              >
                                <g id="Group_334" data-name="Group 334">
                                  <path
                                    id="Path_381"
                                    data-name="Path 381"
                                    d="M10.752,7.486a2.318,2.318,0,0,0-2.317-.575L7.619,6.1l3.567-3.567a.854.854,0,0,0,0-1.208L10.115.25a.854.854,0,0,0-1.208,0L5.341,3.817,4.524,3A2.313,2.313,0,0,0,1.381.2a.223.223,0,0,0-.068.362L2.379,1.63l-.753.753L.56,1.318A.223.223,0,0,0,.2,1.386,2.313,2.313,0,0,0,3,4.529l.816.816L1.08,8.077a.226.226,0,0,0-.054.088L.054,11.1a.223.223,0,0,0,.282.282l2.932-.972a.269.269,0,0,0,.091-.055L6.09,7.624l.816.816a2.313,2.313,0,0,0,3.143,2.8.223.223,0,0,0,.068-.362L9.052,9.81l.753-.753,1.065,1.065a.223.223,0,0,0,.362-.068,2.313,2.313,0,0,0-.481-2.568ZM9.223.566a.407.407,0,0,1,.576,0l1.07,1.07a.407.407,0,0,1,0,.576l-.725.725L8.5,1.291ZM3.213,4.115a.223.223,0,0,0-.237-.051A1.868,1.868,0,0,1,.5,1.887l.97.97a.223.223,0,0,0,.316,0L2.852,1.788a.223.223,0,0,0,0-.316L1.883.5A1.868,1.868,0,0,1,4.059,2.981a.223.223,0,0,0,.051.237l.915.915-.9.9Zm-2.6,6.7.323-.975.652.652Zm1.449-.48L1.1,9.369l.239-.72,1.45,1.45ZM3.2,9.882l-.665-.665L4.721,7.03a.223.223,0,1,0-.316-.316L2.22,8.9l-.665-.665L8.183,1.606l.018.018.647.647L5.833,5.287a.223.223,0,1,0,.316.316L9.164,2.588l.665.665Zm7.733-.328-.97-.97a.223.223,0,0,0-.316,0L8.579,9.653a.223.223,0,0,0,0,.316l.97.97A1.868,1.868,0,0,1,7.372,8.459a.223.223,0,0,0-.051-.237l-.915-.915.9-.9.915.915a.223.223,0,0,0,.237.051,1.867,1.867,0,0,1,2.479,2.177Z"
                                    transform="translate(-0.001 0)"
                                  />
                                  <g
                                    id="Group_333"
                                    data-name="Group 333"
                                    transform="translate(5.056 5.933)"
                                  >
                                    <path
                                      id="Path_382"
                                      data-name="Path 382"
                                      d="M226.622,266.1a.223.223,0,1,1,.219-.18A.225.225,0,0,1,226.622,266.1Z"
                                      transform="translate(-226.399 -265.651)"
                                    />
                                  </g>
                                </g>
                              </svg>
                              Programming
                            </Col>
                            <Col className="card-list-item card-list-item-border">
                              Designing
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <div className="user-profile-heading">Languages</div>
                    </Row>
                    <Row>
                      <Card className="card-box">
                        <Card.Body className="card-list">
                          <Row>
                            <Col className="card-list-item">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 12.338 12.338"
                              >
                                <g id="translation" transform="translate(0 0)">
                                  <path
                                    id="Path_281"
                                    data-name="Path 281"
                                    d="M11.326,4.337H7.937c.011-.119.017-.239.017-.361A3.978,3.978,0,0,0,1.99.531a.241.241,0,1,0,.241.417A3.495,3.495,0,1,1,3.976,7.471,3.456,3.456,0,0,1,1.785,6.7a.241.241,0,0,0-.222-.043l-.64.167.251-.551a.241.241,0,0,0-.024-.242,3.5,3.5,0,0,1-.2-3.8.241.241,0,0,0-.417-.242A3.979,3.979,0,0,0,.678,6.2l-.4.886a.241.241,0,0,0,.28.333L1.58,7.149a3.976,3.976,0,0,0,2.95.765v2.11a1.013,1.013,0,0,0,1.012,1.012H8.95l1.524,1.247a.241.241,0,0,0,.394-.187v-1.06h.458a1.013,1.013,0,0,0,1.012-1.012V5.349a1.013,1.013,0,0,0-1.012-1.012Zm.53,5.687a.531.531,0,0,1-.53.53h-.7a.241.241,0,0,0-.241.241v.793L9.2,10.614c-.066-.06-.123-.06-.252-.06h-3.4a.531.531,0,0,1-.53-.53V7.816a3.99,3.99,0,0,0,2.851-3h3.463a.531.531,0,0,1,.53.53Zm0,0"
                                  />
                                  <path
                                    id="Path_282"
                                    data-name="Path 282"
                                    d="M290.094,252.456a.241.241,0,0,0-.1-.459h-.1l-.777-1.771a.241.241,0,0,0-.441,0L287.9,252h-.1a.241.241,0,0,0-.1.459l-.289.66a.241.241,0,1,0,.441.194l.364-.83h1.366l.364.83a.241.241,0,1,0,.441-.194ZM288.423,252l.471-1.075.471,1.075Zm0,0"
                                    transform="translate(-280.46 -244.056)"
                                  />
                                  <path
                                    id="Path_283"
                                    data-name="Path 283"
                                    d="M45.643,45.88a.241.241,0,1,0-.17-.071A.243.243,0,0,0,45.643,45.88Zm0,0"
                                    transform="translate(-44.308 -44.305)"
                                  />
                                  <path
                                    id="Path_284"
                                    data-name="Path 284"
                                    d="M100.258,88.78a.241.241,0,1,0,.232.423,2.76,2.76,0,0,0,1.193-1.294,2.76,2.76,0,0,0,1.193,1.294.241.241,0,1,0,.232-.423,2.279,2.279,0,0,1-1.158-1.658h1.07a.241.241,0,0,0,0-.482h-1.1v-1a.241.241,0,0,0-.482,0v1h-.871a.241.241,0,0,0,0,.482h.845a2.279,2.279,0,0,1-1.158,1.658Zm0,0"
                                    transform="translate(-97.72 -83.337)"
                                  />
                                </g>
                              </svg>
                              English
                            </Col>
                            <Col className="card-list-item card-list-item-border">
                              Spanish
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <div className="user-profile-heading">Experience</div>
                    </Row>
                    <Row>
                      <Card className="card-box">
                        <Card.Body className="card-list">
                          <Row>
                            <Col className="card-list-item">
                              <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 10.95 9.855"
                              >
                                <path
                                  id="suitcase"
                                  d="M10.4,1.643H8.03V.913A.914.914,0,0,0,7.118,0H3.833A.914.914,0,0,0,2.92.913v.73H.548A.548.548,0,0,0,0,2.19V6.253a.55.55,0,0,0,.365.515v2.54a.548.548,0,0,0,.548.548h9.125a.548.548,0,0,0,.548-.548V6.768a.55.55,0,0,0,.365-.515V2.19a.548.548,0,0,0-.548-.548ZM3.285.913A.548.548,0,0,1,3.833.365H7.118a.548.548,0,0,1,.548.548v.73H7.3V.913A.183.183,0,0,0,7.118.73H3.833A.183.183,0,0,0,3.65.913v.73H3.285Zm3.65.73H4.015V1.1h2.92ZM10.22,9.308a.183.183,0,0,1-.183.183H.913A.183.183,0,0,1,.73,9.308V6.831l4.015.554v.463a.548.548,0,0,0,.548.548h.365a.548.548,0,0,0,.548-.548V7.384l4.015-.554ZM5.84,7.848a.183.183,0,0,1-.183.183H5.293a.183.183,0,0,1-.183-.183v-1.1a.183.183,0,0,1,.183-.183h.365a.183.183,0,0,1,.183.183Zm4.745-1.6a.183.183,0,0,1-.157.181l-.051.007-4.173.575V6.753a.548.548,0,0,0-.548-.548H5.293a.548.548,0,0,0-.548.548v.263L.522,6.434a.183.183,0,0,1-.157-.181V2.19a.183.183,0,0,1,.183-.183H10.4a.183.183,0,0,1,.183.183Zm0,0"
                                />
                              </svg>
                              4 Years
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Route>
            <Route path="/dashboard/freelancer/details/applied">
              <div className="panel__main__freelancer" style={{ flex: 1 }}>
                <div className="panel__main__heading__row">
                  <div className="panel__main__heading__row__entry">
                    Company
                  </div>
                  <div className="panel__main__heading__row__entry">
                    Projects
                  </div>
                  <div className="panel__main__heading__row__entry">Date</div>
                  <div className="panel__main__heading__row__entry">Status</div>
                </div>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Pending</div>
                </Nav.Link>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Completed</div>
                </Nav.Link>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Pending</div>
                </Nav.Link>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Completed</div>
                </Nav.Link>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Pending</div>
                </Nav.Link>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Completed</div>
                </Nav.Link>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Pending</div>
                </Nav.Link>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Completed</div>
                </Nav.Link>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Pending</div>
                </Nav.Link>
                <Nav.Link className="panel__main__row">
                  <div className="panel__main__row__entry">Company Name</div>
                  <div className="panel__main__row__entry">Project X</div>
                  <div className="panel__main__row__entry">6/3/12</div>
                  <div className="panel__main__row__entry">Completed</div>
                </Nav.Link>
              </div>
            </Route>
            <Route path="/dashboard/freelancer/details/work-Experience">
              <Col style={{ padding: "0em" }}>
                <Row>
                  <Col className="user-profile-bullet-point">
                    <img
                      src={UserPic}
                      alt="linkedin"
                      style={{ width: "40px" }}
                    />
                    <div className="user-profile-dot"></div>
                    <div className="user-profile-line"></div>
                    <div className="user-profile-dot"></div>
                  </Col>
                  <Col>
                    <Row className="user-profile-heading">AIESEC</Row>
                    <Row className="user-profile-time-created">1 yer 1 mo</Row>
                    <Row className="user-profile-disignation">Lorem ipsum</Row>
                    <Row className="user-profile-date">2009-2010</Row>
                    <Row className="user-profile-content">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quidem neque maxime quam explicabo eaque sapiente
                      molestias ducimus excepturi, facilis sunt dolore
                      doloremque similique veniam quas et itaque. Consequatur
                      blanditiis quisquam placeat facilis?
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="user-profile-bullet-point">
                    <img
                      src={UserPic}
                      alt="linkedin"
                      style={{ width: "40px" }}
                    />
                    <div className="user-profile-dot"></div>
                    <div className="user-profile-line"></div>
                    <div className="user-profile-dot"></div>
                  </Col>
                  <Col>
                    <Row className="user-profile-heading">AIESEC</Row>
                    <Row className="user-profile-time-created">1 yer 1 mo</Row>
                    <Row className="user-profile-disignation">Lorem ipsum</Row>
                    <Row className="user-profile-date">2009-2010</Row>
                    <Row className="user-profile-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur aspernatur esse repellendus, sapiente quod
                      praesentium voluptas labore maiores modi libero, debitis
                      molestias dicta a similique quia, et officiis quam itaque.
                      Veniam, sit.
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Route>
            <Route path="/dashboard/freelancer/details/project-portfolio">
              <Col>
                <Row>
                  <Col>
                    <Row className="user-profile-heading">CRM</Row>
                    <Row className="user-profile-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur aspernatur esse repellendus, sapiente quod
                      praesentium voluptas labore maiores modi libero, debitis
                      molestias dicta a similique quia, et officiis quam itaque.
                      Veniam, sit.
                    </Row>
                    <Row>
                      <Col className="img-col">
                        <img
                          src={placeholderpic}
                          alt="placeholderpic"
                          className="placeholderpic"
                        />
                      </Col>
                      <Col className="img-col">
                        <img
                          src={placeholderpic}
                          alt="placeholderpic"
                          className="placeholderpic"
                        />
                      </Col>
                      <Col className="img-col">
                        <img
                          src={placeholderpic}
                          alt="placeholderpic"
                          className="placeholderpic"
                        />
                      </Col>
                      <Col className="img-col">
                        <img
                          src={placeholderpic}
                          alt="placeholderpic"
                          className="placeholderpic"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row className="user-profile-heading">CRM</Row>
                    <Row className="user-profile-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur aspernatur esse repellendus, sapiente quod
                      praesentium voluptas labore maiores modi libero, debitis
                      molestias dicta a similique quia, et officiis quam itaque.
                      Veniam, sit.
                    </Row>
                    <Row>
                      <Col className="img-col">
                        <img
                          src={placeholderpic}
                          alt="placeholderpic"
                          className="placeholderpic"
                        />
                      </Col>
                      <Col className="img-col">
                        <img
                          src={placeholderpic}
                          alt="placeholderpic"
                          className="placeholderpic"
                        />
                      </Col>
                      <Col className="img-col">
                        <img
                          src={placeholderpic}
                          alt="placeholderpic"
                          className="placeholderpic"
                        />
                      </Col>
                      <Col className="img-col">
                        <img
                          src={placeholderpic}
                          alt="placeholderpic"
                          className="placeholderpic"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Route>
            <Route path="/dashboard/freelancer/details/education">
              <Row
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <Col className="col-border-bottom">
                  <Row className="user-profile-heading">AIESEC</Row>
                  <Row className="user-profile-disignation">Lorem ipsum</Row>
                  <Row className="user-profile-content">2019-2020</Row>
                </Col>
                <Col className="col-border-bottom">
                  <Row className="user-profile-heading">AIESEC</Row>
                  <Row className="user-profile-disignation">Lorem ipsum</Row>
                  <Row className="user-profile-content">2019-2020</Row>
                </Col>
                <Col className="col-border-bottom">
                  <Row className="user-profile-heading">AIESEC</Row>
                  <Row className="user-profile-disignation">Lorem ipsum</Row>
                  <Row className="user-profile-content">2019-2020</Row>
                </Col>
                <Col
                  className="user-profile-heading"
                  style={{ background: "#f3f9f9", padding: ".8em 1em" }}
                >
                  Certificates
                </Col>
                <Col className="col-border-bottom">
                  <Row className="user-profile-heading">AIESEC</Row>
                  <Row className="user-profile-disignation">Lorem ipsum</Row>
                  <Row className="user-profile-content">2019-2020</Row>
                </Col>
                <Col className="col-border-bottom">
                  <Row className="user-profile-heading">AIESEC</Row>
                  <Row className="user-profile-disignation">Lorem ipsum</Row>
                  <Row className="user-profile-content">2019-2020</Row>
                </Col>
              </Row>
            </Route>
            <Route path="/dashboard/freelancer/details/contact">
              <Col>
                <Row className="user-profile-heading">Email</Row>
                <Row className="user-profile-content">someone@gmail.com</Row>
                <Row className="user-profile-heading">Address</Row>
                <Row className="user-profile-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, nostrum!
                </Row>
                <Row className="user-profile-heading">Phone</Row>
                <Row className="user-profile-content">+92 123456789</Row>
                <Row className="user-profile-heading">Social</Row>
                <Row className="user-profile-content">
                  <a href="#" className="profile-social-link">
                    <img src={facebookicon} alt="facebook" />
                  </a>
                  <a href="#" className="profile-social-link">
                    <img src={googleicon} alt="google" />
                  </a>
                  <a href="#" className="profile-social-link">
                    <img src={linkedinicon} alt="linkedin" />
                  </a>
                </Row>
              </Col>
            </Route>
          </Switch>
        </Row>
      </Col>
    );
  }
}
