import React from "react";
import "./CompanyDetails.scss";
import { Nav, Col, Row, Form, Button } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Posting from "./Posting";
import PostingDetails from "./PostingDetails";
import UserProfile from "./UserProfileCompany";
import HomeCompanyUserCard from "../components/HomeCompanyUserCard";
import ButtonComponent from "../components/Button";
import InputBox from "../components/Inputbox";

export default class CompanyDetails extends React.Component {
  render() {
    return (
      <Col>
        <Row>
          <Nav variant="pills" defaultActiveKey="/dashboard/companies/details">
            <Nav.Link
              as={Link}
              to="/dashboard/companies"
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
            <Nav.Link
              to="/dashboard/companies/details"
              href="/dashboard/filters"
              as={Link}
              className="nav__link__horizontal"
            >
              Jobs Postings
            </Nav.Link>
            <Nav.Link
              to="/dashboard/companies/details/company-details"
              as={Link}
              className="nav__link__horizontal"
              eventKey="link-1"
            >
              Company Details
            </Nav.Link>
            <Nav.Link
              to="/dashboard/companies/details/plans-payments"
              as={Link}
              className="nav__link__horizontal"
              eventKey="link-2"
            >
              Plans & Payments
            </Nav.Link>
            <Nav.Link
              to="/dashboard/companies/details/ledger"
              as={Link}
              className="nav__link__horizontal"
              eventKey="link-3"
            >
              Ledger
            </Nav.Link>
          </Nav>
        </Row>
        <Row>
          <Switch>
            <Route path="/dashboard/companies/details" exact>
              <Posting />
            </Route>
            <Route path="/dashboard/companies/details/draft">
              <Posting />
            </Route>
            <Route path="/dashboard/companies/details/closed">
              <Posting />
            </Route>
            <Route path="/dashboard/companies/details/hold">
              <Posting />
            </Route>
            <Route path="/dashboard/companies/details/posting-details">
              <PostingDetails />
            </Route>
            <Route path="/dashboard/companies/details/applicant-profile">
              <Col style={{ padding: "0em 3em", flex: "1" }}>
                <Row>
                  <Col style={{ padding: "0em" }}>
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
                    <Row
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1em",
                      }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Recent Job
                      </span>
                      <div
                        style={{
                          display: "flex",
                          width: "fit-content",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ marginRight: "1em", width: "100px" }}>
                          Sort By
                        </div>
                        <Form.Control as="select" className="input__box">
                          <option value="">Revelance</option>
                          <option value="">Not relevence</option>
                        </Form.Control>
                      </div>
                    </Row>
                    <Row className="home__company__user__card__row">
                      <HomeCompanyUserCard />
                      <HomeCompanyUserCard />
                      <HomeCompanyUserCard />
                      <HomeCompanyUserCard />
                      <HomeCompanyUserCard />
                      <HomeCompanyUserCard />
                    </Row>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "2em",
                      }}
                    >
                      <Button
                        variant="outline-dark"
                        style={{ fontSize: "14px" }}
                      >
                        Load More
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Route>
            <Route path="/dashboard/companies/details/applicant-details">
              <UserProfile />
            </Route>
            <Route path="/dashboard/companies/details/company-details">
              <div className="company__details__content">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "100px" }}>
                    <ButtonComponent
                      placeholder="Edit"
                      variant="link"
                      toPath="/dashboard/companies/details/edit-company-details"
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
                      Company Name
                    </div>
                  </div>
                  <div className="company__details__row__value">Telenor</div>
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
                  <div className="company__details__row__value">
                    Tele@gmail.com
                  </div>
                </div>
                <div className="company__details__row">
                  <div className="company__details__row__attribute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.051"
                      height="17.802"
                      viewBox="0 0 13.051 17.802"
                    >
                      <g
                        id="Group_511"
                        data-name="Group 511"
                        transform="translate(-649 -401.633)"
                      >
                        <path
                          id="Path_647"
                          data-name="Path 647"
                          d="M27.879,16.029H26.846V2.693a.785.785,0,0,0-.767-.8H21.821V.243A.239.239,0,0,0,21.587,0h-3.9a.239.239,0,0,0-.233.243V1.894H17.1a.785.785,0,0,0-.767.8V16.029H15.3a.239.239,0,0,0-.233.243v1.286a.239.239,0,0,0,.233.243H27.879a.239.239,0,0,0,.233-.243V16.273A.239.239,0,0,0,27.879,16.029ZM17.921.487h3.433V1.894H17.921ZM16.8,2.693a.307.307,0,0,1,.3-.313h8.984a.307.307,0,0,1,.3.313V16.029H23.321V13.387H23.9a.239.239,0,0,0,.233-.243V12.049a.239.239,0,0,0-.233-.243H19.271a.239.239,0,0,0-.233.243v1.095a.239.239,0,0,0,.233.243h.583v2.643H16.8ZM19.5,12.9v-.608h4.167V12.9Zm.816.487h2.534v2.643H20.321Zm7.326,3.929H15.529v-.8H27.646Z"
                          transform="translate(633.938 401.633)"
                          fill="#374957"
                        />
                        <path
                          id="Path_648"
                          data-name="Path 648"
                          d="M34.8,25.444H37.5a.239.239,0,0,0,.233-.243V23.859a.249.249,0,0,0-.068-.172.228.228,0,0,0-.165-.071H34.8a.239.239,0,0,0-.233.243V25.2a.239.239,0,0,0,.233.243Zm.233-1.341h2.242v.854H35.029Z"
                          transform="translate(619.438 381.301)"
                          fill="#374957"
                        />
                        <path
                          id="Path_649"
                          data-name="Path 649"
                          d="M34.8,46.249H37.5a.228.228,0,0,0,.165-.071.249.249,0,0,0,.068-.172V44.664a.239.239,0,0,0-.233-.243H34.8a.239.239,0,0,0-.233.243v1.341A.239.239,0,0,0,34.8,46.249Zm.233-1.341h2.242v.854H35.029Z"
                          transform="translate(619.438 363.39)"
                          fill="#374957"
                        />
                        <path
                          id="Path_650"
                          data-name="Path 650"
                          d="M37.737,66.811V65.47a.249.249,0,0,0-.068-.172.228.228,0,0,0-.165-.071H34.8a.239.239,0,0,0-.233.243v1.341a.239.239,0,0,0,.233.243H37.5A.239.239,0,0,0,37.737,66.811Zm-.467-.243H35.029v-.854h2.242Z"
                          transform="translate(619.438 345.478)"
                          fill="#374957"
                        />
                        <path
                          id="Path_651"
                          data-name="Path 651"
                          d="M69.858,25.444h2.708A.239.239,0,0,0,72.8,25.2V23.859a.249.249,0,0,0-.068-.172.228.228,0,0,0-.165-.071H69.858a.228.228,0,0,0-.165.071.249.249,0,0,0-.068.172V25.2A.239.239,0,0,0,69.858,25.444Zm.233-1.341h2.242v.854H70.092Z"
                          transform="translate(584.375 381.301)"
                          fill="#374957"
                        />
                        <path
                          id="Path_652"
                          data-name="Path 652"
                          d="M69.858,46.249h2.708a.228.228,0,0,0,.165-.071.249.249,0,0,0,.068-.172V44.664a.239.239,0,0,0-.233-.243H69.858a.239.239,0,0,0-.233.243v1.341a.249.249,0,0,0,.068.172A.228.228,0,0,0,69.858,46.249Zm.233-1.341h2.242v.854H70.092Z"
                          transform="translate(584.375 363.39)"
                          fill="#374957"
                        />
                        <path
                          id="Path_653"
                          data-name="Path 653"
                          d="M69.858,67.055h2.708a.239.239,0,0,0,.233-.243V65.47a.249.249,0,0,0-.068-.172.228.228,0,0,0-.165-.071H69.858a.228.228,0,0,0-.165.071.249.249,0,0,0-.068.172v1.341A.239.239,0,0,0,69.858,67.055Zm.233-1.341h2.242v.854H70.092Z"
                          transform="translate(584.375 345.478)"
                          fill="#374957"
                        />
                      </g>
                    </svg>

                    <div className="company__details__row__attribute__heading">
                      Industry (branche)
                    </div>
                  </div>
                  <div className="company__details__row__value">
                    Telecommunication
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
                        id="Group_512"
                        data-name="Group 512"
                        transform="translate(-649 -448.939)"
                      >
                        <path
                          id="Path_285"
                          data-name="Path 285"
                          d="M145.333,176.081a2.04,2.04,0,1,0-2.04-2.04A2.04,2.04,0,0,0,145.333,176.081Zm0-3.288a1.251,1.251,0,1,1-1.251,1.251A1.251,1.251,0,0,1,145.333,172.793Zm0,0"
                          transform="translate(510.707 282.37)"
                          fill="#374957"
                        />
                        <path
                          id="Path_286"
                          data-name="Path 286"
                          d="M111.8,325.122a3.062,3.062,0,0,0-2.218.927,3.273,3.273,0,0,0-.916,2.317.4.4,0,0,0,.395.395h5.478a.4.4,0,0,0,.395-.395,3.273,3.273,0,0,0-.916-2.317A3.062,3.062,0,0,0,111.8,325.122Zm-2.317,2.85a2.414,2.414,0,0,1,.663-1.37,2.325,2.325,0,0,1,3.307,0,2.426,2.426,0,0,1,.663,1.37Zm0,0"
                          transform="translate(544.332 134.083)"
                          fill="#374957"
                        />
                        <path
                          id="Path_287"
                          data-name="Path 287"
                          d="M6.864,0H-2.609A1.974,1.974,0,0,0-4.582,1.973V15.945a1.974,1.974,0,0,0,1.973,1.973H6.864a1.974,1.974,0,0,0,1.973-1.973V1.973A1.974,1.974,0,0,0,6.864,0ZM8.048,15.945a1.188,1.188,0,0,1-1.184,1.184H-2.609a1.188,1.188,0,0,1-1.184-1.184V1.973A1.188,1.188,0,0,1-2.609.789H6.864A1.188,1.188,0,0,1,8.048,1.973Zm0,0"
                          transform="translate(653.582 448.939)"
                          fill="#374957"
                        />
                        <path
                          id="Path_288"
                          data-name="Path 288"
                          d="M143.688,59.664h3.157a.395.395,0,1,0,0-.789h-3.157a.395.395,0,1,0,0,.789Zm0,0"
                          transform="translate(510.707 391.923)"
                          fill="#374957"
                        />
                      </g>
                    </svg>

                    <div className="company__details__row__attribute__heading">
                      Contact Person
                    </div>
                  </div>
                  <div className="company__details__row__value">
                    Junaid Akmal
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
                        <g
                          id="phone-call"
                          transform="translate(647.655 498.214)"
                        >
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
                  <div className="company__details__row__value">
                    +92 335 5225 233
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
                        id="Group_512"
                        data-name="Group 512"
                        transform="translate(-649 -448.939)"
                      >
                        <path
                          id="Path_285"
                          data-name="Path 285"
                          d="M145.333,176.081a2.04,2.04,0,1,0-2.04-2.04A2.04,2.04,0,0,0,145.333,176.081Zm0-3.288a1.251,1.251,0,1,1-1.251,1.251A1.251,1.251,0,0,1,145.333,172.793Zm0,0"
                          transform="translate(510.707 282.37)"
                          fill="#374957"
                        />
                        <path
                          id="Path_286"
                          data-name="Path 286"
                          d="M111.8,325.122a3.062,3.062,0,0,0-2.218.927,3.273,3.273,0,0,0-.916,2.317.4.4,0,0,0,.395.395h5.478a.4.4,0,0,0,.395-.395,3.273,3.273,0,0,0-.916-2.317A3.062,3.062,0,0,0,111.8,325.122Zm-2.317,2.85a2.414,2.414,0,0,1,.663-1.37,2.325,2.325,0,0,1,3.307,0,2.426,2.426,0,0,1,.663,1.37Zm0,0"
                          transform="translate(544.332 134.083)"
                          fill="#374957"
                        />
                        <path
                          id="Path_287"
                          data-name="Path 287"
                          d="M6.864,0H-2.609A1.974,1.974,0,0,0-4.582,1.973V15.945a1.974,1.974,0,0,0,1.973,1.973H6.864a1.974,1.974,0,0,0,1.973-1.973V1.973A1.974,1.974,0,0,0,6.864,0ZM8.048,15.945a1.188,1.188,0,0,1-1.184,1.184H-2.609a1.188,1.188,0,0,1-1.184-1.184V1.973A1.188,1.188,0,0,1-2.609.789H6.864A1.188,1.188,0,0,1,8.048,1.973Zm0,0"
                          transform="translate(653.582 448.939)"
                          fill="#374957"
                        />
                        <path
                          id="Path_288"
                          data-name="Path 288"
                          d="M143.688,59.664h3.157a.395.395,0,1,0,0-.789h-3.157a.395.395,0,1,0,0,.789Zm0,0"
                          transform="translate(510.707 391.923)"
                          fill="#374957"
                        />
                      </g>
                    </svg>

                    <div className="company__details__row__attribute__heading">
                      No. of employees
                    </div>
                  </div>
                  <div className="company__details__row__value">32</div>
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
                  <div className="company__details__row__value">
                    GMM Plaza, street #4, Flowerclub Colony, UAE
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
                  <div className="company__details__row__value">52432</div>
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
                  <div className="company__details__row__value">Miami</div>
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
                  <div className="company__details__row__value">Germany</div>
                </div>
                <div className="company__details__row">
                  <div className="company__details__row__value">
                    Billing Address
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
                  <div className="company__details__row__value">
                    GMM Plaza, street #4, Flowerclub Colony, UAE
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
                  <div className="company__details__row__value">52432</div>
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
                  <div className="company__details__row__value">Miami</div>
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
                  <div className="company__details__row__value">Germany</div>
                </div>
              </div>
            </Route>
            <Route path="/dashboard/companies/details/edit-company-details">
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
                      Company Name
                    </div>
                  </div>
                  <div className="company__details__row__input__box">
                    <InputBox
                      placeholder="Telenor"
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
                      width="13.051"
                      height="17.802"
                      viewBox="0 0 13.051 17.802"
                    >
                      <g
                        id="Group_511"
                        data-name="Group 511"
                        transform="translate(-649 -401.633)"
                      >
                        <path
                          id="Path_647"
                          data-name="Path 647"
                          d="M27.879,16.029H26.846V2.693a.785.785,0,0,0-.767-.8H21.821V.243A.239.239,0,0,0,21.587,0h-3.9a.239.239,0,0,0-.233.243V1.894H17.1a.785.785,0,0,0-.767.8V16.029H15.3a.239.239,0,0,0-.233.243v1.286a.239.239,0,0,0,.233.243H27.879a.239.239,0,0,0,.233-.243V16.273A.239.239,0,0,0,27.879,16.029ZM17.921.487h3.433V1.894H17.921ZM16.8,2.693a.307.307,0,0,1,.3-.313h8.984a.307.307,0,0,1,.3.313V16.029H23.321V13.387H23.9a.239.239,0,0,0,.233-.243V12.049a.239.239,0,0,0-.233-.243H19.271a.239.239,0,0,0-.233.243v1.095a.239.239,0,0,0,.233.243h.583v2.643H16.8ZM19.5,12.9v-.608h4.167V12.9Zm.816.487h2.534v2.643H20.321Zm7.326,3.929H15.529v-.8H27.646Z"
                          transform="translate(633.938 401.633)"
                          fill="#374957"
                        />
                        <path
                          id="Path_648"
                          data-name="Path 648"
                          d="M34.8,25.444H37.5a.239.239,0,0,0,.233-.243V23.859a.249.249,0,0,0-.068-.172.228.228,0,0,0-.165-.071H34.8a.239.239,0,0,0-.233.243V25.2a.239.239,0,0,0,.233.243Zm.233-1.341h2.242v.854H35.029Z"
                          transform="translate(619.438 381.301)"
                          fill="#374957"
                        />
                        <path
                          id="Path_649"
                          data-name="Path 649"
                          d="M34.8,46.249H37.5a.228.228,0,0,0,.165-.071.249.249,0,0,0,.068-.172V44.664a.239.239,0,0,0-.233-.243H34.8a.239.239,0,0,0-.233.243v1.341A.239.239,0,0,0,34.8,46.249Zm.233-1.341h2.242v.854H35.029Z"
                          transform="translate(619.438 363.39)"
                          fill="#374957"
                        />
                        <path
                          id="Path_650"
                          data-name="Path 650"
                          d="M37.737,66.811V65.47a.249.249,0,0,0-.068-.172.228.228,0,0,0-.165-.071H34.8a.239.239,0,0,0-.233.243v1.341a.239.239,0,0,0,.233.243H37.5A.239.239,0,0,0,37.737,66.811Zm-.467-.243H35.029v-.854h2.242Z"
                          transform="translate(619.438 345.478)"
                          fill="#374957"
                        />
                        <path
                          id="Path_651"
                          data-name="Path 651"
                          d="M69.858,25.444h2.708A.239.239,0,0,0,72.8,25.2V23.859a.249.249,0,0,0-.068-.172.228.228,0,0,0-.165-.071H69.858a.228.228,0,0,0-.165.071.249.249,0,0,0-.068.172V25.2A.239.239,0,0,0,69.858,25.444Zm.233-1.341h2.242v.854H70.092Z"
                          transform="translate(584.375 381.301)"
                          fill="#374957"
                        />
                        <path
                          id="Path_652"
                          data-name="Path 652"
                          d="M69.858,46.249h2.708a.228.228,0,0,0,.165-.071.249.249,0,0,0,.068-.172V44.664a.239.239,0,0,0-.233-.243H69.858a.239.239,0,0,0-.233.243v1.341a.249.249,0,0,0,.068.172A.228.228,0,0,0,69.858,46.249Zm.233-1.341h2.242v.854H70.092Z"
                          transform="translate(584.375 363.39)"
                          fill="#374957"
                        />
                        <path
                          id="Path_653"
                          data-name="Path 653"
                          d="M69.858,67.055h2.708a.239.239,0,0,0,.233-.243V65.47a.249.249,0,0,0-.068-.172.228.228,0,0,0-.165-.071H69.858a.228.228,0,0,0-.165.071.249.249,0,0,0-.068.172v1.341A.239.239,0,0,0,69.858,67.055Zm.233-1.341h2.242v.854H70.092Z"
                          transform="translate(584.375 345.478)"
                          fill="#374957"
                        />
                      </g>
                    </svg>
                    <div className="company__details__row__attribute__heading">
                      Industry (branche)
                    </div>
                  </div>
                  <div className="company__details__row__input__box">
                    <InputBox
                      placeholder="Telecommunication"
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
                        id="Group_512"
                        data-name="Group 512"
                        transform="translate(-649 -448.939)"
                      >
                        <path
                          id="Path_285"
                          data-name="Path 285"
                          d="M145.333,176.081a2.04,2.04,0,1,0-2.04-2.04A2.04,2.04,0,0,0,145.333,176.081Zm0-3.288a1.251,1.251,0,1,1-1.251,1.251A1.251,1.251,0,0,1,145.333,172.793Zm0,0"
                          transform="translate(510.707 282.37)"
                          fill="#374957"
                        />
                        <path
                          id="Path_286"
                          data-name="Path 286"
                          d="M111.8,325.122a3.062,3.062,0,0,0-2.218.927,3.273,3.273,0,0,0-.916,2.317.4.4,0,0,0,.395.395h5.478a.4.4,0,0,0,.395-.395,3.273,3.273,0,0,0-.916-2.317A3.062,3.062,0,0,0,111.8,325.122Zm-2.317,2.85a2.414,2.414,0,0,1,.663-1.37,2.325,2.325,0,0,1,3.307,0,2.426,2.426,0,0,1,.663,1.37Zm0,0"
                          transform="translate(544.332 134.083)"
                          fill="#374957"
                        />
                        <path
                          id="Path_287"
                          data-name="Path 287"
                          d="M6.864,0H-2.609A1.974,1.974,0,0,0-4.582,1.973V15.945a1.974,1.974,0,0,0,1.973,1.973H6.864a1.974,1.974,0,0,0,1.973-1.973V1.973A1.974,1.974,0,0,0,6.864,0ZM8.048,15.945a1.188,1.188,0,0,1-1.184,1.184H-2.609a1.188,1.188,0,0,1-1.184-1.184V1.973A1.188,1.188,0,0,1-2.609.789H6.864A1.188,1.188,0,0,1,8.048,1.973Zm0,0"
                          transform="translate(653.582 448.939)"
                          fill="#374957"
                        />
                        <path
                          id="Path_288"
                          data-name="Path 288"
                          d="M143.688,59.664h3.157a.395.395,0,1,0,0-.789h-3.157a.395.395,0,1,0,0,.789Zm0,0"
                          transform="translate(510.707 391.923)"
                          fill="#374957"
                        />
                      </g>
                    </svg>

                    <div className="company__details__row__attribute__heading">
                      Contact Person
                    </div>
                  </div>
                  <div className="company__details__row__input__box">
                    <InputBox
                      placeholder="Junaid Akmal"
                      ClassName="input__box"
                      type="text"
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
                        <g
                          id="phone-call"
                          transform="translate(647.655 498.214)"
                        >
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
                      width="13.419"
                      height="17.918"
                      viewBox="0 0 13.419 17.918"
                    >
                      <g
                        id="Group_512"
                        data-name="Group 512"
                        transform="translate(-649 -448.939)"
                      >
                        <path
                          id="Path_285"
                          data-name="Path 285"
                          d="M145.333,176.081a2.04,2.04,0,1,0-2.04-2.04A2.04,2.04,0,0,0,145.333,176.081Zm0-3.288a1.251,1.251,0,1,1-1.251,1.251A1.251,1.251,0,0,1,145.333,172.793Zm0,0"
                          transform="translate(510.707 282.37)"
                          fill="#374957"
                        />
                        <path
                          id="Path_286"
                          data-name="Path 286"
                          d="M111.8,325.122a3.062,3.062,0,0,0-2.218.927,3.273,3.273,0,0,0-.916,2.317.4.4,0,0,0,.395.395h5.478a.4.4,0,0,0,.395-.395,3.273,3.273,0,0,0-.916-2.317A3.062,3.062,0,0,0,111.8,325.122Zm-2.317,2.85a2.414,2.414,0,0,1,.663-1.37,2.325,2.325,0,0,1,3.307,0,2.426,2.426,0,0,1,.663,1.37Zm0,0"
                          transform="translate(544.332 134.083)"
                          fill="#374957"
                        />
                        <path
                          id="Path_287"
                          data-name="Path 287"
                          d="M6.864,0H-2.609A1.974,1.974,0,0,0-4.582,1.973V15.945a1.974,1.974,0,0,0,1.973,1.973H6.864a1.974,1.974,0,0,0,1.973-1.973V1.973A1.974,1.974,0,0,0,6.864,0ZM8.048,15.945a1.188,1.188,0,0,1-1.184,1.184H-2.609a1.188,1.188,0,0,1-1.184-1.184V1.973A1.188,1.188,0,0,1-2.609.789H6.864A1.188,1.188,0,0,1,8.048,1.973Zm0,0"
                          transform="translate(653.582 448.939)"
                          fill="#374957"
                        />
                        <path
                          id="Path_288"
                          data-name="Path 288"
                          d="M143.688,59.664h3.157a.395.395,0,1,0,0-.789h-3.157a.395.395,0,1,0,0,.789Zm0,0"
                          transform="translate(510.707 391.923)"
                          fill="#374957"
                        />
                      </g>
                    </svg>

                    <div className="company__details__row__attribute__heading">
                      No. of employees
                    </div>
                  </div>
                  <div className="company__details__row__input__box">
                    <InputBox
                      placeholder="32"
                      ClassName="input__box"
                      type="number"
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
                  <div className="company__details__row__value">
                    Billing Address
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
                  <ButtonComponent variant="btn" placeholder="Save" />
                </div>
              </div>
            </Route>
            <Route path="/dashboard/companies/details/plans-payments">
              plans-payments
            </Route>
            <Route path="/dashboard/companies/details/ledger">ledger</Route>
          </Switch>
        </Row>
      </Col>
    );
  }
}
