import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // Adjusted import statement

const HomePage = () => {
  const navigate = useNavigate();
  // Define state for courses
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to AIML",
      instructor: "AIML",
      link: "/AimlPage",
    },
    {
      id: 2,
      title: "Introduction to FEE",
      instructor: "FEE",
      link: "/FeePage",
    },
  ]);
  const [resultList, setResultList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle changes in search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle form submission and trigger search
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResultList(filteredCourses);
  };

  // Function to toggle trainer description
  const toggleDescription = (id) => {
    const descriptionElement = document.getElementById(id);
    descriptionElement.classList.toggle("show");
  };

  // Function to handle subscription
  const handleSubscribe = () => {
    if (email === "") {
      alert("Please enter your email.");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        alert("Subscribed with email: " + email);
      } else {
        alert("Invalid email address. Please enter a valid email.");
      }
    }
  };

  // Render the list of courses based on search results
  const renderCourses = () => {
    const coursesToRender = resultList.length ? resultList : courses;
    return coursesToRender.map((course) => (
      <li key={course.id}>
        {course.title} - {course.instructor}
      </li>
    ));
  };

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
          {/* Search form */}
          <div className="search-container">
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="search"
                placeholder="Search your desired course"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn5" type="submit">
                Search
              </button>
            </form>
            <div className="result-section">
              <ul>
                {resultList &&
                  resultList.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to={item.link}> {item.title} </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
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
      <div className="home">
        <div className="pix" />
        <div className="homedisplay">
          Empowering minds nationwide, our educational network is the pinnacle
          of learning, connecting learners of all backgrounds across India.
        </div>
      </div>
      <div className="traine">
        <div className="th12">
          Explore our esteemed lineup of expert trainers.
        </div>
        <div className="trainpic">
          <div
            className="trainer trainer1"
            onClick={() => toggleDescription("description1")}
          >
            <div id="description1" className="description">
              <h2> Dr. Kalpana Rai </h2>
              <p>
                She excels in AIML, complemented by her expertise in Machine
                Learning
              </p>
            </div>
          </div>
          <div
            className="trainer trainer2"
            onClick={() => toggleDescription("description2")}
          >
            {/* Background image and other styles */}
            <div id="description2" className="description">
              <h2>Mark zuckererg</h2>
              <p>
                As the co-founder and CEO of Meta Platforms, he possesses
                profound expertise in full-stack development and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mid">
        <br />
        <h1 className="thome3">Our Agenda</h1>
        <p className="midp">
          In our educational platform, we stand amidst a boundless expanse of
          knowledge, serving as a beacon of enlightenment for all who seek it.
          Here, within the vast digital landscape, we offer a sanctuary for
          learners of every age and background. Whether you're a student
          embarking on your academic journey, an educator shaping minds, or a
          lifelong learner pursuing newfound interests, our platform provides a
          haven for exploration, discovery, and growth. Each interaction with
          our platform is an opportunity to delve deeper into subjects, to
          overcome challenges, and to celebrate achievements as a testament to
          your dedication. Welcome to a place where learning knows no bounds,
          where the pursuit of knowledge transcends boundaries, and where the
          future of education is shaped with each passing moment.
        </p>
      </div>

      <div className="endhome">
        {/* Display added courses */}
        <div>
          <br />
          <div className="ah13">Newly Added Courses</div>
          <div className="cour">
            <Link to="/AimlPage" className="course1" />
            <Link to="/FeePage" className="course2" />
          </div>
        </div>

        <div className="midhome">
          <div className="thome">
            Parent Bridge Academy: Unveiling the Benefits of Our Courses!
          </div>
          <div className="thome2">
            "Embark on an Enlightening Journey with EduHub, Where a Multitude of
            Educational Offerings Await, Catering to Every Curiosity, Passion,
            and Pursuit, Elevating Your Learning Experience to New Heights!"
          </div>
          <div class="boxhead">
            <div class="box">
              <div className="box1" />
            </div>
            <div class="box">
              <div className="box2" />
            </div>
            <div class="box">
              <div className="box3" />
            </div>
            <div class="box">
              <div className="box4" />
            </div>
          </div>

          <div className="legal">
            <p>Copyright ©2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
