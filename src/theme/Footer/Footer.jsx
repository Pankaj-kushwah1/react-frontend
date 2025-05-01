import React from "react";
import "./Footer.css";
import { useLocation, useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const canGoBack = window.history.length > 1;
  console.log("window.history.length: ", window.history.length);
  console.log("canGoBack: ", canGoBack);
  return (
    <div className="footer-container">
      {/* <h1 className="bg-info">You are on :{location.pathname=='/'?"Home":location.pathname}</h1> */}
      {/* <div className="navigation-button">
        <div className="back ">
          {canGoBack && (
            <button className="back-btn  btn" onClick={() => navigate(-1)}>
              Go Back
            </button>
          )}
        </div>
        <div className="forth ">
          {" "}
          <button className="forth-btn  btn" onClick={() => navigate(1)}>
            Go forward
          </button>{" "}
        </div>
      </div> */}
      <footer>
        <p>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
