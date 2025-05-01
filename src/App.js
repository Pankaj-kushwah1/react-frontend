import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Navbar from "./theme/Navbar/Navbar";
import Layout from "./theme/Layout";
import Flex from "./designpractice/Flex/Flex";
function App() {
  const isLoggedIn = localStorage.getItem("user") ? true : false;
  return (
    <BrowserRouter>
    {/* <Layout/> */}
      <Routes>
        <Route
          path="/"
          // element={
          //   <HomePage data={{ title: "Welcome to my new website", about: "This is home page" }} />
          // }
          element={<Flex />}
        />
     {
  !isLoggedIn ? (
    <Route path="/sign-up" element={<LoginSignup />} />
  ) : (
    <Route
      path="/"
      element={
        <HomePage
          data={{ title: "Welcome to my new website", about: "This is home page" }}
        />
      }
    />
  )
}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
