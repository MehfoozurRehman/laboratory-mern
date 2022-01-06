import React from "react";
import { Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

export default class PostingDetails extends React.Component {
  render() {
    return (
      <div className="panel__conatainer" style={{ flex: 1 }}>
        <div className="panel__heading">Applicants of JobName</div>
        <div className="panel__main__companies">
          <div className="panel__main__heading__row">
            <div className="panel__main__heading__row__entry">ID</div>
            <div className="panel__main__heading__row__entry">Name</div>
            <div className="panel__main__heading__row__entry">Experiance</div>
            <div className="panel__main__heading__row__entry">Location</div>
          </div>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard/companies/details"
            className="panel__main__row"
          >
            <div className="panel__main__row__entry">1325440</div>
            <div className="panel__main__row__entry">Umar Riaz</div>
            <div className="panel__main__row__entry">20</div>
            <div className="panel__main__row__entry">California</div>
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
      </div>
    );
  }
}
