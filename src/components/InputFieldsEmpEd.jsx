import { validatoremped } from "../inputfield_validation/validator";
import React, { useState } from "react";

const InputFieldsEmpEd = () => {
  const [employeeid, setemployeeid] = useState("");
  const [degree, setdegree] = useState("");
  const [fieldofstudy, setfieldofstudy] = useState("");
  const [institution, setinstitution] = useState("");
  const [graduationdate, setgraduationdate] = useState("");

  const validatorOnClick = () => {
    validatoremped(
      graduationdate,
      employeeid,
      degree,
      fieldofstudy,
      institution
    );
  };

  return (
    <div className="row mb-2 ">
      <div className="col-lg-12 ">
        <div className="card inpufieldmargin inputfieldcolors shadow">
          <div className="card-body inputfieldcolors">
            <div className="row">
              <div className="col-md-12 mb-2">
                <h2 className="mb-4">Employee Education</h2>
                <label className="form-label">Employee ID</label>
                <select
                  className="entry-input form-control fieldcolor"
                  name="employeeid"
                  id="employeeid"
                  onChange={(e) => setemployeeid(e.target.value)}
                  value={employeeid}
                >
                  <option value="">- - - Select Employee ID - - -</option>
                  <option value="123456789">123456789</option>
                  <option value="789456123">789456123</option>
                  <option value="741852963">741852963</option>
                  <option value="963852741">963852741</option>
                </select>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">Degree</label>
                <input
                  onChange={(e) => setdegree(e.target.value)}
                  value={degree}
                  id="degree"
                  name="degree"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder="Enter degree"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Field of Study</label>
                <input
                  onChange={(e) => setfieldofstudy(e.target.value)}
                  value={fieldofstudy}
                  id="fieldofstudy"
                  name="fieldofstudy"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder="Enter field of study"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">Institution</label>
                <input
                  onChange={(e) => setinstitution(e.target.value)}
                  value={institution}
                  id="institution"
                  name="institution"
                  type="tel"
                  className="form-control fieldcolor"
                  placeholder="Enter institution"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Graduation Date</label>
                <input
                  type="date"
                  id="graduationdate"
                  name="graduationdate"
                  className="entry-input form-control fieldcolor"
                  onChange={(e) => setgraduationdate(e.target.value)}
                  value={graduationdate}
                />
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <button
                id="addBtn"
                name="addBtn"
                className="d-none d-sm-inline-block btn btn-sm shadow-sm w-50 inputbtn"
                onClick={validatorOnClick}
                variant="outline-danger"
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFieldsEmpEd;
