import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [className, setClassName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fullName || !className) {
      alert("Please fill in both fields.");
      return;
    }

    // Send POST request to backend
    try {
      await axios.post("http://localhost:3000/athletics", {
        name: fullName,
        class: className,
      });
      alert("Registration successful!");
      setFullName(""); // Reset the form
      setClassName(""); // Reset the form
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed, please try again.");
    }
  };

  return (
    <div>
      <h2>Register for a Class</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Class</label>
          <select
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          >
            <option value="">Select a class</option>
            <option value="A Class">A Class</option>
            <option value="B Class">B Class</option>
            <option value="Novice">Novice</option>
            <option value="Mens Masters">Mens Masters</option>
            <option value="Womens">Womens</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
