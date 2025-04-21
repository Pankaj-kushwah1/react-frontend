import React, { useState } from "react";
import "./LoginSignup.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import user_icon from "../../assets/person.png";
import { ToastContainer, toast } from "react-toastify";
import { isEmail } from "validator";
import Navbar from "../Navbar/Navbar";

function LoginSignup() {
  const [action, setAction] = useState("Signup");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateInputs()) {
      const payload = { fullName, email, password };
      try {
        const data = await postMethod(
          action === "Signup"
            ? "http://localhost:3001/signup"
            : "http://localhost:3001/login",
          payload
        );
        if (data?.success) {
          toast.success(data?.message || "Signup successful");
          setFullName("");
          setEmail("");
          setPassword("");
        } else {
          toast.error(data?.message || "Signup failed");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        toast.error("Something went wrong");
      }
    }
  };

  const postMethod = async (url, payload) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in postMethod:", error);
      throw error;
    }
  };
  const getMethod = async (url, payload) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in postMethod:", error);
      throw error;
    }
  };

  function validateInputs() {
    if (action === "Signup") {
      console.log('action === "Signup": ', action === "Signup");
      console.log("fullName: ", fullName);
      if (!fullName) {
        toast.error("Full Name is required");
        return false;
      }
    }
    if (!email) {
      toast.error("Email is required");
      return false;
    } else if (!isEmail(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  }
  const isFormValid =
    action === "Signup" ? fullName && email && password : email && password;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="header">
          <div className="text">
            {action === "Signup" ? "Sign Up" : "Login"}
          </div>
          <div className="underline"></div>
        </div>

        <form onSubmit={handleSubmit} className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="name" />
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={fullName}
                onChange={handleInputChange}
              />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="Email" />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          {action === "Login" ? (
            <div className="forgot-password">
              Lost Password?
              <span
                onClick={() => {
                  setAction("Signup");
                }}
              >
                Click Here
              </span>
            </div>
          ) : (
            <div className="forgot-password">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setAction("Login");
                }}
              >
                Click Here
              </span>
            </div>
          )}

          <div className="submit_container">
            <button
              className="submit"
              // disabled={!isFormValid}
            >
              {action === "Signup" ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
      </div>

      {/* Toast Container to display toasts */}
      <ToastContainer />
    </>
  );
}

export default LoginSignup;
