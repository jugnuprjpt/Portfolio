import React from "react";
import blogData from "../../Api/Blog.json";
import Header from "../Header/Header";

const Blog = () => {
  return (
    <>
     
      <section class="text-center mt-5">
        <h1 className="text-light">BLOG</h1>
        <div className="conatiner ">
          <div className="row m-2 ">

            {
              blogData.map((item)=>(
                <div className="p-4 m-4">
                {/* <div class="card-body"> */}
                <h5 class="card-title text-warning h3 p-3">
                  {" "}
                 {item.name}
                </h5>
                <p class="card-text text-light py-xl-2 fs-4 text-center m-auto w-50">
                  {item.description}
                </p>
                <p className="text-light fs-4">
                {item.visit}
                  <a href={item.url}> 
                     {item.urlDescri}
                  
                  </a>
                </p>
  
                {/* <div className="col p-4 m-4">
                  <h5 class="card-title text-warning h3 p-3">
                    Array reduce excercise
                  </h5>
                  <p class="card-text text-light py-xl-2 fs-4 text-center m-auto w-50">
                    Use the built-in .reduce() method on arrays to solve all of
                    these problems,Feel free to copy and paste the code for easy
                    testing.
                  </p>
                  <p className="text-light fs-4">
                    Please visit more information for below link{" "}
                    <a href="http://gomatifood.com/"> @_Gomati Foods </a>
                  </p>
                </div> */}
              </div>

              ))
            }
            {/* <div className="col p-4 m-4">
              {/* <div class="card-body"> */}
              {/* <h5 class="card-title text-warning h3 p-3">
                {" "}
                JavaScript's map() Method
              </h5>
              <p class="card-text text-light py-xl-2 fs-4 text-center m-auto w-50">
                In this guide, you'll learn how to work with JavaScript's map()
                method and how it works, on practical code examples.
              </p>
              <p className="text-light fs-4">
                Please visit more information for below link{" "}
                <a href="https://coursework.vschool.io/array-reduce-exercises/">
                  {" "}
                  @_JavaScript's map{" "}
                </a>
              </p>

              <div className="col p-4 m-4">
                <h5 class="card-title text-warning h3 p-3">
                  Array reduce excercise
                </h5>
                <p class="card-text text-light py-xl-2 fs-4 text-center m-auto w-50">
                  Use the built-in .reduce() method on arrays to solve all of
                  these problems,Feel free to copy and paste the code for easy
                  testing.
                </p>
                <p className="text-light fs-4">
                  Please visit more information for below link{" "}
                  <a href="http://gomatifood.com/"> @_Gomati Foods </a>
                </p>
              </div> */}
            {/* </div>  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
