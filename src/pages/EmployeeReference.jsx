import "../assets/style2.css";
import Header from "../components/Header";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmpRef from "../components/InputFieldsEmpRef";
import ActionBtn from "../components/buttons";

function EmployeeReference() {
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
      <InputFieldsEmpRef />
      <DynamicTable
        header={tableColumns}
        data={tableData}
        title="Employee Reference Table"
        renderButtons={btn}
      />
    </>
  );
}

export default EmployeeReference;
