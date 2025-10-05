"use client"

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Display from "./components/Display";
import PasswordGen from "./components/PasswordGen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // State Variables for items
  // Lifted state for items that is passed to Display and Manager
  const [items, setItems] = useState([]);

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />

          <div className="hidden md:flex">
            {/* Left side - password import and generator */}
            <div className="flex-col">
              <Manager items={items} setItems={setItems} />
              <PasswordGen />
            </div>

            {/* right side - password manager display */}
            <Display items={items} setItems={setItems} />
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={<Manager items={items} setItems={setItems} />}
          />
          <Route
            path="/password-manager"
            element={<Manager items={items} setItems={setItems} />}
          />
          <Route
            path="/password-display"
            element={<Display items={items} setItems={setItems} />}
          />
          <Route path="/password-generator" element={<PasswordGen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
