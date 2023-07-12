import "../assets/style2.css";
import Header from "../components/Header";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmpRef from "../components/InputFieldsEmployeeReference";
import ActionBtn from "../components/buttons";
import { useRequestEmployeeReference } from "../API/request/reqEmployeeReference";

function EmployeeReference() {
  const employeereferencedata = useRequestEmployeeReference();
  const filterfortable = employeereferencedata?.data?.data||[];
  const btn = (row) => {
    return <ActionBtn />
  }
  console.log(filterfortable);
  const tableColumns = [
    "Employee ID",
    "Reference Name",
    "Relationship",
    "Contact Info",
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
        data={filterfortable}
        title="Employee Reference Table"
        renderButtons={btn}
      />
    </>
  );
}

export default EmployeeReference;
