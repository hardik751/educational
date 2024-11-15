// AimlPage.js
import React from 'react';

import ReactPlayer from 'react-player'; 
import { Link, useNavigate } from 'react-router-dom';

const AimlPage = () => {
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
                    to="/FeePage"
                    className="dropdown-item"
                    style={{ color: "black" }}
                  >
                    Course -FEE
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
  Welcome to the world of AIML, where conversations come to life! Dive into the realm of artificial intelligence and explore the limitless possibilities of conversational interfaces.
  </p>
  </div>
<div className='welim'>

</div>


<div className='aico'>
  <div className='aint'>Introduction to Aiml</div>
    <p className='content'> AIML, or Artificial Intelligence Markup Language, is a significant tool in the realm of chatbots and conversational agents. Developed in the late 1990s by Dr. Richard Wallace, AIML provides a structured framework for creating interactive conversational experiences. At its core, AIML is a dialect of XML, making it easy to understand and implement for developers. Its primary purpose is to define patterns and responses for natural language understanding and generation within chatbot systems.

At its essence, AIML operates on a principle of pattern matching. It allows developers to define patterns that the chatbot should recognize in user input and provide appropriate responses based on those patterns. These patterns can range from simple keyword matching to more complex wildcard expressions and even use of context for more sophisticated interactions.

One of the key features of AIML is its modularity and extensibility. Developers can create and organize AIML files containing sets of patterns and responses, known as "categories," allowing for easy management and customization of the chatbot's behavior. Additionally, AIML supports the use of variables, conditionals, and loops, enabling the creation of dynamic and adaptive conversational experiences.

Overall, AIML serves as a foundational technology for building chatbots and virtual assistants, providing a standardized approach to natural language processing and conversation management. Its simplicity, flexibility, and wide adoption make it a valuable tool for developers seeking to create engaging and effective conversational AI systems.</p>
  
</div>
<div className='de'>
    <p>Detailed video based on AIML</p>
    <ReactPlayer
        url='https://www.youtube.com/watch?v=yiXAmkimZRQ'
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

export default AimlPage;
