import React from "react";
import Header from "../Header/Header";

const Home = () => {
  return (
    <>
      <div className="conainer-fluid awesome mt-3">
        {/* <div className="row"> */}
        <div className="col mainpage">
          <p className="text-light text-gradient text-center h1 mt-2 p-2">
            WELCOME TO MY PORTFOLIO
          </p>
          <p className="text-light text-gradient text-center h4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            aspernatur, ut maxime explicabo velit{" "}
          </p>
          {/* </div> */}
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <div
          class="card mb-3 mb-md-5"
          style={{ maxWidth: "1200px", border: "none" }}
        >
          <div class="row g-0 bg-black">
            <div class="col-md-4 profile">
              <img
                src="../../../assests/img/profile@cut.png"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8 m-md-auto mt-sm-5">
              <div class="card-body m-lg-4 mt-xl-5 ">
                <h5 class="card-title mt-5 h1 mt-lg-5 p-sm-5 fw-bolder p-lg-4 text-light home">
                  Front End Developer{" "}
                  <span className="text-success home">Jugnu Prajapati</span>
                </h5>
                <blockquote class="blockquote h1 p-1 text-sm-center">
                  <p className="h4 lh-lg text-light fs-3">
                    A very well-known about{" "}
                    <span className="text-primary h4 lh-lg fs-3">
                      HTML, CSS, JAVASCRIPT, BOOTSTRAP, C#, REACT JS, NEXT JS &
                      TAILWIND CSS
                    </span>
                  </p>
                  <div class="text-center m-top-50 ">
                  <button class="btn"><i class="fa fa-download"></i> 
                  <a className="text-light text-decoration-none" 
                  href="../../../assests/Jugnu prajapati_Front End Developer(React js).pdf" 
                  title="My Cv" download>Download CV</a>
                  </button>
                    </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
