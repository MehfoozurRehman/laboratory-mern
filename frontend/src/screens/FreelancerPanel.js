import React from "react";
import "./FreelancerPanel.scss";
import { Form, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfileFreelancer";
import ButtonComponent from "../components/Button";
import InputBox from "../components/Inputbox";
import Select from "react-select";

export default class FreelancerPanel extends React.Component {
  render() {
    const selectOptions = [
      { value: "Germany", label: "Germany" },
      { value: "English", label: "English" },
      { value: "Russian", label: "Russian" },
      { value: "Hindi", label: "Hindi" },
    ];
    return (
      <div className="panel__conatainer">
        <div className="panel__heading">Freelancers</div>
        <Switch>
          <Route path="/dashboard/freelancer" exact>
            <div className="panel__main__freelancer">
              <div className="panel__main__heading__row">
                <div className="panel__main__heading__row__entry">ID</div>
                <div className="panel__main__heading__row__entry">Name</div>
                <div className="panel__main__heading__row__entry">
                  Projects Applied
                </div>
                <div className="panel__main__heading__row__entry">Location</div>
              </div>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dashboard/freelancer/details"
                className="panel__main__row"
              >
                <div className="panel__main__row__entry">1325440</div>
                <div className="panel__main__row__entry">Umar Riaz</div>
                <div className="panel__main__row__entry">20</div>
                <div className="panel__main__row__entry">California</div>
              </Nav.Link>
              <div className="page__slider">
                <div className="slider">
                  <Nav variant="pills" defaultActiveKey="/dashboard/freelancer">
                    <Nav.Link
                      to="/dashboard/freelancer"
                      href="/dashboard/freelancer"
                      as={Link}
                      className="nav__link__horizontal"
                    >
                      1
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/freelancer"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-1"
                    >
                      2
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/freelancer"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-2"
                    >
                      3
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/freelancer"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-3"
                    >
                      4
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/freelancer"
                      as={Link}
                      className="nav__link__horizontal"
                      eventKey="link-4"
                    >
                      5
                    </Nav.Link>
                    <Nav.Link
                      to="/dashboard/freelancer"
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
          <Route path="/dashboard/freelancer/personal">
            <div className="company__details__content">
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.419"
                    height="17.918"
                    viewBox="0 0 13.419 17.918"
                  >
                    <g
                      id="Group_510"
                      data-name="Group 510"
                      transform="translate(-649 -306.859)"
                    >
                      <path
                        id="Path_285"
                        data-name="Path 285"
                        d="M145.333,176.081a2.04,2.04,0,1,0-2.04-2.04A2.04,2.04,0,0,0,145.333,176.081Zm0-3.288a1.251,1.251,0,1,1-1.251,1.251A1.251,1.251,0,0,1,145.333,172.793Zm0,0"
                        transform="translate(510.707 140.29)"
                        fill="#374957"
                      />
                      <path
                        id="Path_286"
                        data-name="Path 286"
                        d="M111.8,325.122a3.062,3.062,0,0,0-2.218.927,3.273,3.273,0,0,0-.916,2.317.4.4,0,0,0,.395.395h5.478a.4.4,0,0,0,.395-.395,3.273,3.273,0,0,0-.916-2.317A3.062,3.062,0,0,0,111.8,325.122Zm-2.317,2.85a2.414,2.414,0,0,1,.663-1.37,2.325,2.325,0,0,1,3.307,0,2.426,2.426,0,0,1,.663,1.37Zm0,0"
                        transform="translate(544.332 -7.998)"
                        fill="#374957"
                      />
                      <path
                        id="Path_287"
                        data-name="Path 287"
                        d="M6.864,0H-2.609A1.974,1.974,0,0,0-4.582,1.973V15.945a1.974,1.974,0,0,0,1.973,1.973H6.864a1.974,1.974,0,0,0,1.973-1.973V1.973A1.974,1.974,0,0,0,6.864,0ZM8.048,15.945a1.188,1.188,0,0,1-1.184,1.184H-2.609a1.188,1.188,0,0,1-1.184-1.184V1.973A1.188,1.188,0,0,1-2.609.789H6.864A1.188,1.188,0,0,1,8.048,1.973Zm0,0"
                        transform="translate(653.582 306.859)"
                        fill="#374957"
                      />
                      <path
                        id="Path_288"
                        data-name="Path 288"
                        d="M143.688,59.664h3.157a.395.395,0,1,0,0-.789h-3.157a.395.395,0,1,0,0,.789Zm0,0"
                        transform="translate(510.707 249.843)"
                        fill="#374957"
                      />
                    </g>
                  </svg>
                  <div className="company__details__row__attribute__heading">
                    First Name
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <InputBox
                    placeholder="John"
                    ClassName="input__box"
                    type="text"
                  />
                </div>
              </div>
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.419"
                    height="17.918"
                    viewBox="0 0 13.419 17.918"
                  >
                    <g
                      id="Group_510"
                      data-name="Group 510"
                      transform="translate(-649 -306.859)"
                    >
                      <path
                        id="Path_285"
                        data-name="Path 285"
                        d="M145.333,176.081a2.04,2.04,0,1,0-2.04-2.04A2.04,2.04,0,0,0,145.333,176.081Zm0-3.288a1.251,1.251,0,1,1-1.251,1.251A1.251,1.251,0,0,1,145.333,172.793Zm0,0"
                        transform="translate(510.707 140.29)"
                        fill="#374957"
                      />
                      <path
                        id="Path_286"
                        data-name="Path 286"
                        d="M111.8,325.122a3.062,3.062,0,0,0-2.218.927,3.273,3.273,0,0,0-.916,2.317.4.4,0,0,0,.395.395h5.478a.4.4,0,0,0,.395-.395,3.273,3.273,0,0,0-.916-2.317A3.062,3.062,0,0,0,111.8,325.122Zm-2.317,2.85a2.414,2.414,0,0,1,.663-1.37,2.325,2.325,0,0,1,3.307,0,2.426,2.426,0,0,1,.663,1.37Zm0,0"
                        transform="translate(544.332 -7.998)"
                        fill="#374957"
                      />
                      <path
                        id="Path_287"
                        data-name="Path 287"
                        d="M6.864,0H-2.609A1.974,1.974,0,0,0-4.582,1.973V15.945a1.974,1.974,0,0,0,1.973,1.973H6.864a1.974,1.974,0,0,0,1.973-1.973V1.973A1.974,1.974,0,0,0,6.864,0ZM8.048,15.945a1.188,1.188,0,0,1-1.184,1.184H-2.609a1.188,1.188,0,0,1-1.184-1.184V1.973A1.188,1.188,0,0,1-2.609.789H6.864A1.188,1.188,0,0,1,8.048,1.973Zm0,0"
                        transform="translate(653.582 306.859)"
                        fill="#374957"
                      />
                      <path
                        id="Path_288"
                        data-name="Path 288"
                        d="M143.688,59.664h3.157a.395.395,0,1,0,0-.789h-3.157a.395.395,0,1,0,0,.789Zm0,0"
                        transform="translate(510.707 249.843)"
                        fill="#374957"
                      />
                    </g>
                  </svg>
                  <div className="company__details__row__attribute__heading">
                    Last Name
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <InputBox
                    placeholder="Doe"
                    ClassName="input__box"
                    type="text"
                  />
                </div>
              </div>
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.919"
                    height="11.946"
                    viewBox="0 0 17.919 11.946"
                  >
                    <g id="mail" transform="translate(0 -85.333)">
                      <g
                        id="Group_202"
                        data-name="Group 202"
                        transform="translate(0 85.333)"
                      >
                        <path
                          id="Path_292"
                          data-name="Path 292"
                          d="M17,85.333H.919A.922.922,0,0,0,0,86.252V96.36a.922.922,0,0,0,.919.919H17a.922.922,0,0,0,.919-.919V86.252A.922.922,0,0,0,17,85.333Zm-.345.689L9.488,91.4a.961.961,0,0,1-1.057,0L1.264,86.022Zm-3.828,5.73,3.905,4.824.013.013H1.174l.013-.013,3.905-4.824a.345.345,0,0,0-.536-.434L.689,96.1V86.453l7.328,5.5a1.645,1.645,0,0,0,1.884,0l7.328-5.5V96.1l-3.867-4.777a.345.345,0,0,0-.536.434Z"
                          transform="translate(0 -85.333)"
                          fill="#374957"
                        />
                      </g>
                    </g>
                  </svg>

                  <div className="company__details__row__attribute__heading">
                    Email
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <InputBox
                    placeholder="Tele@gmail.com"
                    ClassName="input__box"
                    type="email"
                  />
                </div>
              </div>
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.428"
                    height="15.45"
                    viewBox="0 0 15.428 15.45"
                  >
                    <g
                      id="Group_513"
                      data-name="Group 513"
                      transform="translate(-648 -498.215)"
                    >
                      <g id="phone-call" transform="translate(647.655 498.214)">
                        <g
                          id="Group_201"
                          data-name="Group 201"
                          transform="translate(0.344 0)"
                        >
                          <path
                            id="Path_289"
                            data-name="Path 289"
                            d="M12.544,36.083a1.52,1.52,0,0,0-1.1-.505,1.571,1.571,0,0,0-1.115.5L9.3,37.107c-.085-.046-.17-.088-.251-.13-.117-.059-.228-.114-.323-.173a11.2,11.2,0,0,1-2.684-2.446,6.607,6.607,0,0,1-.88-1.389c.267-.245.515-.5.757-.743.091-.091.183-.186.274-.277a1.5,1.5,0,0,0,0-2.257L5.3,28.8c-.1-.1-.205-.205-.3-.31-.2-.2-.4-.411-.613-.607a1.544,1.544,0,0,0-1.092-.479,1.6,1.6,0,0,0-1.109.479l-.007.007L1.066,29.01a2.386,2.386,0,0,0-.708,1.516,5.716,5.716,0,0,0,.417,2.42A14.041,14.041,0,0,0,3.27,37.107a15.346,15.346,0,0,0,5.11,4,7.961,7.961,0,0,0,2.87.848c.068,0,.14.007.205.007a2.457,2.457,0,0,0,1.882-.809c0-.007.01-.01.013-.016a7.413,7.413,0,0,1,.571-.59c.14-.134.284-.274.424-.421A1.627,1.627,0,0,0,14.836,39a1.567,1.567,0,0,0-.5-1.118Zm1.167,3.434s0,0,0,0c-.127.137-.258.261-.4.4a8.574,8.574,0,0,0-.629.652,1.572,1.572,0,0,1-1.226.518c-.049,0-.1,0-.15,0a7.073,7.073,0,0,1-2.544-.763,14.485,14.485,0,0,1-4.813-3.77A13.239,13.239,0,0,1,1.6,32.64,4.656,4.656,0,0,1,1.238,30.6a1.5,1.5,0,0,1,.45-.968L2.8,28.518a.741.741,0,0,1,.5-.232.7.7,0,0,1,.476.228l.01.01c.2.186.388.378.587.584.1.1.205.209.31.316l.89.89a.622.622,0,0,1,0,1.011c-.095.095-.186.189-.28.28-.274.28-.535.541-.818.8-.007.007-.013.01-.016.016a.665.665,0,0,0-.17.74l.01.029a7.147,7.147,0,0,0,1.053,1.719l0,0a11.969,11.969,0,0,0,2.9,2.635,4.451,4.451,0,0,0,.4.218c.117.059.228.114.323.173.013.007.026.016.039.023a.707.707,0,0,0,.323.082.7.7,0,0,0,.5-.225L10.943,36.7a.738.738,0,0,1,.492-.245.664.664,0,0,1,.47.238l.007.007,1.8,1.8A.645.645,0,0,1,13.711,39.517Z"
                            transform="translate(-0.344 -26.512)"
                            fill="#374957"
                          />
                          <path
                            id="Path_290"
                            data-name="Path 290"
                            d="M245.306,86.8a4.2,4.2,0,0,1,3.417,3.417.438.438,0,0,0,.434.365.582.582,0,0,0,.075-.007.441.441,0,0,0,.362-.509,5.075,5.075,0,0,0-4.135-4.135.443.443,0,0,0-.509.359A.435.435,0,0,0,245.306,86.8Z"
                            transform="translate(-236.968 -83.123)"
                            fill="#374957"
                          />
                          <path
                            id="Path_291"
                            data-name="Path 291"
                            d="M256.1,6.816A8.356,8.356,0,0,0,249.287.007a.44.44,0,1,0-.143.867,7.464,7.464,0,0,1,6.085,6.085.438.438,0,0,0,.434.365.582.582,0,0,0,.075-.007A.432.432,0,0,0,256.1,6.816Z"
                            transform="translate(-240.674 0)"
                            fill="#374957"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>

                  <div className="company__details__row__attribute__heading">
                    Phone
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <InputBox
                    placeholder="+92 335 5225 233"
                    ClassName="input__box"
                    type="phone"
                  />
                </div>
              </div>
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.428"
                    height="15.45"
                    viewBox="0 0 15.428 15.45"
                  >
                    <g
                      id="Group_513"
                      data-name="Group 513"
                      transform="translate(-648 -498.215)"
                    >
                      <g id="phone-call" transform="translate(647.655 498.214)">
                        <g
                          id="Group_201"
                          data-name="Group 201"
                          transform="translate(0.344 0)"
                        >
                          <path
                            id="Path_289"
                            data-name="Path 289"
                            d="M12.544,36.083a1.52,1.52,0,0,0-1.1-.505,1.571,1.571,0,0,0-1.115.5L9.3,37.107c-.085-.046-.17-.088-.251-.13-.117-.059-.228-.114-.323-.173a11.2,11.2,0,0,1-2.684-2.446,6.607,6.607,0,0,1-.88-1.389c.267-.245.515-.5.757-.743.091-.091.183-.186.274-.277a1.5,1.5,0,0,0,0-2.257L5.3,28.8c-.1-.1-.205-.205-.3-.31-.2-.2-.4-.411-.613-.607a1.544,1.544,0,0,0-1.092-.479,1.6,1.6,0,0,0-1.109.479l-.007.007L1.066,29.01a2.386,2.386,0,0,0-.708,1.516,5.716,5.716,0,0,0,.417,2.42A14.041,14.041,0,0,0,3.27,37.107a15.346,15.346,0,0,0,5.11,4,7.961,7.961,0,0,0,2.87.848c.068,0,.14.007.205.007a2.457,2.457,0,0,0,1.882-.809c0-.007.01-.01.013-.016a7.413,7.413,0,0,1,.571-.59c.14-.134.284-.274.424-.421A1.627,1.627,0,0,0,14.836,39a1.567,1.567,0,0,0-.5-1.118Zm1.167,3.434s0,0,0,0c-.127.137-.258.261-.4.4a8.574,8.574,0,0,0-.629.652,1.572,1.572,0,0,1-1.226.518c-.049,0-.1,0-.15,0a7.073,7.073,0,0,1-2.544-.763,14.485,14.485,0,0,1-4.813-3.77A13.239,13.239,0,0,1,1.6,32.64,4.656,4.656,0,0,1,1.238,30.6a1.5,1.5,0,0,1,.45-.968L2.8,28.518a.741.741,0,0,1,.5-.232.7.7,0,0,1,.476.228l.01.01c.2.186.388.378.587.584.1.1.205.209.31.316l.89.89a.622.622,0,0,1,0,1.011c-.095.095-.186.189-.28.28-.274.28-.535.541-.818.8-.007.007-.013.01-.016.016a.665.665,0,0,0-.17.74l.01.029a7.147,7.147,0,0,0,1.053,1.719l0,0a11.969,11.969,0,0,0,2.9,2.635,4.451,4.451,0,0,0,.4.218c.117.059.228.114.323.173.013.007.026.016.039.023a.707.707,0,0,0,.323.082.7.7,0,0,0,.5-.225L10.943,36.7a.738.738,0,0,1,.492-.245.664.664,0,0,1,.47.238l.007.007,1.8,1.8A.645.645,0,0,1,13.711,39.517Z"
                            transform="translate(-0.344 -26.512)"
                            fill="#374957"
                          />
                          <path
                            id="Path_290"
                            data-name="Path 290"
                            d="M245.306,86.8a4.2,4.2,0,0,1,3.417,3.417.438.438,0,0,0,.434.365.582.582,0,0,0,.075-.007.441.441,0,0,0,.362-.509,5.075,5.075,0,0,0-4.135-4.135.443.443,0,0,0-.509.359A.435.435,0,0,0,245.306,86.8Z"
                            transform="translate(-236.968 -83.123)"
                            fill="#374957"
                          />
                          <path
                            id="Path_291"
                            data-name="Path 291"
                            d="M256.1,6.816A8.356,8.356,0,0,0,249.287.007a.44.44,0,1,0-.143.867,7.464,7.464,0,0,1,6.085,6.085.438.438,0,0,0,.434.365.582.582,0,0,0,.075-.007A.432.432,0,0,0,256.1,6.816Z"
                            transform="translate(-240.674 0)"
                            fill="#374957"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>

                  <div className="company__details__row__attribute__heading">
                    Gender
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <Form.Control as="select" className="input__box">
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Control>
                </div>
              </div>
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.581"
                    height="13.36"
                    viewBox="0 0 9.581 13.36"
                  >
                    <g id="pin" transform="translate(0.541 0.5)">
                      <path
                        id="Path_280"
                        data-name="Path 280"
                        d="M87.876,2.116A4.194,4.194,0,0,0,84.312,0c-.063,0-.127,0-.19,0a4.2,4.2,0,0,0-3.564,2.116A4.3,4.3,0,0,0,80.5,6.368l3.065,5.61,0,.007a.745.745,0,0,0,1.292,0l0-.007,3.065-5.61a4.3,4.3,0,0,0-.056-4.252ZM84.217,5.6a1.738,1.738,0,1,1,1.738-1.738A1.74,1.74,0,0,1,84.217,5.6Z"
                        transform="translate(-79.968 0)"
                        fill="none"
                        stroke="#374957"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                  <div className="company__details__row__attribute__heading">
                    Address
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <InputBox
                    placeholder="GMM Plaza, street #4, Flowerclub Colony, UAE"
                    ClassName="input__box"
                    type="text"
                  />
                </div>
              </div>
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.581"
                    height="13.36"
                    viewBox="0 0 9.581 13.36"
                  >
                    <g id="pin" transform="translate(0.541 0.5)">
                      <path
                        id="Path_280"
                        data-name="Path 280"
                        d="M87.876,2.116A4.194,4.194,0,0,0,84.312,0c-.063,0-.127,0-.19,0a4.2,4.2,0,0,0-3.564,2.116A4.3,4.3,0,0,0,80.5,6.368l3.065,5.61,0,.007a.745.745,0,0,0,1.292,0l0-.007,3.065-5.61a4.3,4.3,0,0,0-.056-4.252ZM84.217,5.6a1.738,1.738,0,1,1,1.738-1.738A1.74,1.74,0,0,1,84.217,5.6Z"
                        transform="translate(-79.968 0)"
                        fill="none"
                        stroke="#374957"
                        stroke-width="1"
                      />
                    </g>
                  </svg>

                  <div className="company__details__row__attribute__heading">
                    Zipcode
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <InputBox
                    placeholder="52432"
                    ClassName="input__box"
                    type="number"
                  />
                </div>
              </div>
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.43"
                    height="18.373"
                    viewBox="0 0 18.43 18.373"
                  >
                    <g
                      id="Group_515"
                      data-name="Group 515"
                      transform="translate(-646.534 -681.363)"
                    >
                      <g
                        id="Group_204"
                        data-name="Group 204"
                        transform="translate(646.534 681.363)"
                      >
                        <g id="Group_203" data-name="Group 203">
                          <path
                            id="Path_304"
                            data-name="Path 304"
                            d="M18.157,14.664h-1.8V12.427a.274.274,0,1,0-.547,0v6.194h-4.7V10.49h4.7v.66a.274.274,0,1,0,.547,0v-.934a.274.274,0,0,0-.274-.274H12.34V1.07A.274.274,0,0,0,12.066.8H6.373A.274.274,0,0,0,6.1,1.07V5.164H2.558a.274.274,0,0,0-.274.274v6.73H.274A.274.274,0,0,0,0,12.442V18.9a.274.274,0,0,0,.274.274H18.157a.274.274,0,0,0,.274-.274V14.938A.274.274,0,0,0,18.157,14.664ZM2.285,18.622H.547V12.715H2.285Zm5.693,0H2.832V17.108H7.978Zm0-3.9H5.511a.274.274,0,0,0,0,.547H7.978v1.3H2.832v-1.3h1.4a.274.274,0,0,0,0-.547h-1.4v-1.3H7.978Zm0-1.843H2.832v-1.3H7.978Zm0-1.843H2.832v-1.3H7.978Zm0-1.843H2.832v-1.3H7.978Zm0-1.843H2.832V5.712H7.978Zm2.583,2.87v8.406H8.525V5.438a.274.274,0,0,0-.274-.274H7.878V4.617a.274.274,0,1,0-.547,0v.547H6.647V1.343h5.146v8.6h-.958A.274.274,0,0,0,10.561,10.216Zm7.322,8.405h-1.53v-3.41h1.53Z"
                            transform="translate(0 -0.796)"
                            fill="#374957"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>

                  <div className="company__details__row__attribute__heading">
                    City
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <InputBox
                    placeholder="Miami"
                    ClassName="input__box"
                    type="text"
                  />
                </div>
              </div>
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.499"
                    height="16.008"
                    viewBox="0 0 12.499 16.008"
                  >
                    <g id="germany" transform="translate(-56)">
                      <path
                        id="Path_654"
                        data-name="Path 654"
                        d="M215.5,352h.5v.47h-.5Z"
                        transform="translate(-154.503 -340.973)"
                        fill="#374957"
                      />
                      <path
                        id="Path_655"
                        data-name="Path 655"
                        d="M247.5,352h.5v.47h-.5Z"
                        transform="translate(-185.501 -340.973)"
                        fill="#374957"
                      />
                      <path
                        id="Path_656"
                        data-name="Path 656"
                        d="M279.5,352h.5v.47h-.5Z"
                        transform="translate(-216.499 -340.973)"
                        fill="#374957"
                      />
                      <path
                        id="Path_657"
                        data-name="Path 657"
                        d="M67.788,6.861A6.3,6.3,0,0,0,65.9,4.682l-.274.381a5.839,5.839,0,0,1,1.413,1.453H65.457a6.863,6.863,0,0,0-.542-1.16,4.631,4.631,0,0,0,.577-2.114,3.242,3.242,0,1,0-6.485,0,4.631,4.631,0,0,0,.577,2.114,6.865,6.865,0,0,0-.542,1.16H57.465a5.839,5.839,0,0,1,1.413-1.453L58.6,4.682a6.248,6.248,0,1,0,9.185,2.179Zm-5.774,8.662a2.958,2.958,0,0,1-2.043-1.63A6.32,6.32,0,0,1,59.544,13h2.47Zm.47,0V13h2.47a6.318,6.318,0,0,1-.427.892A2.958,2.958,0,0,1,62.485,15.523Zm0-2.992v-.517h-.47v.517H59.38a9.23,9.23,0,0,1-.4-2.537h3.036v.517h.47V9.993H65.52a9.23,9.23,0,0,1-.4,2.537ZM56.475,9.993h2.034a9.791,9.791,0,0,0,.38,2.537H57.18a5.74,5.74,0,0,1-.7-2.537Zm4.21-3.007a12.5,12.5,0,0,0,1.329,1.376V9.523H58.979a9.321,9.321,0,0,1,.4-2.537Zm3.129,0h1.3a9.321,9.321,0,0,1,.4,2.537H62.485V8.362A12.5,12.5,0,0,0,63.814,6.986ZM65.99,9.993h2.034a5.74,5.74,0,0,1-.7,2.537H65.61A9.791,9.791,0,0,0,65.99,9.993Zm1.331-3.007c.017.031.034.062.051.093a5.79,5.79,0,0,1,.652,2.444H65.99a9.772,9.772,0,0,0-.379-2.537Zm-2.369-.47h-.77q.256-.345.462-.681A6.478,6.478,0,0,1,64.953,6.516ZM62.25.47a2.776,2.776,0,0,1,2.772,2.772c0,2.051-2.175,4.159-2.772,4.7-.6-.54-2.772-2.646-2.772-4.7A2.776,2.776,0,0,1,62.25.47ZM59.855,5.835q.206.336.462.681h-.77A6.477,6.477,0,0,1,59.855,5.835ZM57.127,7.079c.016-.031.034-.062.051-.093h1.71a9.773,9.773,0,0,0-.379,2.537H56.475A5.789,5.789,0,0,1,57.127,7.079ZM57.467,13h1.576a6.9,6.9,0,0,0,.523,1.129,4.727,4.727,0,0,0,.884,1.121A5.806,5.806,0,0,1,57.467,13Zm6.583,2.25a4.728,4.728,0,0,0,.884-1.121A6.9,6.9,0,0,0,65.456,13h1.576A5.806,5.806,0,0,1,64.05,15.25Z"
                        transform="translate(0)"
                        fill="#374957"
                      />
                      <path
                        id="Path_658"
                        data-name="Path 658"
                        d="M188.48,34.24a2.24,2.24,0,1,0-2.24,2.24A2.242,2.242,0,0,0,188.48,34.24Zm-2.24-1.77a1.77,1.77,0,0,1,1.469.783h-2.937A1.77,1.77,0,0,1,186.24,32.47Zm-1.693,1.253h3.386a1.769,1.769,0,0,1,0,1.034h-3.386a1.769,1.769,0,0,1,0-1.034Zm.224,1.5h2.937a1.769,1.769,0,0,1-2.937,0Z"
                        transform="translate(-123.99 -30.998)"
                        fill="#374957"
                      />
                    </g>
                  </svg>

                  <div className="company__details__row__attribute__heading">
                    Country
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <InputBox
                    placeholder="Germany"
                    ClassName="input__box"
                    type="text"
                  />
                </div>
              </div>
              <div className="company__details__row">
                <div className="company__details__row__attribute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.499"
                    height="16.008"
                    viewBox="0 0 12.499 16.008"
                  >
                    <g id="germany" transform="translate(-56)">
                      <path
                        id="Path_654"
                        data-name="Path 654"
                        d="M215.5,352h.5v.47h-.5Z"
                        transform="translate(-154.503 -340.973)"
                        fill="#374957"
                      />
                      <path
                        id="Path_655"
                        data-name="Path 655"
                        d="M247.5,352h.5v.47h-.5Z"
                        transform="translate(-185.501 -340.973)"
                        fill="#374957"
                      />
                      <path
                        id="Path_656"
                        data-name="Path 656"
                        d="M279.5,352h.5v.47h-.5Z"
                        transform="translate(-216.499 -340.973)"
                        fill="#374957"
                      />
                      <path
                        id="Path_657"
                        data-name="Path 657"
                        d="M67.788,6.861A6.3,6.3,0,0,0,65.9,4.682l-.274.381a5.839,5.839,0,0,1,1.413,1.453H65.457a6.863,6.863,0,0,0-.542-1.16,4.631,4.631,0,0,0,.577-2.114,3.242,3.242,0,1,0-6.485,0,4.631,4.631,0,0,0,.577,2.114,6.865,6.865,0,0,0-.542,1.16H57.465a5.839,5.839,0,0,1,1.413-1.453L58.6,4.682a6.248,6.248,0,1,0,9.185,2.179Zm-5.774,8.662a2.958,2.958,0,0,1-2.043-1.63A6.32,6.32,0,0,1,59.544,13h2.47Zm.47,0V13h2.47a6.318,6.318,0,0,1-.427.892A2.958,2.958,0,0,1,62.485,15.523Zm0-2.992v-.517h-.47v.517H59.38a9.23,9.23,0,0,1-.4-2.537h3.036v.517h.47V9.993H65.52a9.23,9.23,0,0,1-.4,2.537ZM56.475,9.993h2.034a9.791,9.791,0,0,0,.38,2.537H57.18a5.74,5.74,0,0,1-.7-2.537Zm4.21-3.007a12.5,12.5,0,0,0,1.329,1.376V9.523H58.979a9.321,9.321,0,0,1,.4-2.537Zm3.129,0h1.3a9.321,9.321,0,0,1,.4,2.537H62.485V8.362A12.5,12.5,0,0,0,63.814,6.986ZM65.99,9.993h2.034a5.74,5.74,0,0,1-.7,2.537H65.61A9.791,9.791,0,0,0,65.99,9.993Zm1.331-3.007c.017.031.034.062.051.093a5.79,5.79,0,0,1,.652,2.444H65.99a9.772,9.772,0,0,0-.379-2.537Zm-2.369-.47h-.77q.256-.345.462-.681A6.478,6.478,0,0,1,64.953,6.516ZM62.25.47a2.776,2.776,0,0,1,2.772,2.772c0,2.051-2.175,4.159-2.772,4.7-.6-.54-2.772-2.646-2.772-4.7A2.776,2.776,0,0,1,62.25.47ZM59.855,5.835q.206.336.462.681h-.77A6.477,6.477,0,0,1,59.855,5.835ZM57.127,7.079c.016-.031.034-.062.051-.093h1.71a9.773,9.773,0,0,0-.379,2.537H56.475A5.789,5.789,0,0,1,57.127,7.079ZM57.467,13h1.576a6.9,6.9,0,0,0,.523,1.129,4.727,4.727,0,0,0,.884,1.121A5.806,5.806,0,0,1,57.467,13Zm6.583,2.25a4.728,4.728,0,0,0,.884-1.121A6.9,6.9,0,0,0,65.456,13h1.576A5.806,5.806,0,0,1,64.05,15.25Z"
                        transform="translate(0)"
                        fill="#374957"
                      />
                      <path
                        id="Path_658"
                        data-name="Path 658"
                        d="M188.48,34.24a2.24,2.24,0,1,0-2.24,2.24A2.242,2.242,0,0,0,188.48,34.24Zm-2.24-1.77a1.77,1.77,0,0,1,1.469.783h-2.937A1.77,1.77,0,0,1,186.24,32.47Zm-1.693,1.253h3.386a1.769,1.769,0,0,1,0,1.034h-3.386a1.769,1.769,0,0,1,0-1.034Zm.224,1.5h2.937a1.769,1.769,0,0,1-2.937,0Z"
                        transform="translate(-123.99 -30.998)"
                        fill="#374957"
                      />
                    </g>
                  </svg>

                  <div className="company__details__row__attribute__heading">
                    Language
                  </div>
                </div>
                <div className="company__details__row__input__box">
                  <Select
                    // defaultValue={}
                    isMulti
                    name="colors"
                    options={selectOptions}
                    className="select"
                    classNamePrefix="select"
                  />
                </div>
              </div>

              <div className="company__details__row">
                <div className="upload__btn__row">
                  <ButtonComponent
                    variant="upload-btn"
                    placeholder="Upload Photo"
                  />
                </div>
              </div>
              <div className="company__details__row">
                <div className="save__btn__row">
                  <ButtonComponent variant="btn" placeholder="Save" />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/dashboard/freelancer/details">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    );
  }
}
