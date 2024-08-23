import { useState } from 'react';
import './App.css';

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // function firstNameHandler(event) {
  //   // console.log('Changing first Name');
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function lastNameHandler(event) {
  //   // console.log('Changing last Name');
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    fistName: '',
    lastName: '',
    email: ' ',
    comments: ' ',
    isVisible: true,
  });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }
  return (
    <div className="flex flex-col items-center">
      <form className="w-[220px] ">
        <input
          className="border-2 border-black text-center my-3  rounded-md "
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="fistName"
          value={formData.fistName}
        />

        <input
          className="border-2 border-black text-center my-3 rounded-md "
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <input
          className="border-2 border-black text-center my-3 rounded-md "
          type="email"
          placeholder="Enter Your Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <textarea
          className="border-2 border-black text-center my-3 rounded-md "
          placeholder="Enter Your Comments"
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />

        <input
          className="border-2 border-black text-center my-3 mb-3 rounded-md "
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I Visible ?</label>
      </form>
    </div>
  );
}

export default App;
