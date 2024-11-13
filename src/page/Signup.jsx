import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Import the CSS file

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/signup', formData)
      .then((response) => {
        alert('Signup successful!');
      })
      .catch((error) => {
        alert('Error: ' + (error.response?.data?.message || 'Signup failed'));
      });
  };

  return (
    <div className="signup-container">
      <h2>Create a New Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button  type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
