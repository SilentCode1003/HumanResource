import "../assets/style2.css";
import Header from "../components/Header";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmpExp from "../components/InputFieldsEmpExp";
import ActionBtn from "../components/buttons";

function EmployeeWorkExperience() {
  const btn = (row) => {
    return <ActionBtn />
  }
  const tableColumns = [
    "Employee ID",
    "Company",
    "Job Title",
    "Start Date",
    "End Date",
    "Job Description",
    "Status",
    "Created by",
    "Created Date",
  ];
  const tableData = [
    {
      "Employee ID": "1001",
      Company: "123456789",
      "Job Title": "123456789",
      "Start Date": "789456123",
      "End Date": "741258963",
      "Job Description": "123456789",
      Status: "ACTIVE",
      "Created by": "Me",
      "Created Date": "DD/MM/YY",
    },
  ];

  return (
    <>
      <Header />
      <InputFieldsEmpExp />
      <DynamicTable
        header={tableColumns}
        data={tableData}
        title="Employee Work Experience Table"
        renderButtons={btn}
      />
    </>
  );
}

export default EmployeeWorkExperience;
