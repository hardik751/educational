import React from 'react';
import "./css.css"
import { Link } from 'react-router-dom';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;

    // Check if any field is empty
    if (!name || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      if (response.ok) {
        // Reset form fields
        this.setState({
          name: '',
          email: '',
          message: ''
        });
        // Provide feedback to the user
        alert('Your message has been submitted. We will get back to you soon!');
      } else {
        // Handle error responses
        const data = await response.json();
        throw new Error(data.message || 'Failed to submit feedback');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to submit feedback. Please try again later.');
    }
  }

  handleKeyPress = (e) => {
    // Move to the next field on pressing Enter
    if (e.key === 'Enter') {
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1].focus();
      e.preventDefault();
    }
  }
  
  render() {
    return (
      <>
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
      <div className='conbg'>
        <br />
        <div className="contact-us-container">
          <h1>About Us</h1>
          <p className="about-us-description">
            We are a dedicated team striving to provide the best service to our customers.
          </p>

          <h2>Timings</h2>
          <p className="timings">
            Monday - Friday: 9:00 AM to 5:00 PM<br />
            Saturday - Sunday: Closed
          </p>

          <h2>Address</h2>
          <p className="address">
            Chitkara University<br />
            Rajpura, Punjab, 140401
          </p>

          <h2>Contact Us</h2>
          <p className="contact-info">
            For any inquiries, feel free to contact us via email or phone:
          </p>
          <p className="contact-info">Email: hardik1606.be22@chitkara.edu.in</p>
          <p className="contact-info">Mobile: 7206657060</p>
          <h1>Your Valuable Feedback</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="Enter Your Name" style={{fontWeight:"700", marginRight:"30px" ,height:"50px",color:"darkblue",fontSize:"25px",textAlign:"center"}} />
            </div>
            <div className="form-group">
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="Enter Your Email" style={{fontWeight:"700",marginRight:"30px",height:"50px",color:"darkblue",fontSize:"25px",textAlign:"center"}}/>
            </div>
            <div className="form-group">
              <textarea name="message" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="Feedback"  style={{fontWeight:"700",height:"auto",width:"450px",color:"darkblue",fontSize:"30px",textAlign:"center",borderRadius:"40px",textAlign:"center"}}></textarea>
            </div>
            <button type="submit" className='button'>Submit</button>
          </form>
        </div>
        <br />
      </div>
      </>
    );
  }
}

export default ContactUs;
