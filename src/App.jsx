import Header from './components/Header'
import './assets/style2.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import about from './assets/img/hero-bg.jpg';

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

        <div className="row shadow">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={about} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content content1 shadow" data-aos="fade-right" data-aos-delay="100">
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

        

    
  </main>
    </>
  )
}

export default App
