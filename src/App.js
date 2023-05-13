import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import ScrollToTop from "react-scroll-to-top";
export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 9;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("yellow");
  const [scrollColor, setScrollColor] = useState("white");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setColor("Red")
      setScrollColor("black")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setColor("yellow")
      setScrollColor("white")
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <LoadingBar height={4} color={color} progress={progress} />
        <ScrollToTop smooth color={scrollColor}
        top="800"
        style={
           { backgroundColor:'#dc3545',
             borderRadius:'20px',
           }
        }/>
        <Routes>
          <Route
            path="/"
            element={
              <News mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News mode={mode}
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
