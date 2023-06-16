import { validatoremplodet } from "../inputfield_validation/validator";
import { validateNumberInput } from "../inputfield_validation/validator";
import React, { useState, useEffect } from "react";

const InputFieldsEmploymentDet = () => {
  const [employeeid, setemployeeid] = useState("");
  const [salary, setsalary] = useState("");
  const [employmentstatus, setemploymentstatus] = useState("");
  const [department, setdepartment] = useState("");
  const [dateofhire, setdateofhire] = useState("");
  const [probationperiod, setprobationperiod] = useState("");
  const [performancereviewschedule, setperformancereviewschedule] =
    useState("");

  const validatorOnClick = () => {
    validatoremplodet(
      employeeid,
      salary,
      employmentstatus,
      department,
      dateofhire,
      probationperiod,
      performancereviewschedule
    );
  };

  useEffect(() => {
    validateNumberInput();
  }, []);

  return (
    <div className="row mb-2 ">
      <div className="col-lg-12 ">
        <div className="card inpufieldmargin inputfieldcolors shadow">
          <div className="card-body inputfieldcolors">
            <div className="row">
              <div className="col-md-12 mb-2">
                <h2 className="mb-4">Employment Details</h2>
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
              <div className="col-md-4">
                <label className="form-label">Department</label>
                <select
                  className="entry-input form-control fieldcolor"
                  name="department"
                  id="department"
                  onChange={(e) => setdepartment(e.target.value)}
                  value={department}
                >
                  <option value="">- - - Select Department - - -</option>
                  <option value="married">IT</option>
                  <option value="divorced">HR</option>
                  <option value="separated">MAINTENANCE</option>
                  <option value="nvmarried">FIELD</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Date of Hired</label>
                <input
                  type="date"
                  id="dateofhire"
                  name="dateofhire"
                  className="entry-input form-control fieldcolor"
                  onChange={(e) => setdateofhire(e.target.value)}
                  value={dateofhire}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Employment Status</label>
                <select
                  className="entry-input form-control fieldcolor"
                  name="employmentstatus"
                  id="employmentstatus"
                  onChange={(e) => setemploymentstatus(e.target.value)}
                  value={employmentstatus}
                >
                  <option value="">- - - Select Employment Status - - -</option>
                  <option value="Worker">Worker</option>
                  <option value="Employee">Employee</option>
                  <option value="Self-employed">Self-employed</option>
                </select>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Salary</label>
                <input
                  onChange={(e) => setsalary(e.target.value)}
                  value={salary}
                  id="salary"
                  name="salary"
                  type="tel"
                  className="form-control fieldcolor number-validator"
                  placeholder="Enter Salary"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Probation Period</label>
                <input
                  type="date"
                  id="probationperiod"
                  name="probationperiod"
                  className="entry-input form-control fieldcolor"
                  onChange={(e) => setprobationperiod(e.target.value)}
                  value={probationperiod}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">
                  Performance Review Schedule
                </label>
                <input
                  type="date"
                  id="performancereviewschedule"
                  name="performancereviewschedule"
                  className="entry-input form-control fieldcolor"
                  onChange={(e) => setperformancereviewschedule(e.target.value)}
                  value={performancereviewschedule}
                />
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <button
                id="addBtn"
                name="addBtn"
                className="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm w-50 inputbtn"
                onClick={validatorOnClick}
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

export default InputFieldsEmploymentDet;
