import "../assets/style2.css";
import Header from "../components/Header";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmpGovID from "../components/InputFieldsEmpGovID";
import ActionBtn from "../components/buttons";
import { useRequestEmployeeGovernmentID } from "../API/request/reqEmpGovID";

function EmployeeGovernmentID() {
  const employeegovernmentiddata = useRequestEmployeeGovernmentID();
  const filter = employeegovernmentiddata?.data?.data||[];
  const btn = (row) => {
    return <ActionBtn />
  }
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
