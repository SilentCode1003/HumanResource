import { Nav, Navbar} from "react-bootstrap";
import logo from "../assets/img/HRMIS3.svg";

const Header = () => {
  return (
    <header id="header" className="fixed-top navcolor  d-flex align-items-center">
      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand href="/App">
          <img src={logo} className="img-fluid2" alt="Responsive image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navbardrophover headernavmargin" href="/EmployeeDetails">Employee Details</Nav.Link>
            <Nav.Link className="navbardrophover headernavmargin" href="/EmployeeGovernmentID">Employee Government ID</Nav.Link>
            <Nav.Link className="navbardrophover headernavmargin" href="/EmployementDetails">Employment Details</Nav.Link>
            <Nav.Link className="navbardrophover headernavmargin" href="/EmployeeEducation">Employee Education</Nav.Link>
            <Nav.Link className="navbardrophover headernavmargin" href="/EmployeeWorkExperience">Employee Work Experience</Nav.Link>
            <Nav.Link className="navbardrophover headernavmargin"href="/EmployeeReference">Employee Reference</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
