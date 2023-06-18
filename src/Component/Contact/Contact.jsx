import React from "react";
import contactDetail from '../../Api/Contact.json'

const Contact = () => {
  return (
    <>
    
      <div class="container py-5">
        <div class="row text-center text-white">
          <div class="col-lg-8 mx-auto">
            <h1 className="text-light">CONTACT</h1>
          </div>
        </div>
      </div>

      <div class="container mb-5">
        <div class="justify-content-between text-center row">

          {
            contactDetail.map((item)=>(
              <div class="col-xl-3 col-sm-6 mb-5 col-md-6 col-12">
              <div class="bg-white rounded py-5 px-4 contact ">
                <img
                  src={item.img}
                  alt=""
                  width="100"
                  class="img-fluid mb-3"
                />
                <h5 class="mb-0">{item.name}</h5>
                <span class="small text-uppercase text-muted">{item.description}</span>
              </div>
            </div>

            ))
          }
        
          {/* <div class="col-xl-3 col-sm-6 mb-5 col-md-6 col-12">
            <div class="bg-white rounded py-5 px-4 contact">
              <img
                src="https://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png"
                alt=""
                width="100"
                class="img-fluid mb-3 "
              />
              <h5 class="mb-0">Email</h5>
              <span class="small text-uppercase text-muted">
                jugnuprjpt@gmail.com
              </span>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 mb-5 col-md-6 col-12">
            <div class="bg-white rounded py-5 px-4 contact">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/016/586/172/small/gps-icon-black-free-png.png"
                alt=""
                width="100"
                class="img-fluid mb-3"
              />
              <h5 class="mb-0">Address</h5>
              <span class="small text-uppercase ">
                12,coolin society,Ahamadabad
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
