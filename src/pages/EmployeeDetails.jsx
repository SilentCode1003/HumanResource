import '../assets/style2.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DynamicTable from '../components/DynamicTable'
import InputFields from '../components/InputFieldsEmpDet'


function EmployeeDetails() {

  const tableColumns = ['Employee ID', 'First Name', 'Middle Name',  'Last Name', 'Gender', 'Birthday', 'Address', 'Contact No.', 'E-mail', 'Nationality', 'Marital Status', 'Emergency Contact Name', 'Emergency No.', 'Status', 'Created by', 'Created Date'];
        const tableData = [
          { 'Employee ID': '1001', 'First Name': 'Joe', 'Middle Name': 'Roegan', 'Last Name':'Mama', 'Gender': 'LGBTQwasWexExort', 'Birthday': 'DD/MM/YY', 'Address': 'Somewhere', 'Contact No.':'0969420lmao', 'E-mail':'Deeznutz@gmail.com', 'Nationality':'Caucasian', 'Marital Status':'Married to your mom', 'Emergency Contact Name':'Joe Biden', 'Emergency No.':'He does not know', 'Status':'Pogging', 'Created by':'Your lord and savior', 'Created Date':'DD/MM/YY'},
        ];

  return (
    <>

      <Header />
      <InputFields />
      <DynamicTable columns={tableColumns} data={tableData} />
      <Footer />
    </>
  )
}

export default EmployeeDetails
