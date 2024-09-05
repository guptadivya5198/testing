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
    console.log('Printing the form data');
    console.log(formData);
    navigate('/dashboard');
  }
  return (
    <form onSubmit={submitHandler}>
      <label className="w-full">
        <p className="text-[0.998rem] text-slate-50 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Id"
          name="email"
          className="bg-slate-900 hover:shadow-white hover:cursor-pointer text-slate-200 w-full p-[12px] rounded-[0.5rem]"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.998rem] text-slate-50 mb-1 mt-3 leading-[1.375rem]">
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className="bg-slate-900 hover:shadow-white text-slate-200 w-full p-[12px] rounded-[0.5rem]"
        />
        <span
          className="absolute right-3 top-[89px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 max-w-max ml-auto text-blue-300">
            Forgot Password
          </p>
        </Link>
      </label>
      <button className="bg-yellow-400 w-full rounded-[8px] text-slate-950 px-[10px] py-[8px] mt-4 font-medium">
        Sign In
      </button>
    </form>
  );
}

export default LoginForms;
