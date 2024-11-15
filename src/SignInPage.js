import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/signin", {
        email,
        password,
        rememberMe,
      });

      console.log(response.data);
      setSuccessMessage("You have successfully signed in!");

      // Reset form fields after successful sign in
      setEmail("");
      setPassword("");
      setRememberMe(false);
      setErrorMessage("");
    } catch (err) {
      // Change 'error' to 'err' or any name you prefer
      console.error(
        "Error:",
        err.response ? err.response.data : err.message // Use 'err' here
      );

      setErrorMessage(
        err.response
          ? err.response.data.message ||
              "An error occurred during sign in. Please try again."
          : "An error occurred. Please check your network connection."
      );
    }
  };

  return (
    <>
      <div className="bg">
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

        <br />
        <h1 className="heading">ParentBridge Academy</h1>
        <h1 className="title">
          Discover the essence of knowledge in a platform of unparalleled
          elegance.
        </h1>
        <div className="container">
          <div className="signin-container">
            <h2 className="h2-1">Sign In</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="form-group1">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="rme"
                />
                <label htmlFor="rememberMe" style={{ marginLeft: "10px" }}>
                  Remember Me
                </label>
                <p className="form-group2">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
              <button
                type="submit"
                style={{ marginRight: "45px", borderRadius: "20px" }}
              >
                <Link
                  to="/home"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  Sign In
                </Link>
              </button>
            </form>
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
