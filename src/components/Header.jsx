import { Nav } from "react-bootstrap";
import logo from '../assets/img/5L_logo.png';

const Header = () => {
  return (
    <header id="header" className="fixed-top navcolor">
      <div className="container d-flex align-items-center justify-content-lg-between headerimgtoleft">
        <img
          src={logo}
          className="img-fluid2"
          alt="Responsive image"
        />

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
              <a
                className="navbardrophover"
                href="/EmployeeGovernmentID"
              >
                Employee Government ID
              </a>
            </li>
            <li>
              <a className="navbardrophover" href="/EmployementDetails">
                Employment Details
              </a>
            </li>
            <li>
              <a className="navbardrophover" href="#">
                Employee Education
              </a>
            </li>
            <li>
              <a className="navbardrophover" href="#">
                Employee Work Experience
              </a>
            </li>
            <li>
              <a className="navbardrophover" href="#">
                Employee Reference
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </Nav>

        <a href="/App" className="get-started-btn scrollto homebtn headerimgtoleft">
          Home
        </a>
      </div>
    </header>
  );
};

export default Header;
