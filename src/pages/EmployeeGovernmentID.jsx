import '../assets/style2.css'
import Header from '../components/Header'
import DynamicTable from '../components/DynamicTable'
import InputFieldsEmpGovID from '../components/InputFieldsEmpGovID'


function EmployeeGovernmentID() {

  const tableColumns = ['Employee ID', 'SSS ID', 'Pag-IBIG ID',  'Philhealth', 'TIN ID', 'Status', 'Created by', 'Created Date'];
        const tableData = [
          { 'Employee ID': '1001', 'SSS ID': '123456789', 'Pag-IBIG ID': '123456789', 'Philhealth':'789456123', 'TIN ID': '741258963', 'Status': 'ACTIVE', 'Created by': 'Me', 'Created Date':'DD/MM/YY'},
        ];

  return (
    <>

      <Header />
      <InputFieldsEmpGovID />
      <DynamicTable columns={tableColumns} data={tableData} title="Employee Government ID Table"/>
    </>
  )
}

export default EmployeeGovernmentID
