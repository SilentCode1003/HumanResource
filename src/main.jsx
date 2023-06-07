import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.jsx'
import EmployeeDetails from './pages/EmployeeDetails.jsx';
import EmployeeGovernmentID from './pages/EmployeeGovernmentID.jsx';
import EmployementDetails from './pages/EmployementDetails.jsx';
import EmployeeEducation from './pages/EmployeeEducation.jsx';
import EmployeeWorkExperience from './pages/EmployeeWorkExperience.jsx';
import EmployeeReference from './pages/EmployeeReference.jsx';


import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/App" element={<App />} />
      <Route path="/EmployeeDetails" element={<EmployeeDetails />} />
      <Route path="/EmployeeGovernmentID" element={<EmployeeGovernmentID />} />
      <Route path="/EmployementDetails" element={<EmployementDetails />} />
      <Route path="/EmployeeEducation" element={<EmployeeEducation />} />
      <Route path="/EmployeeWorkExperience" element={<EmployeeWorkExperience />} />
      <Route path="/EmployeeReference" element={<EmployeeReference />} />
      
    </Routes>
  </BrowserRouter>

)