import React from 'react';
import frameImage from '../assest/frame.png';
import LoginForms from './LoginForms';
import SignupForm from './SignupForm';

function Tamplate({ title, descr1, descr2, image, formtype, setLoggedIn }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{descr1}</span>
          <span>{descr2}</span>
        </p>
        {formtype === 'signup' ? <SignupForm /> : <LoginForms />}

        <div>
          <div></div>
          <p>Or</p>
          <div></div>
        </div>
        <button>Sign In with Google</button>
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
