import React from "react";
import "./PlansPanel.scss";
import Button from "../components/Button";
import { Nav, Form, Button as ButtonReact, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import InputBox from "../components/Inputbox";

export default class PlansPanel extends React.Component {
  render() {
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Plans</div>
        <div className="panel__main__plans">
          <Switch>
            <Route path="/dashboard/plans" exact>
              <div className="panel__main__role__manager__row">
                <div className="panel__main__role__manager__info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat qui cupiditate nostrum amet! Iusto, iure.
                </div>
                <div className="panel__main__role__manager__cta__row">
                  <div className="panel__main__role__manager__cta">
                    <Button
                      variant="link"
                      toPath="/dashboard/plans/new-plan"
                      placeholder="Add New"
                    />
                  </div>
                </div>
              </div>
              <div className="panel__main__role__manager__content">
                <div className="panel__main__freelancer">
                  <div className="panel__main__heading__row">
                    <div className="panel__main__heading__row__entry">
                      Plan Name
                    </div>
                    <div className="panel__main__heading__row__entry">
                      Plan Type
                    </div>
                    <div className="panel__main__heading__row__entry">
                      Plan Created
                    </div>
                    <div className="panel__main__heading__row__entry">
                      Package
                    </div>
                    <div
                      className="panel__main__heading__row__entry"
                      style={{ color: "transparent" }}
                    >
                      edit
                    </div>
                  </div>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan X</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      10 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Y</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      20 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Z</div>
                    <div className="panel__main__row__entry">Monthly</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      EUR 279 / month
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan X</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      10 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Y</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      20 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Z</div>
                    <div className="panel__main__row__entry">Monthly</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      EUR 279 / month
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan X</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      10 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Y</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      20 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Z</div>
                    <div className="panel__main__row__entry">Monthly</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      EUR 279 / month
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan X</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      10 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Y</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      20 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Z</div>
                    <div className="panel__main__row__entry">Monthly</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      EUR 279 / month
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan X</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      10 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Y</div>
                    <div className="panel__main__row__entry">Sell Credits</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      20 credits (EUR 54 / credit)
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <Nav.Link className="panel__main__row">
                    <div className="panel__main__row__entry">Plan Z</div>
                    <div className="panel__main__row__entry">Monthly</div>
                    <div className="panel__main__row__entry">6/4/21</div>
                    <div className="panel__main__row__entry">
                      EUR 279 / month
                    </div>
                    <div className="panel__main__row__entry">
                      <div className="panel__main__row__entry__cta">
                        <Button
                          variant="link"
                          toPath="/dashboard/plans/edit-plan"
                          placeholder="Edit"
                        />
                      </div>
                    </div>
                  </Nav.Link>
                  <div className="page__slider">
                    <div className="slider">
                      <Nav variant="pills" defaultActiveKey="/dashboard/plans">
                        <Nav.Link
                          to="/dashboard/plans"
                          href="/dashboard/plans"
                          as={Link}
                          className="nav__link__horizontal"
                        >
                          1
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/plans"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-1"
                        >
                          2
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/plans"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-2"
                        >
                          3
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/plans"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-3"
                        >
                          4
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/plans"
                          as={Link}
                          className="nav__link__horizontal"
                          eventKey="link-4"
                        >
                          5
                        </Nav.Link>
                        <Nav.Link
                          to="/dashboard/plans"
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
            <Route path="/dashboard/plans/new-plan">
              <div className="panel__main__role__manager__new__role">
                <div className="panel__main__role__manager__heading__row">
                  <Nav.Link
                    as={Link}
                    to="/dashboard/plans"
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
                    Add New Plan
                  </div>
                </div>
                <div className="panel__main__role__manager__input__row">
                  <InputBox placeholder="Plan Name" ClassName="input__box" />
                </div>
                <div>
                  <Nav variant="pills" defaultActiveKey="/dashboard/plans">
                    <Nav.Link
                      to="/dashboard/plans/new-plan"
                      href="/dashboard/plans/new-plan"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      Yearly
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/plans/new-plan/monthly"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      Monthly
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/plans/new-plan/quaterly"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      Quaterly
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/plans/new-plan/per-screen"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      Per Screen
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/plans/new-plan/buy-credits"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      Buy Credits
                    </Nav.Link>
                  </Nav>
                </div>
                <div>
                  <Switch>
                    <Route path="/dashboard/plans/new-plan" exact>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="Cost" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox
                          placeholder="Credits"
                          ClassName="input__box"
                        />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Save Plan" />
                      </div>
                    </Route>
                    <Route path="/dashboard/plans/new-plan/monthly">
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="Cost" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox
                          placeholder="Credits"
                          ClassName="input__box"
                        />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Save Plan" />
                      </div>
                    </Route>
                    <Route path="/dashboard/plans/new-plan/quaterly">
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="Cost" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox
                          placeholder="Credits"
                          ClassName="input__box"
                        />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Save Plan" />
                      </div>
                    </Route>
                    <Route path="/dashboard/plans/new-plan/per-screen">
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="Cost" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox
                          placeholder="Credits"
                          ClassName="input__box"
                        />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Save Plan" />
                      </div>
                    </Route>
                    <Route path="/dashboard/plans/new-plan/buy-credits">
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="Cost" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox
                          placeholder="Credits"
                          ClassName="input__box"
                        />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Save Plan" />
                      </div>
                    </Route>
                  </Switch>
                </div>
              </div>
            </Route>
            <Route path="/dashboard/plans/edit-plan">
              <div className="panel__main__role__manager__new__role">
                <div className="panel__main__role__manager__heading__row">
                  <Nav.Link
                    as={Link}
                    to="/dashboard/plans"
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
                    Edit Plan
                  </div>
                </div>
                <div className="panel__main__role__manager__input__row">
                  <InputBox placeholder="Plan Name" ClassName="input__box" />
                </div>
                <div>
                  <Nav variant="pills" defaultActiveKey="/dashboard/plans">
                    <Nav.Link
                      to="/dashboard/plans/edit-plan"
                      href="/dashboard/plans/edit-plan"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      Yearly
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/plans/edit-plan/monthly"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      Monthly
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/plans/edit-plan/quaterly"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      Quaterly
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/plans/edit-plan/per-screen"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      Per Screen
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/plans/edit-plan/buy-credits"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      Buy Credits
                    </Nav.Link>
                  </Nav>
                </div>
                <div>
                  <Switch>
                    <Route path="/dashboard/plans/edit-plan" exact>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="279" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="10" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Edit Plan" />
                      </div>
                    </Route>
                    <Route path="/dashboard/plans/edit-plan/monthly">
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="279" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="10" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Edit Plan" />
                      </div>
                    </Route>
                    <Route path="/dashboard/plans/edit-plan/quaterly">
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="279" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="10" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Edit Plan" />
                      </div>
                    </Route>
                    <Route path="/dashboard/plans/edit-plan/per-screen">
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="279" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="10" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Edit Plan" />
                      </div>
                    </Route>
                    <Route path="/dashboard/plans/edit-plan/buy-credits">
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="279" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__input__row">
                        <InputBox placeholder="10" ClassName="input__box" />
                      </div>
                      <div className="panel__main__role__manager__new__role__cta">
                        <Button variant="btn" placeholder="Edit Plan" />
                      </div>
                    </Route>
                  </Switch>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
