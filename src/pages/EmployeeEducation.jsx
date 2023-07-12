import "../assets/style2.css";
import Header from "../components/Header";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmpEd from "../components/InputFieldsEmployeeEducation";
import ActionBtn from "../components/buttons";
import { useRequestEmployeeEducation } from "../API/request/reqEmployeeEducation";

function EmployeeEducation() {
  const employeeeducationdata = useRequestEmployeeEducation();
  const filterfortable = employeeeducationdata?.data?.data||[];
  const btn = (row) => {
    return <ActionBtn />
  }
  console.log(filterfortable);
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
  
  return (
    <>
      <Header />
      <InputFieldsEmpEd />
      <DynamicTable
        header={tableColumns}
        data={filterfortable}
        title="Employee Education Table"
        renderButtons={btn}
      />
    </>
  );
}

export default EmployeeEducation;
