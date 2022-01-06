import React from "react";
import "./PaymentsPanel.scss";
import { Col, Row, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import InputboxComponent from "../components/Inputbox";
import ButtonComponent from "../components/Button";

export default class PaymentsPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Payments</div>
        <div className="panel__main__payments">
          <Col>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Nav variant="pills" defaultActiveKey="/dashboard/payments">
                <Nav.Link
                  to="/dashboard/payments/"
                  href="/dashboard/payments"
                  as={Link}
                  className="nav__link__horizontal"
                >
                  History
                </Nav.Link>
                <Nav.Link
                  to="/dashboard/payments/pending"
                  as={Link}
                  className="nav__link__horizontal"
                  eventKey="link-1"
                >
                  Pendings
                </Nav.Link>
              </Nav>
              <div className="payments__input__form__input__box">
                <div className="payments__input__form__input__field">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.077"
                    height="17.077"
                    viewBox="0 0 17.077 17.077"
                    style={{ margin: "0em 1em" }}
                  >
                    <g
                      id="_622669"
                      data-name="622669"
                      transform="translate(0 -0.003)"
                    >
                      <g
                        id="Group_509"
                        data-name="Group 509"
                        transform="translate(0 0.003)"
                      >
                        <path
                          id="Path_755"
                          data-name="Path 755"
                          d="M16.868,15.865l-4.856-4.856a6.772,6.772,0,1,0-1.006,1.006l4.856,4.856a.711.711,0,1,0,1.006-1.006ZM6.76,12.1A5.336,5.336,0,1,1,12.1,6.762,5.342,5.342,0,0,1,6.76,12.1Z"
                          transform="translate(0 -0.003)"
                          fill="#15878c"
                        />
                      </g>
                    </g>
                  </svg>
                  <InputboxComponent type="text" ClassName="search__box" />
                </div>
                <div className="payments__input__form__input__field__cta">
                  <ButtonComponent variant="btn" placeholder="Search" />
                </div>
              </div>
            </Row>
            <Row>
              <Switch>
                <Route path="/dashboard/payments" exact>
                  <div className="panel__main__payments" style={{ flex: 1 }}>
                    <div className="panel__main__heading__row">
                      <div className="panel__main__heading__row__entry">
                        Transaction ID
                      </div>
                      <div className="panel__main__heading__row__entry">
                        Company Name
                      </div>
                      <div className="panel__main__heading__row__entry">
                        Date
                      </div>
                      <div className="panel__main__heading__row__entry">
                        Plan
                      </div>
                      <div className="panel__main__heading__row__entry">
                        Amount
                      </div>
                    </div>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">1325440</div>
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <div className="page__slider">
                      <div className="slider">
                        <Nav
                          variant="pills"
                          defaultActiveKey="/dashboard/payments"
                        >
                          <Nav.Link
                            to="/dashboard/payments"
                            href="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                          >
                            1
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-1"
                          >
                            2
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-2"
                          >
                            3
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-3"
                          >
                            4
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-4"
                          >
                            5
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-5"
                          >
                            6
                          </Nav.Link>
                        </Nav>
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/dashboard/payments/pending">
                  <div className="panel__main__payments" style={{ flex: 1 }}>
                    <div className="panel__main__heading__row">
                      <div className="panel__main__heading__row__entry">
                        Company Name
                      </div>
                      <div className="panel__main__heading__row__entry">
                        Date
                      </div>
                      <div className="panel__main__heading__row__entry">
                        Plan
                      </div>
                      <div className="panel__main__heading__row__entry">
                        Amount
                      </div>
                    </div>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <Nav.Link className="panel__main__row">
                      <div className="panel__main__row__entry">DSME.co</div>
                      <div className="panel__main__row__entry">6/4/21</div>
                      <div className="panel__main__row__entry">Plan Name</div>
                      <div className="panel__main__row__entry">50$</div>
                    </Nav.Link>
                    <div className="page__slider">
                      <div className="slider">
                        <Nav
                          variant="pills"
                          defaultActiveKey="/dashboard/payments"
                        >
                          <Nav.Link
                            to="/dashboard/payments"
                            href="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                          >
                            1
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-1"
                          >
                            2
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-2"
                          >
                            3
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-3"
                          >
                            4
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-4"
                          >
                            5
                          </Nav.Link>
                          <Nav.Link
                            to="/dashboard/payments"
                            as={Link}
                            className="nav__link__horizontal"
                            eventKey="link-5"
                          >
                            6
                          </Nav.Link>
                        </Nav>
                      </div>
                    </div>
                  </div>
                </Route>
              </Switch>
            </Row>
          </Col>
        </div>
      </div>
    );
  }
}
