import React from "react";
import "./FiltersPanel.scss";
import { Col, Row, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import FilterInputForm from "../components/FilterInputForm";

export default class FiltersPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Filters</div>
        <div className="panel__main__filter">
          <Col>
            <Row>
              <Nav variant="pills" defaultActiveKey="/dashboard/filters">
                <Nav.Link
                  to="/dashboard/filters/"
                  href="/dashboard/filters"
                  as={Link}
                  className="nav__link__horizontal"
                >
                  Company
                </Nav.Link>
                <Nav.Link
                  to="/dashboard/filters/jobseeker"
                  as={Link}
                  className="nav__link__horizontal"
                  eventKey="link-1"
                >
                  Job Seeker
                </Nav.Link>
                <Nav.Link
                  to="/dashboard/filters/freelancer"
                  as={Link}
                  className="nav__link__horizontal"
                  eventKey="link-2"
                >
                  Freelancer
                </Nav.Link>
              </Nav>
            </Row>
            <Row>
              <Switch>
                <Route path="/dashboard/filters" exact>
                  <div className="filter__content">
                    <FilterInputForm heading="Skills" filterId="filter_1" />
                    <FilterInputForm
                      heading="Industries Worked In"
                      filterId="filter_2"
                    />
                    <FilterInputForm
                      heading="Experience Level"
                      filterId="filter_3"
                    />
                    <FilterInputForm heading="Job Type" filterId="filter_4" />
                    <FilterInputForm heading="Education" filterId="filter_5" />
                    <FilterInputForm
                      heading="Availability"
                      filterId="filter_6"
                    />
                    <FilterInputForm heading="Languages" filterId="filter_7" />
                  </div>
                </Route>
                <Route path="/dashboard/filters/jobseeker">
                  <div className="filter__content">
                    <FilterInputForm heading="Skills" filterId="filter_8" />
                  </div>
                </Route>
                <Route path="/dashboard/filters/freelancer">
                  <div className="filter__content">
                    <FilterInputForm
                      heading="Contract Type"
                      filterId="filter_9"
                    />
                    <FilterInputForm
                      heading="Field Of Work"
                      filterId="filter_10"
                    />
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
