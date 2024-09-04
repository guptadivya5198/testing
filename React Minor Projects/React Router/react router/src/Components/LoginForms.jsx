import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function LoginForms({ setLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success('Logged In');
    navigate('/dashboard');
  }
  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Id"
          name="email"
        />
      </label>
      <label>
        <p>
          Password <sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>
      <button>Sign In</button>
    </form>
  );
}

export default LoginForms;
