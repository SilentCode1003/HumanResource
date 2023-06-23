import "../assets/style2.css";
import {validatorlogin} from "../inputfield_validation/validator";
import logo from "../assets/img/5L_FA_logo_WHITE.png";
import React, { useState } from "react";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const validatorOnClick = () => {
    validatorlogin(username, password);
  };

  return (
    <div className="container loginbody">
        <div className="row justify-content-center mb-4 mt-5">
          <img src={logo} className="img-fluid3" alt="Responsive image" />
        </div>
      <div className="d-flex justify-content-center">
        <div className="cardlogin">
          <div className="card-header loginheader mt-4">
            <div className="row text-center">
              <div className="col-md-12">
                <h3>Sign In</h3>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <label className="form-label">Username</label>
              <div className="input-group form-group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control mr-2"
                  onChange={(e) => setusername(e.target.value)}
                  value={username}
                />
              </div>
            </div>
            <div className="row mb-2">
              <label className="form-label">Passcode</label>
              <div className="input-group form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control mr-2"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div className="form-group btlogin text-center">
              <button
                name="loginBtn"
                id="loginBtn"
                className="d-none d-sm-inline-block btn-sm btn-outline-primary btn btnclr shadow-sm w-50 mt-4"
                onClick={validatorOnClick}
                variant="outline-danger"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
