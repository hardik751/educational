
    import React, { useState, useEffect } from "react";

    const Quiz = () => {
      const [questions, setQuestions] = useState([]);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
    
      useEffect(() => {
        const localQuestions = [
          {
            question: "What does AIML stand for?",
            options: ["Artificial Intelligence Markup Language", "Advanced Internet Machine Learning", "Automated Information Management Language", "All of the above"],
            correctAnswer: "Artificial Intelligence Markup Language"
          },
          {
            question: "What is the primary goal of AIML?",
            options: ["To develop human-like intelligence in machines", "To automate repetitive tasks", "To create chatbots", "To enhance internet security"],
            correctAnswer: "To develop human-like intelligence in machines"
          },
          {
            question: "Which programming language is commonly used for developing AIML-based applications?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correctAnswer: "Python"
          },
          {
            question: "What is a chatbot?",
            options: ["A robot designed to clean chat rooms", "A program that simulates human conversation", "A chat room for robots", "A chat-based game"],
            correctAnswer: "A program that simulates human conversation"
          },
          {
            question: "What is the Turing Test?",
            options: ["A test to determine if a computer can exhibit human-like behavior", "A test to assess cognitive ability in children", "A test to evaluate internet speed", "A test to measure emotional intelligence"],
            correctAnswer: "A test to determine if a computer can exhibit human-like behavior"
          },
          {
            question: "Who proposed the Turing Test?",
            options: ["Alan Turing", "Elon Musk", "Bill Gates", "Steve Jobs"],
            correctAnswer: "Alan Turing"
          },
          {
            question: "What is natural language processing (NLP)?",
            options: ["A technique for analyzing and interpreting human language", "A method for encoding data", "A type of programming language", "A way to encrypt messages"],
            correctAnswer: "A technique for analyzing and interpreting human language"
          },
          {
            question: "Which company developed the first chatbot?",
            options: ["IBM", "Microsoft", "Google", "Facebook"],
            correctAnswer: "IBM"
          },
          {
            question: "What is the name of the first chatbot?",
            options: ["ELIZA", "Siri", "Alexa", "Cortana"],
            correctAnswer: "ELIZA"
          },
          {
            question: "What is machine learning?",
            options: ["A branch of artificial intelligence", "A type of computer hardware", "A programming language", "A method for sending data over a network"],
            correctAnswer: "A branch of artificial intelligence"
          },
        ];
        setQuestions(localQuestions.slice(0, 15)); // Set only the first 15 questions
      }, []);
    
      const handleAnswer = (selectedOption) => {
        const correctAnswer = questions[currentQuestion].correctAnswer;
        // Check if the selected option matches the correct answer
        if (selectedOption === correctAnswer) {
          setScore(score + 1);
        }
        // Move to the next question
        setCurrentQuestion(currentQuestion + 1);
      };
    
      const submitScore = async () => {
        try {
          // Send a POST request to your backend API to store the quiz score
          const response = await fetch('http://localhost:5000/quizscores', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ score }),
          });
          if (response.ok) {
            console.log('Quiz score saved successfully!');
          } else {
            console.error('Failed to save quiz score');
          }
        } catch (error) {
          console.error('Error saving quiz score:', error);
        }
      };
      
    
      useEffect(() => {
        if (currentQuestion === questions.length) {
          // Quiz completed, submit the score to the backend
          submitScore();
        }
      }, [currentQuestion, questions]);
    
      const restartQuiz = () => {
        // Reset score and current question to start the quiz again
        setScore(0);
        setCurrentQuestion(0);
      };
    
      return (
<div className="aibg">
  <div className="quiz-container">
    {currentQuestion < questions.length ? (
      <div>
        <h2 className="question">Question {currentQuestion + 1}</h2>
        <p>{questions[currentQuestion].question}</p>
        <ul className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <li key={index} className="option" onClick={() => handleAnswer(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div>
        <h2 className="result">Quiz Completed!</h2>
        <p className="result">Your Score: {score}</p>
        <p className="thank-you-message">Thank you for taking the quiz!</p>
      </div>
    )}
  </div>
</div>

      );
    };
    
    export default Quiz;
    