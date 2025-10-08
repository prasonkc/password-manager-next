"use client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Manager from "./Manager";
import Display from "./Display";
import PasswordGen from "./PasswordGen";

export default function ClientApp() {
  const [items, setItems] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures this runs only in browser
  }, []);

  if (!isClient) return null;

  return (
    <BrowserRouter>
      {/* Desktop layout */}
      <Navbar />
      <div className="hidden md:flex">
        <div className="flex-col">
          <Manager items={items} setItems={setItems} />
          <PasswordGen />
        </div>
        <Display items={items} setItems={setItems} />
      </div>

      {/* Mobile layout */}
      <div className="flex flex-col md:hidden">
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
      </div>
    </BrowserRouter>
  );
}
