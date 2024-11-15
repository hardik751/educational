import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [parentEmail, setParentEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleParentEmailChange = (e) => {
    setParentEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");

      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        username,

        email,

        parentEmail,

        password,

        rememberMe,
      });

      console.log(response.data);

      setSuccessMessage("You have successfully signed up!");

      // Reset form fields after successful signup

      setUsername("");

      setEmail("");

      setParentEmail("");

      setPassword("");

      setConfirmPassword("");

      setRememberMe(false);

      setErrorMessage("");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );

      setErrorMessage(
        error.response
          ? error.response.data.message ||
              "An error occurred during sign up. Please try again."
          : "An error occurred. Please check your network connection."
      );
    }
  };

  return (
    <>
      <div className="subg">
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
                <li className="nav-item">
                  <Link
                    to="/home"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    Home Page
                  </Link>
                </li>
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
        <div className="wrapper">
          <div className="sucontain">
            <div className="sutitle">
              <div className="suhe">ParentBridge Academy</div>
              <div className="sutitle">
                Enlightenment in Elegance: A Place Where You Get Guided by
                Parental Care and Their Attention While Discovering Knowledge's
                Essence.
              </div>
            </div>
          </div>

          <div className="sufrm">
            <h2 className="h2-2">Sign Up</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  placeholder="Parent's Email"
                  value={parentEmail}
                  onChange={handleParentEmailChange}
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
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
                <label
                  htmlFor="rememberMe"
                  className="form-group1"
                  style={{ marginBottom: "2px", marginTop: "10px" }}
                >
                  Remember Me
                </label>
                <p className="form-group2">
                  Already have an account? <Link to="/SignInPage">Sign In</Link>
                </p>
              </div>
              <button
                type="submit"
                disabled={password !== confirmPassword}
                style={{ marginRight: "45px", borderRadius: "20px" }}
              >
               <Link to="/home"style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    color: "white",
                  }}>Sign Up</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
