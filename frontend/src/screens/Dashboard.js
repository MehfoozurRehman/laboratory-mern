import React from "react";
import SideBar from "../components/SideBar";
import "./Dashboard.scss";
import { Switch, Route, Link } from "react-router-dom";
import DashboardPanel from "./DashboardPanel";
import FreelancerPanel from "./FreelancerPanel";
import JobSeekerPanel from "./JobSeekerPanel";
import CompanyPanel from "./CompanyPanel";
import FiltersPanel from "./FiltersPanel";
import MessagesPanel from "./MessagesPanel";
import PaymentsPanel from "./PaymentsPanel";
import RoleManagerPanel from "./RoleManagerPanel";
import AnalysisPanel from "./AnalysisPanel";
import PlansPanel from "./PlansPanel";
import ReportsPanel from "./ReportsPanel";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dasboard__container">
        <SideBar />
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPanel />
          </Route>
          <Route path="/dashboard/analysis">
            <AnalysisPanel />
          </Route>
          <div className="main">
            <Route path="/dashboard/freelancer">
              <FreelancerPanel />
            </Route>
            <Route path="/dashboard/jobseeker">
              <JobSeekerPanel />
            </Route>
            <Route path="/dashboard/companies">
              <CompanyPanel />
            </Route>
            <Route path="/dashboard/role-manager">
              <RoleManagerPanel />
            </Route>
            <Route path="/dashboard/messages">
              <MessagesPanel />
            </Route>
            <Route path="/dashboard/payments">
              <PaymentsPanel />
            </Route>
            <Route path="/dashboard/plans">
              <PlansPanel />
            </Route>
            <Route path="/dashboard/filters">
              <FiltersPanel />
            </Route>
            <Route path="/dashboard/reports">
              <ReportsPanel />
            </Route>
          </div>
        </Switch>
      </div>
    );
  }
}
