import React from "react";
import "./CompanyPanel.scss";
import { Nav, Row, Col, Button, Form } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";

export default class CompanyPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Company - Telenor</div>
        <Switch>
          <Route path="/dashboard/companies" exact>
            <div className="panel__main__dashboard">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">ID</div>
                <div className="panel__main__heading__row__entry">Name</div>
                <div className="panel__main__heading__row__entry">
                  Jobs Posted
                </div>
                <div className="panel__main__heading__row__entry">Location</div>
                <div className="panel__main__heading__row__entry">Plan</div>
                <div className="panel__main__heading__row__entry">
                  Date Joined
                </div>
                <div className="panel__main__heading__row__entry">Credits</div>
              </div>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/companies/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">DSME.co</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
                <div className="panel__main__row__entry">Plan Name</div>
                <div className="panel__main__row__entry">6/4/21</div>
                <div className="panel__main__row__entry">300</div>
              </Nav.Link>
              <div className="page__slider">
                <div className="slider">
                  <Nav variant="pills" defaultActiveKey="/dashboard/companies">
                    <Nav.Link
                      to="/dashboard/companies"
                      href="/dashboard/companies"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/companies"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/companies"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/companies"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/companies"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/companies"
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
          <Route path="/dashboard/companies/details">
            <CompanyDetails />
          </Route>
        </Switch>
      </div>
    );
  }
}
