import React from 'react';
import frameImage from '../assest/frame.png';
import LoginForms from './LoginForms';
import SignupForm from './SignupForm';
import { FcGoogle } from 'react-icons/fc';

function Tamplate({ title, descr1, descr2, image, formtype, setLoggedIn }) {
  return (
    <div className="flex justify-between w-11/12 max-w-[1190px] mx-auto py-3 gap-x-[5px] gap-y-0">
      <div className="w-full max-w-[480px] ">
        <h1 className="text-white font-semibold text-[1.575rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.025rem] leading-[1.625rem] mt-1">
          <span className="text-slate-100 ">{descr1}</span>
          <br />
          <span className="text-blue-100 italic">{descr2}</span>
        </p>
        <br />
        {formtype === 'signup' ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LoginForms setLoggedIn={setLoggedIn} />
        )}
        <div className="flex w-full items-center my-3 gap-x-2">
          <div className="w-full h-[1px] bg-slate-700"></div>
          <p className="font-medium text-slate-50 leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-slate-700"></div>
        </div>

        <button className="w-full flex justify-center rounded-[8px] font-medium border border-slate-700  text-slate-50 px-[12px] py-[8px] gap-x-2 ">
          <FcGoogle className="mt-1 center" />
          Sign In with Google
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px] mt-3 py-4">
        <img
          src={frameImage}
          alt="Pattern"
          width={548}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Pattern2"
          width={548}
          height={460}
          loading="lazy"
          className=" absolute right-3  top-2 "
        />
      </div>
    </div>
  );
}

export default Tamplate;
