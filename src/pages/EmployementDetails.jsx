import "../assets/style2.css";
import Header from "../components/Header";
import ActionBtn from "../components/buttons";
import DynamicTable from "../components/DynamicTable";
import InputFieldsEmploymentDet from "../components/InputFieldsEmploymentDet";
import { useRequestEmploymentDetails } from "../API/request/reqEmploymentDet";

function EmployementDetails() {
  const btn = (row) => {
    return <ActionBtn />
  }
  const employmentdetailsdata = useRequestEmploymentDetails();
  const filter = employmentdetailsdata?.data?.data||[];

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
        header={tableColumns}
        data={filter}
        title="Employment Details Table"
        renderButtons={btn}
      />
    </>
  );
}

export default EmployementDetails;
