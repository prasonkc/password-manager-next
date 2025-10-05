import React, { useRef } from "react";
import Button from "./Button";
import { useState } from "react";

const Manager = ({ items, setItems }) => {
  // States for data
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [URL, setURL] = useState("");

  // Handler for the Add button
  const handleAdd = (e) => {
    e.preventDefault();

    //Fetch the backend for post request and send the data to server 
    fetch("/api/add", {
      method: "POST",
      // Define the content-type header to json
      headers: {
        "Content-Type": "application/json",
      },
      // send the data to server in string format
      body: JSON.stringify({
        URL: URL,
        userName: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data Saved: " + JSON.stringify(data.entry));

        // Set the items for display
        setItems([...items, data.entry]);

        // Clear the data
        setURL("");
        setUserName("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 w-[80vw] sm:w-[30vw] mx-10 p-6 my-10 rounded-2xl shadow-lg border border-slate-700">
      <h1 className="text-center text-2xl font-semibold mb-6">
        Password Manager
      </h1>

      {/* Form Section */}
      <form className="space-y-4">
        {/* Website URL */}
        <div>
          <input
            className="w-full h-10 px-3 rounded-lg border border-slate-700 shadow-inner text-slate-100 text-center"
            type="text"
            placeholder="Enter the website URL"
            value={URL}
            name="url"
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
        </div>

        {/* Username + Password */}
        <div className="flex-col sm:flex-row">
          <input
            className="w-full sm:w-[45%] h-10 px-3 rounded-lg border border-slate-700 shadow-inner text-slate-100 text-center mr-12 mb-5"
            type="text"
            placeholder="Username"
            name="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            className="w-full sm:w-[45%] h-10 px-3 rounded-lg border border-slate-700 shadow-inner text-slate-100 text-center"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <div className="text-center pt-2">
          <Button type="submit" btnTxt={"Add"} onClick={handleAdd} />
        </div>
      </form>
    </div>
  );
};

export default Manager;
