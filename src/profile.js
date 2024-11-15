import React from 'react';
import './css.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for HTTP requests

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentDetails: {
        username: '',
        email: '',
        parentEmail: '',
        password: '',
        score: null, // Initialize score to null
        // Add more details as needed
      }
    };
  }

  componentDidMount() {
    // Fetch data from local storage
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
      this.setState({
        studentDetails: {
          username: formData.username,
          email: formData.email,
          parentEmail: formData.parentEmail,
          password: formData.password,
          // Add more details as needed
        }
      });

    }
  }

  render() {
    const { studentDetails } = this.state;

    return (
      <div className='stdbg'>
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
                      to="/tm"
                      className="dropdown-item"
                      style={{ color: "black" }}
                    >
                      TeacherMeet
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
                  to="/home"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  Home Page
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="profile-page">
          <div className="profile-details">
            <h1 className='pf'>Student Profile</h1>

            <p className="detail">Username: {studentDetails.username}</p>
            <p className="detail">Email: {studentDetails.email}</p>
            <p className="detail">Parent's Email: {studentDetails.parentEmail}</p>
            <p className="detail">Password: {studentDetails.password}</p>
          
            {/* Render more details as needed */}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
