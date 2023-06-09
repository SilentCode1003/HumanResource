import Header from "./components/Header";
import "./assets/style2.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import React from "react";
import BarGraph from "./components/BarGraph";

function App() {
  const sampledata =
    " There’s no feeling more intense than starting over. If you've deleted your homework the day before it was due, as I have, or if you left your wallet at home and you have to go back, after spending an hour in the commute, if you won some money at the casino and then put all your winnings on red, but it came up black, if you got your best shirt dry-cleaned before a wedding and then immediately dropped food on it, if you won an argument with a friend and then later discovered that they just returned to their original view, starting over is harder than starting up. If you're not ready for that, like if you've already had a bad day then what you're about to go through might be too much. Feel free to go away and come back. I'll be here.";

  const sampledata2 =
    "This thing that we call failure is not the falling down, but the staying down. - Mary Pickford";
  
  const sampledata3 = "The soul would have no rainbow had the eyes no tears. — John Vance Cheney"

  const sampledata4 = "The pain I feel now is the happiness I had before. That's the deal. — C.S Lewis"

  const sampledata5 = "You cannot believe now that you'll ever feel better. But this is not true. You are sure to be happy again. Knowing this, truly believing it, will make you less miserable now. — Abraham Lincoln"

  const sampledata6 = " To live is to suffer. To survive is to find meaning in the suffering. — Friedrich Nietzsche"

  const sampledata7 = "Life is a mosaic of pleasure and pain - grief is an interludebetween two moments of joy. Peace is an interlude between two wars. You have no rose without a thorn; a diligent picker will avoid the pricks and gather the flower. — Sathya Sai Baba"

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

      <div className="row">
        <div className="col-md-4 mt-4 landingcardpadding">
          <div className="card shadow landingcardcolor1">
            <div className="card-header cardcolor1">
              <h2 className="mb-4 mt-2">ANNOUNCEMENT!!</h2>
            </div>
            <div className="card-body scrollable landingcardcontent">
              <label>{sampledata}</label>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-4 landingcardpadding">
          <div className="card shadow landingcardcolor2">
            <div className="card-header cardcolor2">
              <h2 className="mb-4 mt-2">Employment Status!!</h2>
            </div>
            <div className="card-body landingcardcontent">
              <BarGraph />
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-4 landingcardpadding">
          <div className="card shadow landingcardcolor3">
            <div className="card-header cardcolor3">
              <h2 className="mb-4 mt-2">Quotes!!</h2>
            </div>
            <div className="card-body scrollable landingcardcontent">
              <label className="form-label mb-4">
                {sampledata2}
              </label>
              <label className="form-label mb-4">
                {sampledata3}
              </label>
              <label className="form-label mb-4">
                {sampledata4}
              </label>
              <label className="form-label mb-4">
                {sampledata5}
              </label>
              <label className="form-label mb-4">
                {sampledata6}
              </label>
              <label className="form-label mb-4">
                {sampledata7}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-8 mt-4 landingcardpadding">
          <div className="card shadow landingcardcolor4">
            <div className="card-header cardcolor4">
              <h2 className="mb-4 mt-2">Replace Text Here</h2>
            </div>
            <div className="card-body scrollable landingcardcontent">
              <label>
                When you're building a video game world, you're building with
                ideas, And that can be like working with quick-set cement. You
                mold your ideas into a certain shape that can be played with,
                and in the process of playing with them, they begin to harden
                and set until they are immutable like rock. At that point, you
                can't change the world. Not without breaking it into pieces and
                starting fresh with new ideas.
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-4 landingcardpadding">
          <div className="card shadow landingcardcolor3">
            <div className="card-header cardcolor5">
              <h2 className="mb-4 mt-2">Tasks!!</h2>
            </div>
            <div className="card-body scrollable landingcardcontent w-100">
              <label className="">Upper Engine</label>
              <br />
              <label className="">Lower Engine</label>
              <br />
              <label className="">Laboratory</label>
              <br />
              <label className="">Cafeteria</label>
              <br />
              <label className="">Electrical</label>
              <br />
              <label className="">Navigation</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
