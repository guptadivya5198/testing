import React from 'react';

function Register() {
  function HandleSubmit(e) {
    e.preventDefault();
    console.log('Hello World');
  }
  return (
    <form>
      <input type="email" placeholder="Enter Your Email" />
      <button onClick={HandleSubmit}>Submit</button>
    </form>
  );
}
export default Register;
