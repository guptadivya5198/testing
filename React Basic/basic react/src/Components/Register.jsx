import React, { useEffect, useState } from 'react';

function Register() {
  // Hooks
  //useState()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState(13);

  function HandleSubmit(e) {
    e.preventDefault();
    console.log('Hello World');
  }
  function increaseAge(e) {
    e.preventDefault();
    setAge(age + 1);
  }
  useEffect(() => {
    console.log(age);
  }, [age]);

  return (
    <form>
      {age > 19 ? (
        <div>
          <h1>{age}</h1>
          <input
            className="bg-blue-200 flex flex-col border border-gray-600 m-2"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-blue-200 flex flex-col border border-gray-600 m-2"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-yellow-100 border border-gray-600 m-2 p-1"
            onClick={HandleSubmit}
          >
            Submit
          </button>
        </div>
      ) : (
        <h1>You are not 18!</h1>
      )}
      <button className="border border-gray-600" onClick={increaseAge}>
        Increase
      </button>
    </form>
  );
}
export default Register;
