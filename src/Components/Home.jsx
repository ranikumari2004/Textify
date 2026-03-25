import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function HomePage() {
  const navigate = useNavigate();

  // Set Page Title
  useEffect(() => {
    document.title = "TextUtils | Home";
  }, []);

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card w-50 p-4 shadow text-center">
        <h1 className="mb-3">Welcome to TextUtils</h1>
        <p className="text-muted">
          Enhance your text with powerful formatting and analysis tools.
        </p>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/textform")}>
          Get Started
        </button>
      </div>
    </div>
  );
}
