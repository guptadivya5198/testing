import React from 'react';
import frameImage from '../assest/frame.png';
import LoginForms from './LoginForms';
import SignupForm from './SignupForm';
import { FcGoogle } from 'react-icons/fc';

function Tamplate({ title, descr1, descr2, image, formtype, setLoggedIn }) {
  return (
    <div className="flex w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px] mx-0">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-slate-100 ">{descr1}</span>
          <br />
          <span className="text-blue-100 italic">{descr2}</span>
        </p>
        {formtype === 'signup' ? (
          <SignupForm setLoggedIn={setLoggedIn} />
        ) : (
          <LoginForms setLoggedIn={setLoggedIn} />
        )}
        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-slate-700"></div>
          <p className="font-medium text-slate-50 leading-[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-slate-700"></div>
        </div>

        <button className="w-full flex justify-center rounded-[8px] font-medium border border-slate-700  text-slate-50 px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          Sign In with Google
        </button>
      </div>
      <div>
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
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Tamplate;
