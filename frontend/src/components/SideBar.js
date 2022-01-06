import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class SideBar extends React.Component {
  render() {
    return (
      <div className="side__bar">
        <div className="side__bar__heading">Admin Panel Aida</div>
        <Nav
          variant="pills"
          className="sidebar__links"
          defaultActiveKey="/dashboard"
        >
          <Nav.Item>
            <Nav.Link
              as={Link}
              href="/dashboard"
              to="/dashboard"
              className="nav__link__vertical"
            >
              <svg
                id="dashboard"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 30 22"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1497.306)"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1497.306)"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1080.912 -1509.306)"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M1096.912,1519.306h14v-10h-14Zm2.316-7.405h9.367v4.811h-9.367Z"
                  transform="translate(-1096.912 -1509.306)"
                />
              </svg>
              Dashboard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/freelancer"
              className="nav__link__vertical"
              eventKey="link-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32.278 32.278"
                fill="currentColor"
              >
                <g id="_4552678" data-name="4552678" transform="translate(0 0)">
                  <path
                    id="Path_113"
                    data-name="Path 113"
                    d="M25.659,19.039a6.585,6.585,0,0,0-3.983,1.336,5.361,5.361,0,0,0-4.969-3.353H14.185v-.895a6.035,6.035,0,0,0,1.083-.86,5.95,5.95,0,0,0,1.754-4.236V3.467A3.471,3.471,0,0,0,13.554,0H6.62A4.1,4.1,0,0,0,5.043,7.88v3.152A5.95,5.95,0,0,0,6.8,15.267a6.039,6.039,0,0,0,1.083.86v.894H5.359A5.365,5.365,0,0,0,0,22.38v8.952a.946.946,0,0,0,.946.946H21.12a.946.946,0,0,0,.946-.946v-.117a6.619,6.619,0,1,0,3.593-12.176ZM6.62,6.3a2.207,2.207,0,0,1,0-4.413h6.934A1.578,1.578,0,0,1,15.13,3.467V6.16a3.116,3.116,0,0,1-1.858-1.588l-.133-.266a.946.946,0,0,0-1.6-.144A5.384,5.384,0,0,1,7.25,6.3Zm.315,4.728V8.2h.315a7.289,7.289,0,0,0,4.889-1.9A4.982,4.982,0,0,0,15.13,8.108v2.924a4.1,4.1,0,1,1-8.2,0Zm5.359,5.857v2.024a1.261,1.261,0,0,1-2.522,0V16.889a6.06,6.06,0,0,0,2.522,0Zm7.88,13.5H18.283V24.9a.946.946,0,0,0-1.891,0v5.485H5.674V24.9a.946.946,0,0,0-1.891,0v5.485H1.891V22.38a3.471,3.471,0,0,1,3.467-3.467H7.88a3.152,3.152,0,1,0,6.3,0h2.522a3.445,3.445,0,0,1,3.444,3.079,6.607,6.607,0,0,0,.024,7.369Zm.852-3.783h1.821a13.332,13.332,0,0,0,.519,3.187A4.743,4.743,0,0,1,21.026,26.6Zm1.821-1.891H21.026a4.743,4.743,0,0,1,2.339-3.187A13.335,13.335,0,0,0,22.846,24.713ZM25.659,30.3a7.664,7.664,0,0,1-.918-3.7h1.837A7.665,7.665,0,0,1,25.659,30.3Zm-.918-5.588a7.665,7.665,0,0,1,.918-3.7,7.664,7.664,0,0,1,.918,3.7Zm3.212,5.078a13.335,13.335,0,0,0,.519-3.187h1.821A4.743,4.743,0,0,1,27.953,29.791Zm.519-5.078a13.332,13.332,0,0,0-.519-3.187,4.743,4.743,0,0,1,2.339,3.187Z"
                  />
                </g>
              </svg>
              Freelancers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/jobseeker"
              className="nav__link__vertical"
              eventKey="link-2"
            >
              <svg
                id="files"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 28.962 26.314"
              >
                <path
                  id="Path_26"
                  data-name="Path 26"
                  d="M905.359,2347.677h22.913l3.025-19.154H902.335Zm20.777-2.5H907.5l-2.235-14.154h23.11Z"
                  transform="translate(-902.335 -2321.363)"
                />
                <rect
                  id="Rectangle_17"
                  data-name="Rectangle 17"
                  width="10.086"
                  height="2.5"
                  transform="translate(9.437 12.79)"
                />
                <rect
                  id="Rectangle_18"
                  data-name="Rectangle 18"
                  width="23.925"
                  height="2.5"
                  transform="translate(2.518 3.58)"
                />
                <rect
                  id="Rectangle_19"
                  data-name="Rectangle 19"
                  width="18.452"
                  height="2.5"
                  transform="translate(5.255)"
                />
              </svg>
              Job Seekers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/companies"
              className="nav__link__vertical"
              eventKey="link-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 28.775 35.1"
              >
                <path
                  id="_2427277"
                  data-name="2427277"
                  d="M72.675,31.9h-2.2V4.95a1.1,1.1,0,0,0-1.1-1.1h-8.25V1.1a1.1,1.1,0,0,0-1.1-1.1H52.394a1.1,1.1,0,0,0-1.1,1.1V3.85H50.4a1.1,1.1,0,0,0-1.1,1.1V31.9H47.1a1.1,1.1,0,1,0,0,2.2H72.675a1.1,1.1,0,1,0,0-2.2ZM53.494,2.2h5.431V3.85H53.494Zm4.194,29.7V27.225h4.4V31.9Zm6.6,0V27.225h.481a1.1,1.1,0,1,0,0-2.2H55.006a1.1,1.1,0,0,0,0,2.2h.481V31.9H51.5V6.05H68.275V31.9ZM58.306,9.281a1.1,1.1,0,0,1-1.1,1.1H55.969a1.1,1.1,0,1,1,0-2.2h1.237A1.1,1.1,0,0,1,58.306,9.281Zm6.531,0a1.1,1.1,0,0,1-1.1,1.1H62.5a1.1,1.1,0,1,1,0-2.2h1.237A1.1,1.1,0,0,1,64.837,9.281Zm-6.531,4.125a1.1,1.1,0,0,1-1.1,1.1H55.969a1.1,1.1,0,1,1,0-2.2h1.237A1.1,1.1,0,0,1,58.306,13.406Zm6.531,0a1.1,1.1,0,0,1-1.1,1.1H62.5a1.1,1.1,0,1,1,0-2.2h1.237A1.1,1.1,0,0,1,64.837,13.406Zm-6.531,4.125a1.1,1.1,0,0,1-1.1,1.1H55.969a1.1,1.1,0,1,1,0-2.2h1.237A1.1,1.1,0,0,1,58.306,17.531Zm6.531,0a1.1,1.1,0,0,1-1.1,1.1H62.5a1.1,1.1,0,1,1,0-2.2h1.237A1.1,1.1,0,0,1,64.837,17.531Zm-6.531,4.125a1.1,1.1,0,0,1-1.1,1.1H55.969a1.1,1.1,0,1,1,0-2.2h1.237A1.1,1.1,0,0,1,58.306,21.656Zm6.531,0a1.1,1.1,0,0,1-1.1,1.1H62.5a1.1,1.1,0,1,1,0-2.2h1.237A1.1,1.1,0,0,1,64.837,21.656Z"
                  transform="translate(-45.5 0.5)"
                  stroke="currentColor"
                />
              </svg>
              Companies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/role-manager"
              className="nav__link__vertical"
              eventKey="link-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32.436 26.224"
              >
                <g
                  id="Group_15"
                  data-name="Group 15"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M297.27,2238.051a5.775,5.775,0,0,0-3.577,1.249,7.244,7.244,0,1,0-.282,8.858,5.791,5.791,0,1,0,3.859-10.107Zm-9.444,10.24a4.75,4.75,0,1,1,4.75-4.749A4.755,4.755,0,0,1,287.826,2248.291Zm9.444-1.153a3.255,3.255,0,0,1-2.578-1.286,7.081,7.081,0,0,0,.131-4.176,3.283,3.283,0,1,1,2.447,5.462Z"
                    transform="translate(-274.941 -2236.292)"
                  />
                  <path
                    id="Path_19"
                    data-name="Path 19"
                    d="M297.27,2249.869a11.119,11.119,0,0,0-6.86,2.251,15.53,15.53,0,0,0-2.584-.221c-6.48,0-11.932,3.951-12.681,9.19l-.2,1.427h25.77l-.2-1.427a8.833,8.833,0,0,0-.795-2.572h7.665l-.2-1.427C306.584,2252.974,302.327,2249.869,297.27,2249.869ZM278,2260.016c1.284-3.285,5.227-5.617,9.829-5.617s8.544,2.332,9.829,5.617Zm23.865-4h-3.868a12.5,12.5,0,0,0-4.291-2.944,9.32,9.32,0,0,1,3.567-.7c3.161,0,5.893,1.493,6.977,3.648Z"
                    transform="translate(-274.941 -2236.292)"
                  />
                </g>
              </svg>
              Role manager
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/analysis"
              className="nav__link__vertical"
              eventKey="link-5"
            >
              <svg
                id="analytics"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 36 35.999"
              >
                <path
                  id="Path_24"
                  data-name="Path 24"
                  d="M735.705,1359.108a16.308,16.308,0,0,0,16.29-16.29V1341.6H736.919v-15.075h-1.214a16.289,16.289,0,1,0,0,32.579Zm-1.214-30.1v15.023h15.023a13.862,13.862,0,1,1-15.023-15.023Z"
                  transform="translate(-719.415 -1323.109)"
                />
                <path
                  id="Path_25"
                  data-name="Path 25"
                  d="M756.389,1339.886a16.8,16.8,0,0,0-16.778-16.777h-1.25v18.027h18.028Zm-15.528-1.25v-12.973a14.3,14.3,0,0,1,12.973,12.973Z"
                  transform="translate(-720.389 -1323.109)"
                />
              </svg>
              Analysis
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/messages"
              className="nav__link__vertical"
              eventKey="link-6"
            >
              <div style={{ flex: 1 }}>
                <svg
                  id="messages"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 38.438 28.007"
                >
                  <rect
                    id="Rectangle_13"
                    data-name="Rectangle 13"
                    width="17.013"
                    height="2.5"
                    transform="translate(6.55 11.501)"
                  />
                  <rect
                    id="Rectangle_14"
                    data-name="Rectangle 14"
                    width="10.102"
                    height="2.5"
                    transform="translate(6.55 16.046)"
                  />
                  <rect
                    id="Rectangle_15"
                    data-name="Rectangle 15"
                    width="1.772"
                    height="2.5"
                    transform="translate(18.512 16.046)"
                  />
                  <path
                    id="Path_23"
                    data-name="Path 23"
                    d="M388.965,1327.882c-4.28,0-7.985,1.806-9.612,4.579a20.91,20.91,0,0,0-3.253-.259c-8.327,0-15.1,4.853-15.1,10.819a9.026,9.026,0,0,0,2.979,6.48c-.124,1.666-.262,3.908-.262,3.908l-.154,2.48,2.083-1.355c.913-.594,2.38-1.528,3.2-2.01a20.111,20.111,0,0,0,7.257,1.317c8.326,0,15.1-4.853,15.1-10.82,0-.024,0-.048-.006-.073a13.08,13.08,0,0,0,2.561-.655c.535.323,1.361.848,1.942,1.226l2.083,1.355-.154-2.48s-.083-1.33-.161-2.415a6.366,6.366,0,0,0,1.971-4.476C399.437,1331.229,394.837,1327.882,388.965,1327.882ZM376.1,1351.341a17.366,17.366,0,0,1-6.842-1.349l-.53-.229-.519.256c-.362.178-1.1.624-1.838,1.086.047-.7.1-1.435.145-2.018l.05-.63-.478-.414a6.779,6.779,0,0,1-2.589-5.022c0-4.587,5.652-8.319,12.6-8.319s12.6,3.732,12.6,8.319S383.048,1351.341,376.1,1351.341Zm19.257-12.81-.477.413.049.63c.013.163.027.343.04.532-.233-.138-.433-.252-.566-.318l-.518-.255-.531.229a10.633,10.633,0,0,1-2.588.726c-1.127-3.345-4.414-6.093-8.755-7.421a9.393,9.393,0,0,1,6.954-2.685c4.321,0,7.972,2.345,7.972,5.121A4.109,4.109,0,0,1,395.357,1338.531Z"
                    transform="translate(-360.999 -1327.882)"
                  />
                </svg>
                Messages
              </div>
              <div className="messages__badge">8</div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/payments"
              className="nav__link__vertical"
              eventKey="link-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 36.539 36.539"
              >
                <g
                  id="_567014"
                  data-name="567014"
                  transform="translate(0.5 0.5)"
                >
                  <g id="Group_519" data-name="Group 519">
                    <g id="Group_518" data-name="Group 518">
                      <path
                        id="Path_760"
                        data-name="Path 760"
                        d="M33.456,23.086V3.124A3.127,3.127,0,0,0,30.333,0H7.358A3.127,3.127,0,0,0,4.234,3.124V4.234H3.124a3.124,3.124,0,1,0,0,6.247H4.234v4.165H3.124a3.124,3.124,0,1,0,0,6.247H4.234v4.165H3.124a3.124,3.124,0,1,0,0,6.247H4.234v1.041a3.211,3.211,0,0,0,.9,2.227,3.059,3.059,0,0,0,2.225.966H28.25a7.334,7.334,0,0,0,5.206-12.453ZM3.124,8.4a1.041,1.041,0,1,1,0-2.082H5.275a1.041,1.041,0,1,1,0,2.082Zm0,10.412a1.041,1.041,0,1,1,0-2.082H5.275a1.041,1.041,0,1,1,0,2.082ZM5.275,29.222H3.124a1.041,1.041,0,1,1,0-2.082H5.275a1.041,1.041,0,1,1,0,2.082Zm2.082,4.234a1.106,1.106,0,0,1-1.041-1.111v-1.22a3.123,3.123,0,0,0,0-5.889V20.714a3.123,3.123,0,0,0,0-5.889V10.3a3.123,3.123,0,0,0,0-5.889V3.124A1.042,1.042,0,0,1,7.358,2.082H30.333a1.042,1.042,0,0,1,1.041,1.041V21.6a7.287,7.287,0,0,0-10.412,6.584,7.37,7.37,0,0,0,2.213,5.275Zm20.893,0a5.241,5.241,0,1,1,5.206-5.275A5.247,5.247,0,0,1,28.25,33.456Z"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_521"
                    data-name="Group 521"
                    transform="translate(20.962 8.399)"
                  >
                    <g id="Group_520" data-name="Group 520">
                      <path
                        id="Path_761"
                        data-name="Path 761"
                        d="M309.288,121h-6.247a1.041,1.041,0,0,0,0,2.082h6.247a1.041,1.041,0,0,0,0-2.082Z"
                        transform="translate(-302 -121)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_523"
                    data-name="Group 523"
                    transform="translate(20.962 16.728)"
                  >
                    <g id="Group_522" data-name="Group 522">
                      <path
                        id="Path_762"
                        data-name="Path 762"
                        d="M309.288,241h-6.247a1.041,1.041,0,0,0,0,2.082h6.247a1.041,1.041,0,0,0,0-2.082Z"
                        transform="translate(-302 -241)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_525"
                    data-name="Group 525"
                    transform="translate(27.209 25.058)"
                  >
                    <g id="Group_524" data-name="Group 524">
                      <path
                        id="Path_763"
                        data-name="Path 763"
                        d="M395.124,363.082h-1.041v-1.041a1.041,1.041,0,0,0-2.082,0v2.082a1.041,1.041,0,0,0,1.041,1.041h2.082a1.041,1.041,0,1,0,0-2.082Z"
                        transform="translate(-392 -361)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_527"
                    data-name="Group 527"
                    transform="translate(10.188 6.316)"
                  >
                    <g id="Group_526" data-name="Group 526">
                      <path
                        id="Path_764"
                        data-name="Path 764"
                        d="M155.1,91.3a1.041,1.041,0,0,0-1.472,0L150.2,94.733l-1.639-1.639a1.041,1.041,0,0,0-1.472,1.472l2.375,2.375a1.041,1.041,0,0,0,1.472,0l4.165-4.165A1.041,1.041,0,0,0,155.1,91.3Z"
                        transform="translate(-146.783 -91)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_529"
                    data-name="Group 529"
                    transform="translate(10.188 14.646)"
                  >
                    <g id="Group_528" data-name="Group 528">
                      <path
                        id="Path_765"
                        data-name="Path 765"
                        d="M155.1,211.3a1.041,1.041,0,0,0-1.472,0l-3.429,3.428-1.639-1.639a1.041,1.041,0,0,0-1.472,1.472l2.375,2.375a1.041,1.041,0,0,0,1.472,0l4.165-4.165A1.041,1.041,0,0,0,155.1,211.3Z"
                        transform="translate(-146.783 -211)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_531"
                    data-name="Group 531"
                    transform="translate(10.188 22.975)"
                  >
                    <g id="Group_530" data-name="Group 530">
                      <path
                        id="Path_766"
                        data-name="Path 766"
                        d="M155.1,331.3a1.041,1.041,0,0,0-1.472,0l-3.429,3.428-1.639-1.639a1.041,1.041,0,0,0-1.472,1.472l2.375,2.375a1.041,1.041,0,0,0,1.472,0l4.165-4.165A1.041,1.041,0,0,0,155.1,331.3Z"
                        transform="translate(-146.783 -331)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Payments
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/plans"
              className="nav__link__vertical"
              eventKey="link-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 34.466 22.432"
              >
                <g id="payments" transform="translate(0 0)">
                  <path
                    id="Path_30"
                    data-name="Path 30"
                    d="M452.345,2260.62h34.466v-22.432H452.345Zm2.5-2.5v-10.249h29.466v10.249Zm29.466-17.432v3.734H454.845v-3.734Z"
                    transform="translate(-452.345 -2238.188)"
                  />
                  <rect
                    id="Rectangle_28"
                    data-name="Rectangle 28"
                    width="8.739"
                    height="2.5"
                    transform="translate(20.165 13.722)"
                  />
                </g>
              </svg>
              Plans
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/filters"
              className="nav__link__vertical"
              eventKey="link-9"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 28.004 28.022"
              >
                <path
                  id="_1659021"
                  data-name="1659021"
                  d="M26.45,0H1.555A1.055,1.055,0,0,0,.5,1.055,10.3,10.3,0,0,0,3.955,8.749l4.62,4.106a3.759,3.759,0,0,1,1.261,2.807V25.949a1.055,1.055,0,0,0,1.64.878L17.7,22.678a1.055,1.055,0,0,0,.47-.878V15.662a3.759,3.759,0,0,1,1.261-2.807l4.62-4.106A10.3,10.3,0,0,0,27.5,1.055,1.055,1.055,0,0,0,26.45,0Zm-3.8,7.172-4.62,4.107a5.871,5.871,0,0,0-1.969,4.384v5.574l-4.114,2.743V15.662a5.871,5.871,0,0,0-1.969-4.384L5.357,7.172A8.194,8.194,0,0,1,2.678,2.109H25.326a8.192,8.192,0,0,1-2.679,5.062Zm0,0"
                  transform="translate(0 0.5)"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </svg>
              Filters
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/dashboard/reports"
              className="nav__link__vertical"
              eventKey="link-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22.514 29.686"
              >
                <g
                  id="_591813"
                  data-name="591813"
                  transform="translate(-63.5 0.5)"
                >
                  <g
                    id="Group_511"
                    data-name="Group 511"
                    transform="translate(64 0)"
                  >
                    <g id="Group_510" data-name="Group 510">
                      <path
                        id="Path_756"
                        data-name="Path 756"
                        d="M85.444,7.724a.887.887,0,0,0-.194-.29L78.081.264A.909.909,0,0,0,77.446,0H65.793A1.8,1.8,0,0,0,64,1.793v25.1a1.8,1.8,0,0,0,1.793,1.793H83.722a1.8,1.8,0,0,0,1.793-1.793V8.068A.9.9,0,0,0,85.444,7.724Zm-7.1-4.663,4.111,4.111H78.343Zm5.379,23.833H65.793V1.793H76.55V7.171a1.8,1.8,0,0,0,1.793,1.793h5.379Z"
                        transform="translate(-64 0)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_513"
                    data-name="Group 513"
                    transform="translate(69.379 17.929)"
                  >
                    <g id="Group_512" data-name="Group 512">
                      <path
                        id="Path_757"
                        data-name="Path 757"
                        d="M160.9,320a.9.9,0,0,0-.9.9v5.379a.9.9,0,1,0,1.793,0V320.9A.9.9,0,0,0,160.9,320Z"
                        transform="translate(-160 -320)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_515"
                    data-name="Group 515"
                    transform="translate(78.343 10.757)"
                  >
                    <g id="Group_514" data-name="Group 514">
                      <path
                        id="Path_758"
                        data-name="Path 758"
                        d="M320.9,192a.9.9,0,0,0-.9.9v12.55a.9.9,0,1,0,1.793,0V192.9A.9.9,0,0,0,320.9,192Z"
                        transform="translate(-320 -192)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_517"
                    data-name="Group 517"
                    transform="translate(73.861 14.343)"
                  >
                    <g id="Group_516" data-name="Group 516">
                      <path
                        id="Path_759"
                        data-name="Path 759"
                        d="M240.9,256a.9.9,0,0,0-.9.9v8.964a.9.9,0,1,0,1.793,0V256.9A.9.9,0,0,0,240.9,256Z"
                        transform="translate(-240 -256)"
                        fill="currentColor"
                        stroke="currentColor"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              Reports
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="side__bar__cta">
          <Nav.Link as={Link} to="/" className="nav__link__vertical">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.81 28.805">
              <g id="loguot" transform="translate(29.81 28.805) rotate(180)">
                <path
                  id="Path_31"
                  data-name="Path 31"
                  d="M0,7.479H13.665l-3.457,3.127,1.677,1.854,6.89-6.23L11.885,0,10.208,1.854l3.457,3.126H0Z"
                  transform="translate(0 8.173)"
                  fill="currentColor"
                />
                <path
                  id="Path_32"
                  data-name="Path 32"
                  d="M24.313,0H0V6.1H2.5V2.5H21.813V26.3H2.5v-3.66H0V28.8H24.313Z"
                  transform="translate(5.496)"
                  fill="currentColor"
                />
              </g>
            </svg>
            Logout
          </Nav.Link>
        </div>
      </div>
    );
  }
}
