import Swal from "sweetalert2";

export const validatorempdet = (
  firstname,
  middlename,
  lastname,
  gender,
  contactnumber,
  email,
  emergencycontactname,
  emergencycontactnumber
) => {
  if (
    firstname === "" ||
    middlename === "" ||
    lastname === "" ||
    gender === "" ||
    contactnumber === "" ||
    email === "" ||
    emergencycontactname === "" ||
    emergencycontactnumber === ""
  ) {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  }
};

export const validatorgovid = (sssid, pagibigid, philhealth, tinid) => {
  if (sssid === "" || pagibigid === "" || philhealth === "" || tinid === "") {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  }
};

export const validatoremplodet = (salary, employmentstatus) => {
  if (salary === "" || employmentstatus === "") {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  }
};

export const validatoremped = (degree, fieldofstudy, institution) => {
  if (degree === "" || fieldofstudy === "" || institution === "") {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  }
};

export const validatorempexp = (company, jobtitle, jobdescription) => {
  if (company === "" || jobtitle === "" || jobdescription === "") {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
    });
    return;
  }
};

export const validatorempref = (referencename, relationship, contactinfo) => {
  if (referencename === "" || relationship === "" || contactinfo === "") {
    Swal.fire({
      title: "Invalid Input",
      text: "Please select values for all input fields.",
      icon: "error",
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
