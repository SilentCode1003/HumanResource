import "../assets/style2.css";
import Header from "../components/Header";
import ActionBtn from "../components/buttons";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmploymentDet from "../components/InputFieldsEmploymentDetails";
import { useRequestEmploymentDetails } from "../API/request/reqEmploymentDetails";

function EmployementDetails() {
  const employmentdetailsdata = useRequestEmploymentDetails();
  const filterfortable = employmentdetailsdata?.data?.data||[];
  const btn = (row) => {
    return <ActionBtn />
  }
  console.log(filterfortable);
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
  
  return (
    <>
      <Header />
      <InputFieldsEmploymentDet />
      <DynamicTable
        header={tableColumns}
        data={filterfortable}
        title="Employment Details Table"
        renderButtons={btn}
      />
    </>
  );
}

export default EmployementDetails;
