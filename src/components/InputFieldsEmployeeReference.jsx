import { validatorempref } from "../inputfield_validation/validator";
import { validateNumberInput } from "../inputfield_validation/validator";
import React, { useState, useEffect } from "react";

const InputFieldsEmpRef = () => {
  
  const [employeeid, setemployeeid] = useState("");
  const [referencename, setreferencename] = useState("");
  const [relationship, setrelationship] = useState("");
  const [contactinfo, setcontactinfo] = useState("");

  const validatorOnClick = () => {
    validatorempref(employeeid, referencename, relationship, contactinfo);
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
                <h2 className="mb-4">Employee Reference</h2>
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
                <label className="form-label">Reference Name</label>
                <input
                  onChange={(e) => setreferencename(e.target.value)}
                  value={referencename}
                  id="referencename"
                  name="referencename"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder="Enter reference name"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Relationship</label>
                <input
                  onChange={(e) => setrelationship(e.target.value)}
                  value={relationship}
                  id="relationship"
                  name="relationship"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder="Enter relationship"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Contact Info</label>
                <input
                  onChange={(e) => setcontactinfo(e.target.value)}
                  value={contactinfo}
                  id="contactinfo"
                  name="contactinfo"
                  type="text"
                  className="form-control fieldcolor number-validator"
                  placeholder="Enter contact info"
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

export default InputFieldsEmpRef;
