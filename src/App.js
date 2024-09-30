import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./component/Login";
import DashboardLayout from "./Student/DashboardLayout";
import "./App.css";
import Faculty_DashboardLayout from "./faculty/Faculty_dashboardlayout";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";
import Error404 from "./Error404";
import Admin_layout from "./admin/Admin_layout";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  localStorage.setItem("index", 0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", JSON.stringify(!darkMode));
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/faculty/*"
              element={
                <ProtectedRoute>
                  <Faculty_DashboardLayout
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <Admin_layout
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<Error404></Error404>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
