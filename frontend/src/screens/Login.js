import React from "react";
import "./Login.scss";
import { Form } from "react-bootstrap";
import Inputbox from "../components/Inputbox";
import Button from "../components/Button";

export default class Login extends React.Component {
  render() {
    return (
      <div className="login__container">
        <Form className="login__form">
          <div className="login__form__heading">Login</div>
          <div className="login__form__row">
            <Inputbox placeholder="Email" type="email" ClassName="input__box" />
          </div>
          <div className="login__form__row">
            <Inputbox
              placeholder="Password"
              type="password"
              ClassName="input__box"
            />
          </div>
          <div className="login__form__row__cta">
            <input
              className="styled-checkbox"
              id="styled-checkbox-1"
              type="checkbox"
              value="value1"
            />
            <label htmlFor="styled-checkbox-1">Remember Me</label>
          </div>
          <Button placeholder="Login" variant="link" toPath="/dashboard" />
        </Form>
      </div>
    );
  }
}
