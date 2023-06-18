import React from "react";
import aboutData from "../../Api/About.json"

const About = () => {
  return (
    <>
     <section class="text-center about">
        <h1 className="mt-4">ABOUT US</h1>
        <div class="container border-bottom">
          <div class="d-flex justify-content-around row">

            {
              aboutData.map((item)=>(
                <div
                class="col-lg-3 col-sm-5 col-ex-12 about-item wow lightSpeedIn m-2 p-lg-0"
                data-wow-offset="100"
              >
                
                <div class="user">
                  {" "}
                  <img
                    src={item.img}
                    class="img-fluid rounded-start"
                    alt=""
                    width="100px"
                    height="100px"
                  />
                </div>
  
                <h2 className="mt-4">{item.name}</h2>
                <p class="lead mt-4">
                  {" "}
                 {item.description}
                </p>
              </div>

              ))
            }
          


            {/* <div
              class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn m-2 p-lg-0"
              data-wow-offset="100"
            >
              <div class="user">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcRWr9s0Y2WZS6RzoKaXqfIs5JOtU5QlXlG6Y0xctcgzCgVILaOjbo98tTLGE1AoMxupKcZo8hZg&usqp=CAU&ec=48600112"
                  class="img-fluid rounded-start"
                  alt=""
                  width="100px"
                  height="100px"
                />
              </div>
              <h2 className="mt-4 p-3">TRADING SOFTWARE APPLICATION</h2>
              <p class="lead mt-4">
                {" "}
                # knowledge about Trading campus, online trading & How to use
                trading product in technology. # Create designs for trading app
                & dynamic data get with c# and React js technology.
              </p>
            </div>

            <div
              class="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn m-2 p-lg-0"
              data-wow-offset="100"
            >
             <div class="user">
                <img
                  src="https://www.shutterstock.com/image-vector/b2b-round-arrows-icon-vector-260nw-1383650522.jpg"
                  class="img-fluid rounded-start"
                  alt=""
                  width="100px"
                  height="100px"
                />
              </div>
              <h2 className="mt-4 p-3">BUSINESS TO BUSINESS DEVELOPMENT</h2>
              <p class="lead mt-4 ">
                {" "}
                # B2B state of art networking platform to connect, collaborate
                for seamless supply chain cycle which enables MSME (Micro, Small
                & Medium Enterprises) & Corporates of India for buying & selling
                requirements with 100% verified businesses.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
