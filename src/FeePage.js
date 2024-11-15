// FeePage.js
import React from 'react';

import ReactPlayer from 'react-player'; 
import { Link, useNavigate } from 'react-router-dom';


const FeePage = () => {
  const navigate = useNavigate(); // Define navigate here

  const handleQuizButtonClick = () => {
    navigate('/aiquiz'); // Navigate to the "/quiz" route
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
            <li>
            <Link
                to="/home"
                className="nav-link"
                style={{ color: "white" }}
              >
                Home Page
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
                    Course -Aiml
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

      <div className='wel'>
  <br/>
  <p >
  Welcome to our Full Stack Developer course! Dive into mastering the tools and skills needed to build cutting-edge web applications from front to back. Get ready to be a versatile and in-demand developer in no time!</p>
  </div>
<div className='welim2'>

</div>


<div className='aico'>
  <div className='aint'>Introduction to Fee</div>
    <p className='content'> Fee structures are foundational components of educational institutions, shaping accessibility and opportunity for learners. They serve as blueprints, delineating the investment required to access knowledge, skills, and resources crucial for personal and professional development. Established to ensure financial sustainability and quality service delivery, fee structures reflect a delicate balance between affordability and value proposition.

At their core.

Transparency and clarity are paramount in fee structures, fostering trust and accountability within the educational community. Institutions strive to provide detailed breakdowns of fees, highlighting tuition costs, payment deadlines, financial aid opportunities, and refund policies. Additionally, flexible payment options and installment plans may be offered to accommodate diverse financial circumstances, ensuring that education remains accessible to all.

Fee structures play a pivotal role in shaping educational access and equity, serving as gateways to knowledge and opportunity. They represent investments in human capital, empowering individuals to unlock their potential and contribute meaningfully to society. As the educational landscape continues to evolve, fee structures will adapt, reflecting changing priorities, innovations in pedagogy, and emerging trends in the global marketplace.

In navigating fee structures, students and stakeholders are encouraged to engage proactively with institutions, seeking guidance and support to navigate financial complexities. By fostering collaboration and communication, educational institutions can cultivate inclusive learning environments that prioritize affordability, accessibility, and student success.</p>
  
</div>
<div className='de'>
    <p>Detailed video based on AIML</p>
    <ReactPlayer
        url='https://www.youtube.com/watch?v=427pAhy9dI8'
        controls
        width={'600px'}
        height={'400px'}
        className='player'
    />
</div>

<div className='test'>
          
          <Link to="/aiquiz" className="nav-link2" style={{ color: "white" }}></Link>
          <button onClick={handleQuizButtonClick} className='btn'>click for test</button>
        </div>
    </>
  );
};

export default FeePage;
