import React from "react";
import "./RoleManagerPanel.scss";
import Button from "../components/Button";
import { Nav, Form, Button as ButtonReact } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import InputBox from "../components/Inputbox";

export default class RoleManagerPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Role Manager</div>
        <div className="panel__main__role__manager">
          <Switch>
            <Route path="/dashboard/role-manager" exact>
              <div className="panel__main__role__manager__row">
                <div className="panel__main__role__manager__info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat qui cupiditate nostrum amet! Iusto, iure.
                </div>
                <div className="panel__main__role__manager__cta__row">
                  <div className="panel__main__role__manager__cta">
                    <Button
                      variant="link"
                      toPath="/dashboard/role-manager/new-role"
                      placeholder="Add New Role"
                    />
                  </div>
                  <div className="panel__main__role__manager__cta">
                    <Button
                      variant="link"
                      toPath="/dashboard/role-manager/new-user"
                      placeholder="Add New User"
                    />
                  </div>
                </div>
              </div>
              <div className="panel__main__role__manager__content">
                <div className="panel__main__freelancer">
                  <div className="panel__main__heading__row">
                    <div className="panel__main__heading__row__entry">
                      Users
                    </div>
                    <div className="panel__main__heading__row__entry">
                      Date Created
                    </div>
                    <div className="panel__main__heading__row__entry">Role</div>
                    <div
                      className="panel__main__heading__row__entry"
                      style={{ color: "transparent" }}
                    >
                      edit
                    </div>
                  </div>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Umar Riaz</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">Accountant</div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/role-manager/edit-role"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <div className="page__slider">
                    <div className="slider">
                      <Nav
                        variant="pills"
                        defaultActiveKey="/dashboard/role-manager"
                      >
                        <Nav.Link
                          to="/dashboard/role-manager"
                          href="/dashboard/role-manager"
                          as={Link}
                          className="nav__link__horizontal"
                        >
                          1
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/role-manager"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-1"
                        >
                          2
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/role-manager"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-2"
                        >
                          3
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/role-manager"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-3"
                        >
                          4
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/role-manager"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-4"
                        >
                          5
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/role-manager"
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
            </Route>
            <Route path="/dashboard/role-manager/new-role">
              <div className="panel__main__role__manager__new__role">
                <div className="panel__main__role__manager__heading__row">
                  <Nav.Link
                    as={Link}
                    to="/dashboard/role-manager"
                    className="screen__back__btn"
                    style={{ marginRight: "0.3em" }}
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
                  <div className="panel__main__role__manager__heading">
                    Add New Role
                  </div>
                </div>
                <div className="panel__main__role__manager__input__row">
                  <InputBox placeholder="Role Name" ClassName="input__box" />
                </div>
                <div className="panel__main__role__manager__heading__row">
                  <div className="panel__main__role__manager__heading">
                    Role
                  </div>
                </div>
                <div className="panel__main__role__manager__check__box__row">
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-2"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-2">Dashboard</label>
                  </div>
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-3"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-3">Freelancers</label>
                  </div>
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-4"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-4">Job Seekers</label>
                  </div>
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-5"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-5">Companies</label>
                  </div>
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-6"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-6">Users Manager</label>
                  </div>
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-7"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-7">Analysis</label>
                  </div>
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-8"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-8">Messages</label>
                  </div>
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-9"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-9">Payments</label>
                  </div>
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-10"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-10">Plans</label>
                  </div>
                  <div className="panel__main__role__manager__check__box">
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-11"
                      type="checkbox"
                      value="value1"
                    />
                    <label htmlFor="styled-checkbox-11">Filters</label>
                  </div>
                </div>
                <div className="panel__main__role__manager__new__role__cta">
                  <Button variant="btn" placeholder="Create" />
                </div>
              </div>
            </Route>
            <Route path="/dashboard/role-manager/edit-role">
              <div className="panel__main__role__manager__new__user">
                <div className="panel__main__role__manager__heading__row">
                  <Nav.Link
                    as={Link}
                    to="/dashboard/role-manager"
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
                  <div className="panel__main__role__manager__heading">
                    Edit
                  </div>
                </div>
                <div className="panel__main__role__manager__input__rows">
                  <div
                    className="panel__main__role__manager__input__row"
                    style={{ marginRight: "1em" }}
                  >
                    <InputBox
                      placeholder="John"
                      ClassName="input__box"
                      type="text"
                    />
                  </div>
                  <div className="panel__main__role__manager__input__row">
                    <InputBox
                      placeholder="Doe"
                      ClassName="input__box"
                      type="text"
                    />
                  </div>
                </div>
                <div className="panel__main__role__manager__input__rows">
                  <div
                    className="panel__main__role__manager__input__row"
                    style={{ marginRight: "1em" }}
                  >
                    <InputBox
                      placeholder="John Doe@gmail.com"
                      ClassName="input__box"
                      type="email"
                    />
                  </div>
                  <div className="panel__main__role__manager__input__row">
                    <InputBox
                      placeholder="john doe"
                      ClassName="input__box"
                      type="text"
                    />
                  </div>
                </div>
                <div className="panel__main__role__manager__input__rows">
                  <div
                    className="panel__main__role__manager__input__row"
                    style={{ marginRight: "1em" }}
                  >
                    <InputBox
                      placeholder="Password"
                      ClassName="input__box"
                      type="password"
                    />
                  </div>
                  <div className="panel__main__role__manager__input__row">
                    <InputBox
                      placeholder="Re-Enter Password"
                      ClassName="input__box"
                      type="password"
                    />
                  </div>
                </div>
                <div className="panel__main__role__manager__new__role__heading">
                  Assign Role
                </div>
                <div className="panel__main__role__manager__input__rows">
                  <div className="panel__main__role__manager__select__row">
                    <Form.Control as="select" className="input__box">
                      <option value="">Accountant</option>
                      <option value="">HR</option>
                    </Form.Control>
                  </div>
                </div>
                <div className="panel__main__role__manager__new__role__cta">
                  <Button variant="btn" placeholder="Save Changes" />
                </div>
                <div className="panel__main__role__manager__new__role__cta">
                  <ButtonReact className="btn__cta__reverse">
                    Delete User
                  </ButtonReact>
                </div>
              </div>
            </Route>
            <Route path="/dashboard/role-manager/new-user">
              <div className="panel__main__role__manager__new__user">
                <div className="panel__main__role__manager__heading__row">
                  <Nav.Link
                    as={Link}
                    to="/dashboard/role-manager"
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
                  <div className="panel__main__role__manager__heading">
                    Add New User
                  </div>
                </div>
                <div className="panel__main__role__manager__input__rows">
                  <div
                    className="panel__main__role__manager__input__row"
                    style={{ marginRight: "1em" }}
                  >
                    <InputBox
                      placeholder="First Name"
                      ClassName="input__box"
                      type="text"
                    />
                  </div>
                  <div className="panel__main__role__manager__input__row">
                    <InputBox
                      placeholder="Last Name"
                      ClassName="input__box"
                      type="text"
                    />
                  </div>
                </div>
                <div className="panel__main__role__manager__input__rows">
                  <div
                    className="panel__main__role__manager__input__row"
                    style={{ marginRight: "1em" }}
                  >
                    <InputBox
                      placeholder="Email Address"
                      ClassName="input__box"
                      type="email"
                    />
                  </div>
                  <div className="panel__main__role__manager__input__row">
                    <InputBox
                      placeholder="User Name"
                      ClassName="input__box"
                      type="text"
                    />
                  </div>
                </div>
                <div className="panel__main__role__manager__input__rows">
                  <div
                    className="panel__main__role__manager__input__row"
                    style={{ marginRight: "1em" }}
                  >
                    <InputBox
                      placeholder="Password"
                      ClassName="input__box"
                      type="password"
                    />
                  </div>
                  <div className="panel__main__role__manager__input__row">
                    <InputBox
                      placeholder="Re-Enter Password"
                      ClassName="input__box"
                      type="password"
                    />
                  </div>
                </div>
                <div className="panel__main__role__manager__new__role__heading">
                  Assign Role
                </div>
                <div className="panel__main__role__manager__input__rows">
                  <div className="panel__main__role__manager__select__row">
                    <Form.Control as="select" className="input__box">
                      <option value="">Accountant</option>
                      <option value="">HR</option>
                    </Form.Control>
                  </div>
                </div>
                <div className="panel__main__role__manager__new__role__cta">
                  <Button variant="btn" placeholder="Create" />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
