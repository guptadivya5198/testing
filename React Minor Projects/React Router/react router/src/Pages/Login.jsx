import React from 'react';
import Tamplate from '../Components/Tamplete';
import loginImg from '../assest/login.png';
function Login({ setLoggedIn }) {
  return (
    <Tamplate
      title="Welcome Back"
      descr1="Build skills for today, tomorrow and beyond"
      descr2="Eductation to future-proof your career"
      image={loginImg}
      formtype="login"
      setLoggedIn={setLoggedIn}
    />
  );
}

export default Login;
