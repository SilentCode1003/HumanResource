import Header from './components/Header'
import './assets/style2.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'

function App() {
  return (
    <>
      <Header />
      
  <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">

      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <h1>5L</h1>
          <h2>Human Resources Management Information System</h2>
        </div>
      </div>

     

    </div>
  </section>

  <main id="main">
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="src\assets\img\about.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content content1" data-aos="fade-right" data-aos-delay="100">
            <h3 className='h3whiten'>Company Profile</h3>
            <p className='pwhiten'>
              5L Solutions and Allied Services Corp. is a company who provides technical equipment and services in the field of Information Technology
              in offices, residences, companies, and manufacturing organizations across various industries. Subsequent to a service engagement, the company
              has the capacity to design, install, and repair electronic and electrical powered devices or equipments such as CCTV, cable, security and safety
              system customized to the needs of it's clients.
            </p>
          </div>
        </div>

      </div>
    </section>

        

    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p className='pwhiten'>Check our Services</p>
        </div>

        <div className="row">
          <div className="col-md-4 align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box content2">
              <div className="icon iconcolor"><i className="bi bi-webcam iconcolor"></i></div>
              <h4><a className='content2' href="">Installation and repair of Surveilance system/CCTV</a></h4>
            </div>
          </div>

          <div className="col-md-4 align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box content2">
              <div className="icon iconcolor"><i className="bi bi-cpu iconcolor"></i></div>
              <h4><a className='content2' href="">Electrical Design and Installation</a></h4>
            </div>
          </div>

          <div className="col-md-4 align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box content2">
              <div className="icon iconcolor"><i className="bi bi-sun iconcolor"></i></div>
              <h4><a className='content2' href="">Solar Panel Design and Installation</a></h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box content2">
              <div className="icon iconcolor"><i className="bi bi-lightbulb iconcolor"></i></div>
              <h4><a className='content2' href="">LED Lighting Supply and Installation/PABX Design and Installation</a></h4>
            </div>
          </div>

          <div className="col-md-4 align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box content2">
              <div className="icon iconcolor"><i className="bi bi-share iconcolor"></i></div>
              <h4><a className='content2' href="">Structured Cabling Design and Installation</a></h4>
            </div>
          </div>

          <div className="col-md-4 align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box content2">
              <div className="icon iconcolor"><i className="bi bi-person-gear iconcolor"></i></div>
              <h4><a className='content2' href="">IT support</a></h4>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-6 align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box content2">
              <div className="icon iconcolor"><i className="bi bi-tools iconcolor"></i></div>
              <h4><a className='content2' href="">Industrial Board Repair</a></h4>
            </div>
          </div>

          <div className="col-md-6 align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box content2">
              <div className="icon iconcolor"><i className="bi bi-house-check iconcolor"></i></div>
              <h4><a className='content2' href="">Civil Works/Landscaping/Door Access</a></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    </>
  )
}

export default App
