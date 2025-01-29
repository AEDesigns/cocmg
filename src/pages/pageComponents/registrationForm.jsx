import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [className, setClassName] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage("");

    if (!fullName || !className) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/register", {
        name: fullName,
        class: className,
      });

      setSuccessMessage("Registration successful!");
      setFullName("");
      setClassName("");
    } catch (error) {
      console.error("Error registering:", error);
      setError("Registration failed, please try again.");
    }
    window.location.reload(true);
  };

  return (
    <div>
      <h2>Register for a Class</h2>

      {/* Accessibility alerts */}
      {error && (
        <p role="alert" style={{ color: "red" }}>
          {error}
        </p>
      )}
      {successMessage && (
        <p role="alert" style={{ color: "green" }}>
          {successMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} aria-label="Registration Form">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            aria-required="true"
            placeholder="Enter your full name"
            aria-describedby="nameHelp"
          />
        </div>

        <div>
          <label htmlFor="className">Class</label>
          <select
            id="className"
            name="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
            aria-required="true"
            aria-describedby="classHelp"
          >
            <option value="">Select a class</option>
            <option value="A Class">A Class</option>
            <option value="B Class">B Class</option>
            <option value="Novice">Novice</option>
            <option value="Mens Masters">Mens Masters</option>
            <option value="Womens">Womens</option>
          </select>
          <small id="classHelp">Choose your competition class</small>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
