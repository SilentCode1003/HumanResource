import { validatoremplodet } from "../inputfield_validation/validator";
import { validateNumberInput } from "../inputfield_validation/validator";
import React, { useState, useEffect } from "react";
import { usePostEmploymentDetails } from "../API/submit/postEmploymentDetails";
import { useRequestEmployeeDetails } from "../API/request/reqEmployeeDetails";
import Swal from "sweetalert2";

const InputFieldsEmploymentDet = () => {
  const postEmploymentDet = usePostEmploymentDetails();
  const EmployeeID = useRequestEmployeeDetails();

  const [Employeeid, setemployeeid] = useState("");
  const [salary, setsalary] = useState("");
  const [employmentstatus, setemploymentstatus] = useState("");
  const [department, setdepartment] = useState("");
  const [dateofhire, setdateofhire] = useState("");
  const [probationperiod, setprobationperiod] = useState("");
  const [performancereviewschedule, setperformancereviewschedule] =
    useState("");

  //EmployeeID
  const employees = EmployeeID?.data?.data || [];
  const filteremployeeid = employees.map((item) => item.employeeid);
  console.log(filteremployeeid);
  console.log(Employeeid);

  const validatorOnClick = async () => {
    validatoremplodet(
      Employeeid,
      salary,
      employmentstatus,
      department,
      dateofhire,
      probationperiod,
      performancereviewschedule,
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
          const EmploymentDetails = {
            employeeid: Employeeid,
            salary: salary,
            employmentstatus: employmentstatus,
            department: department,
            dateofhire: dateofhire,
            probationperiod: probationperiod,
            performancereviewschedule: performancereviewschedule,
          };
          console.log(EmploymentDetails);

          try {
            const response = await postEmploymentDet.mutateAsync(
              EmploymentDetails
            );
            console.log(response.msg);

            if (response.msg === "success") {
              Swal.fire({
                title: "Success",
                text: "Entry successful",
                icon: "success",
                confirmButtonText: "OK",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
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
          console.log(postEmploymentDet);
        }
      }
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
                  className="col-md-6 entry-input form-control fieldcolor"
                  onChange={(e) => setemployeeid(e.target.value)}
                  value={Employeeid}
                >
                  <option value="">- - - Select Employee ID - - -</option>
                  {filteremployeeid.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
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
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="MAINTENANCE">MAINTENANCE</option>
                  <option value="FIELD">FIELD</option>
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
                className="d-none d-sm-inline-block btn btn-sm shadow-sm w-50 inputbtn"
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
