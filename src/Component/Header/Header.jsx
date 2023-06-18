import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand text-light fs-3" href="./">
            <span className="text-primary">J</span>UGNU{" "}
            <span className="text-primary">P</span>RAJAPATI
          </a>
          <button
            class="navbar-toggler bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gfgnavbar"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-primary"></span>
          </button>
          <div class="collapse navbar-collapse"  id="gfgnavbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to ="./" class="nav-link fs-4">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link to ='/about-us' class="nav-link fs-4" >
                  ABOUT US
                </Link>
              </li>
              <li class="nav-item">
                <Link to ='/project' class="nav-link fs-4" >
                  PROJECT
                </Link>
              </li>
              <li class="nav-item">
                <Link to ='/blog' class="nav-link fs-4" >
                  BLOG
                </Link>
              </li>
              <li class="nav-item">
                <Link to ='/contact' class="nav-link fs-4">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
