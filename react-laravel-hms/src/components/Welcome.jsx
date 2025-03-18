import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Welcome.css"; // Add styles in a separate CSS file

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home"); // Redirects to homepage after 2 seconds
    }, 2000);
  }, [navigate]);

  return (
    <div className="welcome-container">
      {/* Preloader */}
      <div id="tm-preloader-in">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Welcome Box */}
      <div className="welcome-box">
        <h1 className="display-4">Welcome to Our Hospital Management System</h1>
        <p className="lead">Your health, our priority.</p>
        <p>Redirecting to the homepage...</p>
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
