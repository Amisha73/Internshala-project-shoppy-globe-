import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

function LoginSignup() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    // login and Signup form with toggle funcationality 
    <div className="container md-p-3 my-5 d-flex flex-column align-items-center justify-content-center mx-auto">
      {/* buttons to show toggle function */}
      <div className="d-flex justify-content-between gap-3 mb-3">
        <button
          className={`btn ${activeTab === 'login' ? 'btn-dark' : 'btn-secondary'}`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </button>
        <button
          className={`btn ${activeTab === 'register' ? 'btn-dark' : 'btn-secondary'}` }
          onClick={() => handleTabChange('register')}
        >
          Register
        </button>
      </div>
{/* login and sign up form with ternary operator */}
      {activeTab === 'login' ? (
        <div className='mb-5' >
          <div className="text-center mb-5">
            <p>Sign in with:</p>
            <div className="d-flex justify-content-center mx-auto" style={{ width: '40%' }}>
              <Link to="#!" className="btn fs-4 fw-bold" >
                <FaFacebook/>
              </Link>
              <Link to="#!" className="btn fs-4 fw-bold" >
                <BsTwitterX />
              </Link>
              <Link to="#!" className="btn fs-4 fw-bold" >
                <FcGoogle />
              </Link>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>

          <input type="email" className="form-control mb-4" placeholder="Email address" />
          <input type="password" className="form-control mb-4" placeholder="Password" />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <Link to="#!"><h6>Forgot password?</h6></Link>
          </div>

          <button className="btn btn-primary mb-4 w-100">Sign in</button>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      ) : (
        <div className='mb-5'>
          <div className="text-center mb-3">
            <p>Sign up with:</p>
            <div
              className="d-flex justify-content-center mx-auto"
              style={{ width: "40%" }}
            >
              <Link to="#!" className="btn fs-4 fw-bold" >
                <FaFacebook/>
              </Link>
              <Link to="#!" className="btn fs-4 fw-bold" >
                <BsTwitterX />
              </Link>
              <Link to="#!" className="btn fs-4 fw-bold" >
                <FcGoogle /> 
              </Link>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>

          <input type="text" className="form-control mb-4" placeholder="Name" />
          <input type="text" className="form-control mb-4" placeholder="Username" />
          <input type="email" className="form-control mb-4" placeholder="Email" />
          <input type="password" className="form-control mb-4" placeholder="Password" />

          <div className="d-flex justify-content-center mb-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" htmlFor="terms">
                I have read and agree to the terms
              </label>
            </div>
          </div>

          <button className="btn btn-primary w-100">Sign up</button>
        </div>
      )}
    </div>
  );
}

export default LoginSignup;
