import { Nav } from "react-bootstrap"

const Header = () => {
    return(
        <header id='header' className='fixed-top navcolor'>
            <div className="container d-flex align-items-center justify-content-lg-between">

<img src="src\assets\img\5L_logo.png" className="img-fluid2" alt="Responsive image" />


<Nav id="navbar" className="navbar order-last order-lg-0">
  <ul>
    <li className="navbarselection"><a className="nav-link scrollto" href="#about">About</a></li>
    <li className="navbarselection"><a className="nav-link scrollto" href="#services">Services</a></li>
    <li className="dropdown dropdownhover"><a href="#"><span>Employee</span> <i className="bi bi-chevron-down"></i></a>
      <ul>
        <li><a className="navbardrophover" href="/EmployeeDetails">Employee Details</a></li>
        <li><a className="navbardrophover" href="/EmployeeGovernmentID">Employee Government ID</a></li>
        <li><a className="navbardrophover" href="#">Employment Details</a></li>
        <li><a className="navbardrophover" href="#">Employee Education</a></li>
        <li><a className="navbardrophover" href="#">Employee Work Experience</a></li>
        <li><a className="navbardrophover" href="#">Employee Reference</a></li>
      </ul>
    </li>
  </ul>
  <i className="bi bi-list mobile-nav-toggle"></i>
</Nav>

<a href="/App" className="get-started-btn scrollto homebtn">Home</a>

</div>
        </header>
    )
}

export default Header