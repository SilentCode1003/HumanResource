import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { usePostEmployeeDetails } from "../API/submit/postEmployeeDetails";
import { validateNumberInput } from "../inputfield_validation/validator";
import { validatorempdet } from "../inputfield_validation/validator";

const InputFieldsEmpDet = () => {
  const [city, setInput1] = useState("");
  const [zip, setInput2] = useState("");
  const [barangay, setInput3] = useState("");
  const [street, setInput4] = useState("");
  const [address, result] = useState("");
  const [firstname, setfirstname] = useState("");
  const [middlename, setmiddlename] = useState("");
  const [lastname, setlastname] = useState("");
  const [gender, setgender] = useState("");
  const [contactnumber, setcontactnumber] = useState("");
  const [email, setemail] = useState("");
  const [emergencycontactname, setemergencycontactname] = useState("");
  const [emergencycontactnumber, setemergencycontactnumber] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [nationality, setnationality] = useState("");
  const [maritalstatus, setmaritalstatus] = useState("");
  const postEmpDet = usePostEmployeeDetails();

  useEffect(() => {
    const concatenatedValue =
      city + ", " + zip + ", " + barangay + ", " + street;
    result(concatenatedValue);
  });

  useEffect(() => {
    validateNumberInput();
  }, []);

  const validatorOnClick = async () => {
    validatorempdet(
      firstname,
      middlename,
      lastname,
      gender,
      contactnumber,
      email,
      emergencycontactname,
      emergencycontactnumber,
      dateofbirth,
      nationality,
      maritalstatus,
      city,
      zip,
      barangay,
      street,
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
          const EmployeeDetails = {
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            gender: gender,
            contactnumber: contactnumber,
            email: email,
            emergencycontactname: emergencycontactname,
            emergencycontactnumber: emergencycontactnumber,
            dateofbirth: dateofbirth,
            nationality: nationality,
            maritalstatus: maritalstatus,
            address: address,
          }
          console.log(EmployeeDetails);
          try {
            const response = await postEmpDet.mutateAsync(EmployeeDetails);
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
          console.log(postEmpDet);
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
                <h2 className="mb-4">Employee Details</h2>
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
                  onChange={(e) => setfirstname(e.target.value)}
                  value={firstname}
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
                  onChange={(e) => setmiddlename(e.target.value)}
                  value={middlename}
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
                  onChange={(e) => setlastname(e.target.value)}
                  value={lastname}
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
                  className="form-control fieldcolor number-validator"
                  placeholder="Enter your contact number"
                  onChange={(e) => setcontactnumber(e.target.value)}
                  value={contactnumber}
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
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  type=""
                  className="form-control fieldcolor"
                  onChange={(e) => setgender(e.target.value)}
                  value={gender}
                >
                  <option value="">- - - Select Gender - - -</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
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
                  onChange={(e) => setdateofbirth(e.target.value)}
                  value={dateofbirth}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Nationality</label>
                <select
                  className="entry-input form-control mb-2 fieldcolor"
                  name="nationality"
                  id="nationality"
                  onChange={(e) => setnationality(e.target.value)}
                  value={nationality}
                >
                  <option value="">- - - Select Nationality - - -</option>
                  <option value="Filipino">FILIPINO</option>
                  <option value="Chinese">CHINESE</option>
                  <option value="Japanese">JAPANESE</option>
                  <option value="Korean">KOREAN</option>
                  <option value="Indonesian">INDONESIAN</option>
                  <option value="Malaysian">MALAYSIAN</option>
                  <option value="Thai">THAI</option>
                  <option value="Taiwanese">TAIWANESE</option>
                  <option value="American">AMERICAN</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Marital Status</label>
                <select
                  className="entry-input form-control fieldcolor"
                  name="maritalstatus"
                  id="maritalstatus"
                  onChange={(e) => setmaritalstatus(e.target.value)}
                  value={maritalstatus}
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
                  value={city}
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
                  value={zip}
                  onChange={(e) => setInput2(e.target.value)}
                  className="form-control fieldcolor number-validator"
                  placeholder="Enter ZIP or postal code"
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Barangay</label>
                <input
                  id="brgy"
                  name="brgy"
                  type=""
                  value={barangay}
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
                  value={street}
                  onChange={(e) => setInput4(e.target.value)}
                  className="form-control fieldcolor"
                  placeholder="Enter street address"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 mt-4 mb-4">
                <div className="card fieldcolor">
                  <p>Result: {address}</p>
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
                  onChange={(e) => setemergencycontactname(e.target.value)}
                  value={emergencycontactname}
                />
              </div>
              <div className="col-md-6 mb-4">
                <label className="form-label">Emergency Contact Number</label>
                <input
                  id="emergencycontactnumber"
                  name="emergencycontactnumber"
                  className="form-control fieldcolor number-validator"
                  placeholder="Enter emergency number"
                  onChange={(e) => setemergencycontactnumber(e.target.value)}
                  value={emergencycontactnumber}
                />
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <button
                id="addBtn"
                name="addBtn"
                className="d-none d-sm-inline-block btn btn-sm  shadow-sm w-50 inputbtn"
                onClick={validatorOnClick}
                variant="outline-danger"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFieldsEmpDet;
