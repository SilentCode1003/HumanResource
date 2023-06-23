import "../assets/style2.css";
import Header from "../components/Header";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmpEd from "../components/InputFieldsEmpEd";

function EmployeeEducation() {
  const tableColumns = [
    "Employee ID",
    "Degree",
    "Field of Study",
    "Institution",
    "Graduation Date",
    "Status",
    "Created by",
    "Created Date",
  ];
  const tableData = [
    {
      "Employee ID": "1001",
      Degree: "123456789",
      "Field of Study": "123456789",
      Institution: "789456123",
      "Graduation Date": "741258963",
      Status: "ACTIVE",
      "Created by": "Me",
      "Created Date": "DD/MM/YY",
    },
  ];

  return (
    <>
      <Header />
      <InputFieldsEmpEd />
      <DynamicTable
        columns={tableColumns}
        data={tableData}
        title="Employee Education Table"
      />
    </>
  );
}

export default EmployeeEducation;
