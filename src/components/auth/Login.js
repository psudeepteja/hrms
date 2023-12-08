import { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import "./style.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 3;
  };

  const isFormValid = () => {
    return isEmailValid(data.email) && isPasswordValid(data.password);
  };

  const handleLogin = () => {
    if (isFormValid()) {
    if (data.email === 'hr@unicsol.com' && data.password === '123') {
        setLoginStatus("success");
        navigate('/hr-dashboard');

      } else {
        
        setLoginStatus("error")
        console.error('Invalid credentials');
      }
    }
  };

  return (
    <div className="container" style={{border:"1px solid black", padding:"50px"}}>
      <div className="formGroup">
        <label htmlFor="email" className="label">
          Email :{" "}
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
          className="input"
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password" className="label">
          Password :{" "}
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={data.password}
          className="input"
        />
      </div>
      <button
        type="submit"
        disabled={!isFormValid()}
        onClick={handleLogin}
        className="button"
      >
        Login
      </button>
      {loginStatus === "success" && (
        <p className="successMessage">Login successful!</p>
      )}
      {loginStatus === "error" && (
        <p className="errorMessage">Invalid Credentials!</p>
      )}
    </div>
  );
}
export default Login;
