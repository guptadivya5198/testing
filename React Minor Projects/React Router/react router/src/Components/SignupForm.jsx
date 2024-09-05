import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = ({ setLoggedIn }) => {
  console.log(typeof setLoggedIn);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccounttype] = useState('');
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error('Password do not Match');
      return;
    }
    console.log(typeof setLoggedIn);
    setLoggedIn(true);
    toast.success('Account Created');
    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType,
    };
    console.log('printing final account data');
    console.log(finalData);
    navigate('/dashboard');
  }

  return (
    <div>
      <div className="flex w-full gap-x-2 bg-slate-800  max-w-max border border-black text-slate-50 rounded-full">
        <button
          className={`${
            accountType === 'student'
              ? 'bg-slate-950 text-slate-100'
              : 'bg-transparent text-slate-400'
          } py-0 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccounttype('student')}
        >
          Student
        </button>
        <button
          className={`${
            accountType === 'instructor'
              ? 'bg-slate-950 text-slate-100'
              : 'bg-transparent text-slate-400'
          } py-1 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccounttype('instructor')}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div className="w-full flex justify-between gap-x-3 mt-4">
          <label className="w-full relative mt-0">
            <p className="text-[0.998rem] text-slate-50 mb-1 leading-[1.375rem]">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              className="bg-slate-900 hover:shadow-white text-slate-200 w-full p-[12px] rounded-[0.5rem]"
            />
          </label>

          <label className="w-full relative  mt-0">
            <p className="text-[0.998rem] text-slate-50 mb-1  leading-[1.375rem]">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              className="bg-slate-900 hover:shadow-white text-slate-200 w-full p-[12px] rounded-[0.5rem]"
            />
          </label>
        </div>
        {/* email Address */}
        <label className="w-full mt-0">
          <p className="text-[0.998rem] text-slate-50 mb-1 mt-3 leading-[1.375rem]">
            Email <sup className="text-red-500">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={changeHandler}
            value={formData.email}
            className="bg-slate-900 hover:shadow-white text-slate-200 w-full p-[12px] rounded-[0.5rem]"
          />
        </label>
        <div className="w-full flex justify-between gap-x-3">
          <label className="w-full relative mt-0">
            <p className="text-[0.998rem] text-slate-50 mb-1 mt-3 leading-[1.375rem]">
              Create Password <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              onChange={changeHandler}
              value={formData.password}
              className="bg-slate-900 hover:shadow-white text-slate-200 w-full p-[12px] rounded-[0.5rem]"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[50px] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative mt-0">
            <p className="text-[0.998rem] text-slate-50 mb-1 mt-3 leading-[1.375rem]">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              className="bg-slate-900 hover:shadow-white text-slate-200 w-full p-[12px] rounded-[0.5rem]"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[50px] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-400 w-full rounded-[8px] text-slate-950 px-[10px] py-[8px] mt-6 font-medium">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
