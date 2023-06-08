import Header from "./components/Header";
import "./assets/style2.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import React from "react";
import BarGraph from "./components/BarGraph";

function App() {
  return (
    <>
      <Header />

      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container" data-aos="fade-up">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-xl-6 col-lg-8">
              <h1>5L</h1>
              <h2>Human Resources Management Information System</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="row ">
        <div className="col-md-4 mt-4 landingcardpadding">
          <div className="card landingpagemargin inputfieldcolors shadow">
            <h2 className="mb-4 mt-2 cardtitle">ANNOUNCEMENT!!</h2>
            <div className="card-body inputfieldcolors scrollable">
              <span>
                There’s no feeling more intense than starting over. If you've
                deleted your homework the day before it was due, as I have, or
                if you left your wallet at home and you have to go back, after
                spending an hour in the commute, if you won some money at the
                casino and then put all your winnings on red, but it came up
                black, if you got your best shirt dry-cleaned before a wedding
                and then immediately dropped food on it, if you won an argument
                with a friend and then later discovered that they just returned
                to their original view, starting over is harder than starting
                up. If you're not ready for that, like if you've already had a
                bad day then what you're about to go through might be too much.
                Feel free to go away and come back. I'll be here.
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4 landingcardpadding">
          <div className="card landingpagemargin inputfieldcolors shadow">
            <h2 className="mb-4 mt-2 cardtitle">Employment Status!!</h2>
            <div className="card-body inputfieldcolors ">
              <BarGraph />
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4 landingcardpadding">
          <div className="card landingpagemargin inputfieldcolors shadow">
            <h2 className="mb-4 mt-2 cardtitle">Quotes</h2>
            <div className="card-body inputfieldcolors scrollable">
              <label className="form-label mb-4">
                This thing that we call failure is not the falling down, but the
                staying down. - Mary Pickford
              </label>
              <label className="form-label mb-4">
                The soul would have no rainbow had the eyes no tears. — John
                Vance Cheney
              </label>
              <label className="form-label mb-4">
                The pain I feel now is the happiness I had before. That's the
                deal. — C.S Lewis
              </label>
              <label className="form-label mb-4">
                You cannot believe now that you'll ever feel better. But this is
                not true. You are sure to be happy again. Knowing this, truly
                believing it, will make you less miserable now. — Abraham
                Lincoln
              </label>
              <label className="form-label mb-4">
                To live is to suffer. To survive is to find meaning in the
                suffering. — Friedrich Nietzsche
              </label>
              <label className="form-label mb-4">
                Life is a mosaic of pleasure and pain - grief is an interlude
                between two moments of joy. Peace is an interlude between two
                wars. You have no rose without a thorn; a diligent picker will
                avoid the pricks and gather the flower. — Sathya Sai Baba
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 mt-4">

        </div>
        <div className="col-md-4 mt-4">
          
        </div>
      </div>
    </>
  );
}

export default App;
