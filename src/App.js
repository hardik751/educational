
import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import WelcomePage from "./welcome";
import SignInPage from "./SignInPage";
import SignUpPage from "./signup";
import HomePage from "./home";
import AimlPage from"./AimlPage";
import ContactUs from"./contact";
import Quiz from "./aiquiz";
import FeePage from"./FeePage";
import ProfilePage from"./profile";
import TeacherMeet from "./tm";
import Certification from "./cf";
const App = () => {
  
  return (
    <>
      <Router> {/* Wrap your Routes in a Router */}
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/SignInPage" element={<SignInPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactUs/>} />
            <Route path="/AimlPage" element={<AimlPage />} />
            <Route path="/FeePage" element={<FeePage />} /> 
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/cf" element={<Certification/>} />
            <Route path="/tm" element={<TeacherMeet/>} />
            <Route path="/aiquiz" element={<Quiz />} />
          </Routes>
        </div>
        
      </Router>
    </>
  );
};

export default App;
