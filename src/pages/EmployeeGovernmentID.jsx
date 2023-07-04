import "../assets/style2.css";
import Header from "../components/Header";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmpGovID from "../components/InputFieldsEmpGovID";
import ActionBtn from "../components/buttons";
import { useRequestEmployeeGovernmentID } from "../API/request/reqEmpGovID";


function EmployeeGovernmentID() {
  const employeegovernmentiddata = useRequestEmployeeGovernmentID();
  const filter = employeegovernmentiddata?.data?.data||[];
  const tableColumns = [
    "Employee ID",
    "SSS ID",
    "Pag-IBIG ID",
    "Philhealth",
    "TIN ID",
    "Status",
    "Created by",
    "Created Date",
  ];
  const tableData = [
    {
      "Employee ID": "1001",
      "SSS ID": "123456789",
      "Pag-IBIG ID": "123456789",
      Philhealth: "789456123",
      "TIN ID": "741258963",
      Status: "ACTIVE",
      "Created by": "Me",
      "Created Date": "DD/MM/YY",
    },
  ];
  const btn = (row) => {
    return <ActionBtn />
  }

  return (
    <>
      <Header />
      <InputFieldsEmpGovID />
      <DynamicTable
        header={tableColumns}
        data={filter}
        title="Employee Government ID Table"
        renderButtons={btn}
      />
    </>
  );
}

export default EmployeeGovernmentID;
