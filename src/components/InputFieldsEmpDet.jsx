import React, { useState } from "react";

const InputFieldsEmpDet = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [result, setResult] = useState("");

  const handleConcatenate = () => {
    const concatenatedValue =
      input1 + ", " + input2 + ", " + input3 + ", " + input4;
    setResult(concatenatedValue);
  };

  return (
    <div className="row mb-2 ">
      <div className="col-lg-12 ">
        <div className="card inpufieldmargin inputfieldcolors shadow">
          <div className="card-body inputfieldcolors">
            <div className="row">
              <div className="col-md-12 mb-2">
                <h2 className="mb-4">Employee Details</h2>
                <label className="form-label">Employee ID</label>
                <input
                  id="employeeid"
                  name="employeeid"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder=""
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Firstname</label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder="Enter your firstname"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Middlename</label>
                <input
                  id="middlename"
                  name="middlename"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder="Enter your middlename"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Lastname</label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder="Enter your lastname"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Contact number</label>
                <input
                  id="contactnumber"
                  name="contactnumber"
                  type="tel"
                  className="form-control fieldcolor"
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">E-mail address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control fieldcolor"
                  placeholder="Enter your email add"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Gender</label>
                <input
                  id="gender"
                  name="gender"
                  type=""
                  className="form-control fieldcolor"
                  placeholder="Enter your gender"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-md-4">
                <label className="form-label">Birthday</label>
                <input
                  type="date"
                  id="dateofbirth"
                  name="dateofbirth"
                  className="entry-input form-control fieldcolor"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Nationality</label>
                <select
                  className="entry-input form-control mb-2 fieldcolor"
                  name="nationality"
                  id="nationality"
                >
                  <option value="">- - - Select Nationality - - -</option>
                  <option value="fil">FILIPINO</option>
                  <option value="cn">CHINESE</option>
                  <option value="jp">JAPANESE</option>
                  <option value="kr">KOREAN</option>
                  <option value="indo">INDONESIAN</option>
                  <option value="malay">MALAYSIAN</option>
                  <option value="thai">THAI</option>
                  <option value="tai">TAIWANESE</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Marital Status</label>
                <select
                  className="entry-input form-control fieldcolor"
                  name="maritalstatus"
                  id="maritalstatus"
                >
                  <option value="">- - - Select Marital Status - - -</option>
                  <option value="married">MARRIED</option>
                  <option value="divorced">DIVORCED</option>
                  <option value="separated">SEPARATED/WIDOWED</option>
                  <option value="nvmarried">NEVER MARRIED</option>
                </select>
              </div>
            </div>
            <div className="row mb-1">
              <div className="col-md-12">
                <h3>Address</h3>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-3">
                <label className="form-label">City</label>
                <input
                  id="city"
                  name="city"
                  type="tel"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  className="form-control fieldcolor"
                  placeholder="Enter city"
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">ZIP or postal code</label>
                <input
                  id="zip"
                  name="zip"
                  type="email"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  className="form-control fieldcolor"
                  placeholder="Enter ZIP or postal code"
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Barangay</label>
                <input
                  id="brgy"
                  name="brgy"
                  type=""
                  value={input3}
                  onChange={(e) => setInput3(e.target.value)}
                  className="form-control fieldcolor"
                  placeholder="Enter barangay"
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Street address</label>
                <input
                  id="street"
                  name="street"
                  type=""
                  value={input4}
                  onChange={(e) => setInput4(e.target.value)}
                  className="form-control fieldcolor"
                  placeholder="Enter street address"
                />
              </div>
            </div>
            <div className="row">
            <div className="col-sm-6 mt-4 mb-4">
              <button
                id="addBtn"
                name="addBtn"
                onClick={handleConcatenate}
                className="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm w-50 inputbtn"
              >
                Generate Address
              </button>
            </div>
            <div className="col-sm-6 mt-4 mb-4">
                <div className="card">
                    <p>Result: {result}</p>
                </div>
            </div>
            </div>

            <div className="row mb-">
              <div className="col-md-12">
                <h3>Emergency Contact</h3>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6 mb-4">
                <label className="form-label">Emergency Contact Name</label>
                <input
                  id="emergencycontactname"
                  name="emergencycontactname"
                  type="tel"
                  className="form-control fieldcolor"
                  placeholder="Enter emergency name"
                />
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label">Emergency Contact Number</label>
                <input
                  id="emergencycontactnumber"
                  name="emergencycontactnumber"
                  className="form-control fieldcolor"
                  placeholder="Enter emergency number"
                />
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <button
                id="addBtn"
                name="addBtn"
                className="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm w-50 inputbtn"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputFieldsEmpDet;
