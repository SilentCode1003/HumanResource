import { validatoremped } from "../inputfield_validation/validator";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { usePostEmployeeEducation } from "../API/submit/postEmployeeEducation";
import { useRequestEmployeeDetails } from "../API/request/reqEmployeeDetails";

const InputFieldsEmpEd = () => {
  const postEmpEd = usePostEmployeeEducation();
  const EmployeeID = useRequestEmployeeDetails();

  const [Employeeid, setemployeeid] = useState("");
  const [degree, setdegree] = useState("");
  const [fieldofstudy, setfieldofstudy] = useState("");
  const [institution, setinstitution] = useState("");
  const [graduationdate, setgraduationdate] = useState("");

  //EmployeeID
  const employees = EmployeeID?.data?.data || [];
  const filteremployeeid = employees.map((item) => item.employeeid);
  console.log(filteremployeeid);
  console.log(Employeeid);

  const validatorOnClick = () => {
    validatoremped(
      Employeeid,
      degree,
      fieldofstudy,
      institution,
      graduationdate,
      async (status, result) => {
        console.log(`STATUS: ${status} RESULT: ${result}`);
        if (!status) {
          console.log(result);
          Swal.fire({
            title: "Blank Input Field(s) Detected",
            text: `Required Field: ${result}`,
            icon: "error",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } else {
          const EmployeeEducation = {
            employeeid: Employeeid,
            degree: degree,
            fieldofstudy: fieldofstudy,
            institution: institution,
            graduationdate: graduationdate,
          };
          console.log(EmployeeEducation);

          try {
            const response = await postEmpEd.mutateAsync(EmployeeEducation);
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
                text: "ID IS ALREADY IN USE",
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
          console.log(postEmpEd);
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
                <h2 className="mb-4">Employee Education</h2>
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
