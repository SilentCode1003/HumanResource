import { Nav } from "react-bootstrap";
import logo from "../assets/img/HRMIS3.svg";

const Header = () => {
  return (
    <header id="header" className="fixed-top navcolor">
      <div className="container d-flex align-items-center">
        <a href="/App">
          <img src={logo} className="img-fluid2" alt="Responsive image" />
        </a>
        <Nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a
                className="navbardrophover d-flex justify-content-center"
                href="/EmployeeDetails"
              >
                Employee Details
              </a>
            </li>
            <li>
              <a className="navbardrophover" href="/EmployeeGovernmentID">
                Employee Government ID
              </a>
            </li>
            <li>
              <a className="navbardrophover" href="/EmployementDetails">
                Employment Details
              </a>
            </li>
            <li>
              <a className="navbardrophover" href="/EmployeeEducation">
                Employee Education
              </a>
            </li>
            <li>
              <a className="navbardrophover" href="/EmployeeWorkExperience">
                Employee Work Experience
              </a>
            </li>
            <li>
              <a className="navbardrophover" href="/EmployeeReference">
                Employee Reference
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </Nav>
      </div>
    </header>
  );
};

export default Header;
