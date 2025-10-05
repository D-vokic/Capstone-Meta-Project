// import React, { useState } from "react";
// import "./LoginPage.css";
// import restaurantLogin from "../images/restaurant-login.jpg";

// function LoginPage() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     remember: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.email && formData.password) {
//       alert(`Welcome back, ${formData.email}!`);
//       setFormData({ email: "", password: "", remember: false });
//     } else {
//       alert("Please fill in all required fields.");
//     }
//   };

//   return (
//     <section className="login-page container">
//       <div
//         className="login-image"
//         style={{ backgroundImage: `url(${restaurantLogin})` }}
//       >
//         <div className="overlay">
//           <h1>Welcome Back to Little Lemon</h1>
//           <p>Log in to enjoy personalized offers and faster checkout.</p>
//         </div>
//       </div>

//       <div className="login-form-container">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h2>Login to Your Account</h2>

//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="••••••••"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-options">
//             <label className="remember">
//               <input
//                 type="checkbox"
//                 name="remember"
//                 checked={formData.remember}
//                 onChange={handleChange}
//               />
//               Remember me
//             </label>
//             <a href="#" className="forgot-link">
//               Forgot password?
//             </a>
//           </div>

//           <button type="submit" className="login-btn">
//             Login
//           </button>

//           <p className="signup-text">
//             Don’t have an account?{" "}
//             <a href="#" className="signup-link">
//               Sign up
//             </a>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      alert(`Welcome back, ${formData.email}!`);
      setFormData({ email: "", password: "", remember: false });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <section className="login-page no-image container">
      <div className="login-intro">
        <h1>Welcome Back to Little Lemon</h1>
        <p>Log in to enjoy personalized offers and faster checkout.</p>
      </div>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to Your Account</h2>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <label className="remember">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember me
            </label>
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-text">
            Don’t have an account?{" "}
            <a href="#" className="signup-link">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
