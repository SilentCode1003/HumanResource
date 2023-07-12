import { validatorempexp } from "../inputfield_validation/validator";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { usePostEmployeeExperience } from "../API/submit/postEmployeeWorkExperience";

const InputFieldsEmpExp = () => {
  const [employeeid, setemployeeid] = useState("");
  const [company, setcompany] = useState("");
  const [jobtitle, setjobtitle] = useState("");
  const [jobdescription, setInput3] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const postEmpExp = usePostEmployeeExperience();

  const validatorOnClick = () => {
    validatorempexp(
      employeeid,
      company,
      jobtitle,
      jobdescription,
      startdate,
      enddate,
      async (status, result) => {
        console.log(`STATUS: ${status} RESULT: ${result}`);
        if (!status) {
          console.log(result);
          Swal.fire({
            title: "Blank Input Field(s) Detected",
            text: `Required Field: ${result}`,
            icon: "error",
          });
        } else {
          const EmployeeExperience = {
            employeeid: employeeid,
            company: company,
            jobtitle: jobtitle,
            jobdescription: jobdescription,
            startdate: startdate,
            enddate: enddate
          };
          console.log(EmployeeExperience);

          try {
            const response = await postEmpExp.mutateAsync(EmployeeExperience);
            console.log(response.msg);

            if (response.msg === "success") {
              Swal.fire({
                title: "Success",
                text: "Entry successful",
                icon: "success",
                confirmButtonText: "OK",
              });
            } else {
              Swal.fire({
                title: "Error",
                text: "Entry failed",
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          } catch {
            Swal.fire({
              title: "Invalid Input",
              text: "E R R O R.",
              icon: "error",
            });
          }
          console.log(postEmpExp);
        }
      }
    );
  };

  return (
    <div className="row mb-2 ">
      <div className="col-lg-12 ">
        <div className="card inpufieldmargin inputfieldcolors shadow">
          <div className="card-body inputfieldcolors">
            <div className="row">
              <div className="col-md-12 mb-2">
                <h2 className="mb-4">Employee Work Experience</h2>
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
                <label className="form-label">Company</label>
                <input
                  onChange={(e) => setcompany(e.target.value)}
                  value={company}
                  id="company"
                  name="company"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder="Enter company"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Job Title</label>
                <input
                  onChange={(e) => setjobtitle(e.target.value)}
                  value={jobtitle}
                  id="jobtitle"
                  name="jobtitle"
                  type="text"
                  className="form-control fieldcolor"
                  placeholder="Enter job title"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  id="startdate"
                  name="startdate"
                  className="entry-input form-control fieldcolor"
                  onChange={(e) => setstartdate(e.target.value)}
                  value={startdate}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  id="enddate"
                  name="enddate"
                  className="entry-input form-control fieldcolor"
                  onChange={(e) => setenddate(e.target.value)}
                  value={enddate}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Job Description</label>
                <input
                  onChange={(e) => setInput3(e.target.value)}
                  value={jobdescription}
                  id="jobdescription"
                  name="jobdescription"
                  className="form-control fieldcolor"
                  placeholder="Enter job description"
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

export default InputFieldsEmpExp;
