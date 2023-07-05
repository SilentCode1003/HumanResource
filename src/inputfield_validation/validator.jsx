import Swal from "sweetalert2";

export const validatorlogin = (username, password) => {
  if (username === "" || password === "") {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  } else {
    Swal.fire({
      title: "SUCCESSFUL!",
      text: "ENTRY COMPLETE!",
      icon: "success",
    });
    return;
  }
};

export const validatorempdet = (
  employeeid,
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
  input1,
  input2,
  input3,
  input4
) => {
  if (
    employeeid === "" ||
    firstname === "" ||
    middlename === "" ||
    lastname === "" ||
    gender === "" ||
    contactnumber === "" ||
    email === "" ||
    emergencycontactname === "" ||
    emergencycontactnumber === "" ||
    dateofbirth === "" ||
    nationality === "" ||
    maritalstatus === "" ||
    input1 === "" ||
    input2 === "" ||
    input3 === "" ||
    input4 === ""
  ) {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  } else {
    Swal.fire({
      title: "SUCCESSFUL!",
      text: "ENTRY COMPLETE!",
      icon: "success",
    });
    return;
  }
};

export const validatorgovid = (
  employeeid,
  sssid,
  pagibigid,
  philhealth,
  tinid,
  callback
) => {
  let message = "";
  if (employeeid === "") {
    message += "Employee ID ";
  }
  if (sssid === "") {
    message += "SSS ID ";
  }
  if (pagibigid === "") {
    message += "Pagibigid ID ";
  }
  if (philhealth === "") {
    message += "Philhealth ID ";
  }
  if (tinid === "") {
    message += "Tinid ID ";
  }

  if (message != "") {
    return callback(false, message);
  }
  return callback(true, null);
};

export const validatoremplodet = (
  performancereviewschedule,
  probationperiod,
  dateofhire,
  department,
  employeeid,
  salary,
  employmentstatus
) => {
  if (
    performancereviewschedule === "" ||
    probationperiod === "" ||
    dateofhire === "" ||
    department === "" ||
    employeeid === "" ||
    salary === "" ||
    employmentstatus === ""
  ) {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  } else {
    Swal.fire({
      title: "SUCCESSFUL!",
      text: "ENTRY COMPLETE!",
      icon: "success",
    });
    return;
  }
};

export const validatoremped = (
  employeeid,
  degree,
  fieldofstudy,
  institution,
  graduationdate
) => {
  if (
    employeeid === "" ||
    degree === "" ||
    fieldofstudy === "" ||
    institution === "" ||
    graduationdate === ""
  ) {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  } else {
    Swal.fire({
      title: "SUCCESSFUL!",
      text: "ENTRY COMPLETE!",
      icon: "success",
    });
    return;
  }
};

export const validatorempexp = (
  employeeid,
  company,
  jobtitle,
  jobdescription,
  startdate,
  enddate
) => {
  if (
    employeeid === "" ||
    company === "" ||
    jobtitle === "" ||
    jobdescription === "" ||
    startdate === "" ||
    enddate === ""
  ) {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  } else {
    Swal.fire({
      title: "SUCCESSFUL!",
      text: "ENTRY COMPLETE!",
      icon: "success",
    });
    return;
  }
};

export const validatorempref = (
  employeeid,
  referencename,
  relationship,
  contactinfo
) => {
  if (
    employeeid === "" ||
    referencename === "" ||
    relationship === "" ||
    contactinfo === ""
  ) {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  } else {
    Swal.fire({
      title: "SUCCESSFUL!",
      text: "ENTRY COMPLETE!",
      icon: "success",
    });
    return;
  }
};

export const validateNumberInput = () => {
  const numberInputs = document.querySelectorAll(".number-validator");

  numberInputs.forEach(function (input) {
    input.addEventListener("input", function () {
      const inputValue = this.value;

      if (inputValue.length === 1 && inputValue === "") {
        this.value = "";
      } else if (!/^\d*$/.test(inputValue)) {
        this.value = inputValue.replace(/\D/g, "");
      }
    });
  });
};
