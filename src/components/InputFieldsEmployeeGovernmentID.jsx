import { validatorgovid } from "../inputfield_validation/validator";
import { validateNumberInput } from "../inputfield_validation/validator";
import React, { useState, useEffect } from "react";
import { usePostEmployeeGovernmentID } from "../API/submit/postEmployeeGovernmentID";
import { useRequestEmployeeDetails } from "../API/request/reqEmployeeDetails";
import Swal from "sweetalert2";

const InputFieldsEmpGovID = () => {
  const postEmpGovID = usePostEmployeeGovernmentID();
  const EmployeeID = useRequestEmployeeDetails();

  const [Employeeid, setemployeeid] = useState("");
  const [sssid, setsssid] = useState("");
  const [pagibigid, setpagibigid] = useState("");
  const [philhealth, setphilhealth] = useState("");
  const [tinid, settinid] = useState("");

  //EmployeeID
  const employees = EmployeeID?.data?.data || [];
  const filteremployeeid = employees.map((item) => item.employeeid);
  console.log(filteremployeeid);
  console.log(Employeeid);

  const validatorOnClick = async () => {
    validatorgovid(
      Employeeid,
      sssid,
      pagibigid,
      philhealth,
      tinid,
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
          const EmployeeGovernmentID = {
            employeeid: Employeeid,
            sssid: sssid,
            pagibigid: pagibigid,
            philhealth: philhealth,
            tinid: tinid,
          };
          console.log(EmployeeGovernmentID);

          try {
            const response = await postEmpGovID.mutateAsync(
              EmployeeGovernmentID
            );
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
              text: " E R R O R",
              icon: "error",
            });
          }
          console.log(postEmpGovID);
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
                <h2 className="mb-4">Employee Government ID</h2>
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
                <label className="form-label">SSS ID</label>
                <input
                  onChange={(e) => setsssid(e.target.value)}
                  value={sssid}
                  id="sssid"
                  name="sssid"
                  type="text"
                  className="form-control fieldcolor number-validator"
                  placeholder="Enter SSS ID"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Pag-IBIG ID</label>
                <input
                  onChange={(e) => setpagibigid(e.target.value)}
                  value={pagibigid}
                  id="pagibigid"
                  name="pagibigid"
                  type="text"
                  className="form-control fieldcolor number-validator"
                  placeholder="Enter Pag-IBIG ID"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-6">
                <label className="form-label">Philhealth</label>
                <input
                  onChange={(e) => setphilhealth(e.target.value)}
                  value={philhealth}
                  id="philhealth"
                  name="philhealth"
                  type="tel"
                  className="form-control fieldcolor number-validator"
                  placeholder="Enter philhealth"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">TIN ID</label>
                <input
                  onChange={(e) => settinid(e.target.value)}
                  value={tinid}
                  id="tinid"
                  name="tinid"
                  className="form-control fieldcolor number-validator"
                  placeholder="Enter TIN ID"
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

export default InputFieldsEmpGovID;
