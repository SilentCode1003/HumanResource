import "../assets/style2.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmploymentDet from "../components/InputFieldsEmploymentDet";

function EmployementDetails() {
  const tableColumns = [
    "Employee ID",
    "Department",
    "Hired Date",
    "Employment Status",
    "Salary",
    "Probation Period",
    "Performance Review Schedule",
    "Status",
    "Created by",
    "Created Date",
  ];
  const tableData = [
    {
      "Employee ID": "1001",
      Department: "123456789",
      "Hired Date": "123456789",
      "Employment Status": "789456123",
      Salary: "123456789",
      "Probation Period": "741258963",
      "Performance Review Schedule": "MM/DD/YY",
      Status: "ACTIVE",
      "Created by": "Me",
      "Created Date": "DD/MM/YY",
    },
  ];

  return (
    <>
      <Header />
      <InputFieldsEmploymentDet />
      <DynamicTable
        columns={tableColumns}
        data={tableData}
        title="Employment Details Table"
      />
    </>
  );
}

export default EmployementDetails;
