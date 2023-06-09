import "../assets/style2.css";
import Header from "../components/Header";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmpExp from "../components/InputFieldsEmployeeWorkExperience";
import ActionBtn from "../components/buttons";
import { useRequestEmployeeExperience } from "../API/request/reqEmployeeWorkExperience";

function EmployeeWorkExperience() {
  const employeeworkexperiencedata = useRequestEmployeeExperience();
  const filterfortable = employeeworkexperiencedata?.data?.data||[];
  const btn = (row) => {
    return <ActionBtn />
  }
  console.log(filterfortable);
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
  
  return (
    <>
      <Header />
      <InputFieldsEmpExp />
      <DynamicTable
        header={tableColumns}
        data={filterfortable}
        title="Employee Work Experience Table"
        renderButtons={btn}
      />
    </>
  );
}

export default EmployeeWorkExperience;
