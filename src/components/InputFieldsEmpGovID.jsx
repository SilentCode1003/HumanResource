import { validatorgovid } from "../inputfield_validation/validator";
import { validateNumberInput } from "../inputfield_validation/validator";
import React, { useState, useEffect } from "react";
import { usePostEmployeeGovernmentID } from "../API/submit/postEmpGovID";
import Swal from "sweetalert2";

const InputFieldsEmpGovID = () => {
  const [employeeid, setemployeeid] = useState("");
  const [sssid, setsssid] = useState("");
  const [pagibigid, setpagibigid] = useState("");
  const [philhealth, setphilhealth] = useState("");
  const [tinid, settinid] = useState("");
  const postEmpGovID = usePostEmployeeGovernmentID();

  const validatorOnClick = async () => {
    validatorgovid(
      employeeid,
      sssid,
      pagibigid,
      philhealth,
      tinid,
      async(status, result) => 
       {
        console.log(`STATUS: ${status} RESULT: ${result}`);
        if (!status) {
          console.log(result);
          Swal.fire({
            title: "Blank Input Field(s) Detected",
            text: `Required Field: ${result}`,
            icon: "error",
          });
        }
        else{
          const EmployeeGovernmentID = {
            employeeid: employeeid,
            sssid: sssid,
            pagibigid: pagibigid,
            philhealth: philhealth,
            tinid: tinid
          }
          console.log(EmployeeGovernmentID);
    
          try {
            const response = await postEmpGovID.mutateAsync(EmployeeGovernmentID);
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
                  <option value="965745214">965745214</option>
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
