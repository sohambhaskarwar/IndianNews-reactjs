import React from "react";
import { Link } from "react-router-dom";
import img from "../img.png";

export default function Navbar(props) {
  const mystyle = {
    fontSize: "100%",
  };

  

  const input_box = document.querySelector(".input_box");
  let change_input = () => {};

  let searchbtn = () => {
      let search_item = input_box.value;
    

  };

  return (
    <div className="m-0">
      <nav
        className="navbar navbar-expand-lg  bg-dark navbar-bar"
        style={{ zIndex: "1", width: "100%", position: "fixed", top: "0" }}
      >
        <div
          className="container-fluid"
          style={{ fontFamily: "times new roman" }}
        >
          <Link
            className="navbar-brand  text-light "
            to="/"
            style={{
              fontSize: "25px",
              fontFamily: "times new roman",
              textShadow: "0px 2px 3px purple",
            }}
          >
            <img
              src={`${img}`}
              alt=""
              style={{
                height: "60px",
                width: "60px",
                border: "2px solid white", // Added a 2px solid white border
                borderRadius: "500%",
                objectFit: "contain",
                mixBlendMode: "lighten",
                opacity: "0.8",
                marginLeft:"20px"
              }}
            />{" "}
          </Link>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item " style={{ marginRight: "20px" ,  marginLeft: "40px" }}>
                <Link
                  className="nav-link active  text-light "
                  aria-current="page"
                  to="/"
                  style={{ fontSize: "20px", textShadow: "0px 2px 3px purple" }}
                  
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown" style={{ marginRight: "20px" }}>
                <Link
                  class="nav-link dropdown-toggle text-light"
                  to="/general"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: "20px", textShadow: "0px 2px 3px purple" }}
                >
                  Category
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/entertainment"
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/business"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/health"
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/science"
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/sports"
                    >
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      style={mystyle}
                      to="/technology"
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item" style={{ marginRight: "20px" }}>
                <Link
                  className="nav-link  text-light"
                  to="/contactus"
                  style={{ fontSize: "20px", textShadow: "0px 2px 3px purple" }}
                >
                  ContactUs
                </Link>
              </li>
              <li className="nav-item" style={{ marginRight: "20px" }}>
                <Link
                  className="nav-link  text-light"
                  to="/aboutus"
                  style={{ fontSize: "20px", textShadow: "0px 2px 3px purple" }}
                >
                  AboutUs
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <input
                className="form-control me-2 input_box"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={change_input}
              />
              <div
                className="btn btn-outline-success"
                type="submit"
                onClick={searchbtn}

                style={{
                 
                  marginRight:"20px"
                  
                }}
              >
                Search
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
