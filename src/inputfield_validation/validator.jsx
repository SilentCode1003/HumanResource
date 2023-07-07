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
  callback
) => {
  let message = "";
  if (firstname === "") {
    message += "First Name ";
  }
  if (middlename === "") {
    message += "Middle Name ";
  }
  if (lastname === "") {
    message += "Last Name ";
  }
  if (gender === "") {
    message += "Gender ";
  }
  if (contactnumber === "") {
    message += "Contact No. ";
  }
  if (email === "") {
    message += "E-mail  ";
  }
  if (emergencycontactname === "") {
    message += "Emergency Contact Name ";
  }
  if (emergencycontactnumber === "") {
    message += "Emergency Contact No. ";
  }
  if (dateofbirth === "") {
    message += "Birthday ";
  }
  if (nationality === "") {
    message += "Nationality ";
  }
  if (maritalstatus === "") {
    message += "Marital Status ";
  }
  if (city === "") {
    message += "City ";
  }
  if (zip === "") {
    message += "ZIP ";
  }
  if (barangay === "") {
    message += "Barangay ";
  }
  if (street === "") {
    message += "Street ";
  }
  if (message != "") {
    return callback(false, message);
  }
  return callback(true, null);
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
  employmentstatus,
  callback
) => {
  let message = "";
  if (employeeid === "") {
    message += "Employee ID ";
  }
  if (performancereviewschedule === "") {
    message += "Performance Review Schedule ";
  }
  if (probationperiod === "") {
    message += "Probation Period ";
  }
  if (dateofhire === "") {
    message += "Date of Hired ";
  }
  if (department === "") {
    message += "Department ";
  }
  if (salary === "") {
    message += "Salary ";
  }
  if (employmentstatus === "") {
    message += "Employment Status ";
  }
  if (message != "") {
    return callback(false, message);
  }
  return callback(true, null);
};

export const validatoremped = (
  employeeid,
  degree,
  fieldofstudy,
  institution,
  graduationdate,
  callback
  ) => {
    let message = "";
    if (employeeid === "") {
      message += "Employee ID ";
    }
    if (degree === "") {
      message += "Degree ";
    }
    if (fieldofstudy === "") {
      message += "Field of Study ";
    }
    if (institution === "") {
      message += "Institution ";
    }
    if (graduationdate === "") {
      message += "Graduation Date ";
    }
  
    if (message != "") {
      return callback(false, message);
    }
    return callback(true, null);
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
