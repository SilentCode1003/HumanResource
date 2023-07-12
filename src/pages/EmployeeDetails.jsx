import "../assets/style2.css";
import Header from "../components/Header";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmpDet from "../components/InputFieldsEmployeeDetails";
import { useRequestEmployeeDetails } from "../API/request/reqEmployeeDetails";
import ActionBtn from "../components/buttons";

function EmployeeDetails() {
  const employeedetailsdata = useRequestEmployeeDetails();
  const filter = employeedetailsdata?.data?.data||[];
  console.log(filter);
  const btn = (row) => {
    return <ActionBtn />
  }
  const tableColumns = [
    "Employee ID",
    "First Name",
    "Middle Name",
    "Last Name",
    "Gender",
    "Birthday",
    "Address",
    "Contact No.",
    "E-mail",
    "Nationality",
    "Marital Status",
    "Emergency Contact Name",
    "Emergency No.",
    "Status",
    "Created by",
    "Created Date",
  ];
  
  return (
    <>
      <Header />
      <InputFieldsEmpDet />
      <DynamicTable
        header={tableColumns}
        data={filter}
        title="Employee Details Table"
        renderButtons={btn}
      />
    </>
  );
}

export default EmployeeDetails;
