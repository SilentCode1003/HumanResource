import { validatorempref } from "../inputfield_validation/validator";
import { validateNumberInput } from "../inputfield_validation/validator";
import React, { useState, useEffect } from "react";
import { usePostEmployeeReference } from "../API/submit/postEmployeeReference";
import { useRequestEmployeeDetails } from "../API/request/reqEmployeeDetails";
import Swal from "sweetalert2";

const InputFieldsEmpRef = () => {
  const postEmpRef = usePostEmployeeReference();
  const EmployeeID = useRequestEmployeeDetails();

  const [Employeeid, setemployeeid] = useState("");
  const [referencename, setreferencename] = useState("");
  const [relationship, setrelationship] = useState("");
  const [contactinfo, setcontactinfo] = useState("");

  //EmployeeID
  const employees = EmployeeID?.data?.data || [];
  const filteremployeeid = employees.map((item) => item.employeeid);
  console.log(filteremployeeid);
  console.log(Employeeid);

  const validatorOnClick = () => {
    validatorempref(Employeeid, referencename, relationship, contactinfo,
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
          const EmployeeReference = {
            employeeid: Employeeid,
            referencename: referencename,
            relationship: relationship,
            contactinfo: contactinfo
          };
          console.log(EmployeeReference);

          try {
            const response = await postEmpRef.mutateAsync(
              EmployeeReference
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
                text: "ID IS ALREADY IN USE",
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          } catch {
            Swal.fire({
              title: "Invalid Input",
              text: " E R R O R",
              icon: "error",
            });
          }
          console.log(postEmpRef);
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
                <h2 className="mb-4">Employee Reference</h2>
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
