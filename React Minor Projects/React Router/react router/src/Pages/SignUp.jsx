import React from 'react';
import signupImg from '../assest/signup.png';
import Tamplate from '../Components/Tamplete';
function SignUp({ setLoggedIn }) {
  return (
    <Tamplate
      title="Join the millions learning to code with Us"
      descr1="Build skills for today, tomorrow and beyond"
      descr2="Eductation to future-proof your career"
      image={signupImg}
      formtype="signup"
      setLoggedIn={setLoggedIn}
    />
  );
}

export default SignUp;
