import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container my-5 p-4 rounded shadow ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <h1 className="text-center mb-4">
        <i className="bi bi-info-circle-fill text-primary"></i> About TextUtils
      </h1>

      <p className="lead">
        <strong>TextUtils</strong> is a powerful and user-friendly web app designed to help you analyze and manipulate text 
        efficiently. Whether you're a student, writer, or professional, TextUtils makes text processing easier and faster!
      </p>

      <hr className="mb-4" />

      <div className="row text-center">
        <div className="col-md-4">
          <i className="bi bi-type h1 text-success"></i>
          <h4 className="mt-3">Text Transformation Very fast</h4>
          <p>Convert text to UPPERCASE, lowercase, sentence case, or even capitalize each word with just a click.</p>
        </div>

        <div className="col-md-4">
          <i className="bi bi-card-text h1 text-danger"></i>
          <h4 className="mt-3">Word & Character Count</h4>
          <p>Instantly get the total word and character count of your text input, making it perfect for analysis.</p>
        </div>

        <div className="col-md-4">
          <i className="bi bi-brush h1 text-info"></i>
          <h4 className="mt-3">Whitespace & Formatting</h4>
          <p>Remove extra spaces, format paragraphs, and clean your text for better readability.</p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Dark Mode Toggle Button */}
      <div className="text-center">
        <button className={`btn ${darkMode ? "btn-light" : "btn-dark"}`} onClick={toggleDarkMode}>
          {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
        </button>
      </div>
    </div>
  );
}
