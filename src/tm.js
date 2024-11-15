import React from 'react';
import './css.css'; // Importing CSS file
import { Link } from 'react-router-dom';
const TeacherMeet = () => {
  return (
    <>
    <div className='tmbg'>
     <nav
        className="navbar navbar-expand-lg bg-body-tertiary p-0"
        style={{ marginTop: "0px" }}
      >
        <div
          className="container-fluid"
          style={{
            backgroundColor: " #3F88C5",
            marginTop: "0px",
            height: "80px",
          }}
        >
          <a
            className="navbar-brand"
            href="#"
            style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}
          >
            ParentBridge Academy
          </a>

          <ul
            className="navbar-nav mb-2 mb-lg-0"
            style={{ fontSize: "17px", color: "white", fontWeight: "bold" }}
          >
            <li className="nav-item">
              <Link
                to="/SignInPage"
                className="nav-link"
                style={{ color: "white" }}
              >
                Sign In
              </Link>
            </li>
            <li>
            <Link
                to="/home"
                className="nav-link"
                style={{ color: "white" }}
              >
                Home Page
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Signup"
                className="nav-link"
                style={{ color: "white" }}
              >
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                style={{ color: "white" }}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item dropdown style={{ color: 'black' }}">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Categories
              </a>
              <ul className="dropdown-menu" style={{ color: "white" }}>
              <li>
                  <Link
                    to="/AimlPage"
                    className="dropdown-item"
                    style={{ color: "black" }}
                  >
                    Course 1-Aiml
                  </Link>
                </li>
                <li>
                  <Link
                    to="/FeePage"
                    className="dropdown-item"
                    style={{ color: "black" }}
                  >
                    Course 2-FEE
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="/cf"
                    className="dropdown-item"
                    style={{ color: "black" }}
                  >
                    Certification
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-link"
                style={{ color: "white" }}
              >
                profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    
    <div className="teacher-meet-container">
      <h1 className="header">Teacher's Meeting</h1>
      <p className="message">There is no meeting at present.</p>
    </div>
    </div>
    </>
  );
}

export default TeacherMeet;