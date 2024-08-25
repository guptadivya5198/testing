import React from 'react';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'India',
    streetAddress: '',
    city: '',
    state: '',
    postalcode: '',
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: '',
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log('Finally Printing the value of Form Data');
    console.log(formData);
  }

  return (
    <div className="flex bg-gray-100 flex-col items-center mt-2  w-[1700px] h-[850px] ">
      <form
        className="shadow-xl border border-blue-100 items-center pt-4 mt-1 px-10 w-[700px] h-[840px]"
        onSubmit={submitHandler}
      >
        <label className="font-medium" htmlFor="firstName">
          First Name
        </label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Divya"
          value={formData.firstName}
          onChange={changeHandler}
          className="border border-blue-700 px-1 w-[550px] rounded-[3px]"
        />
        <br />
        <label className="font-medium" htmlFor="lastName">
          Last Name
        </label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Gupta"
          value={formData.lastName}
          onChange={changeHandler}
          className="border border-blue-700 px-1 w-[550px] rounded-[3px]"
        />
        <br />
        <label className="font-medium" htmlFor="email">
          Email
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="divya12@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="border border-blue-700 px-1 w-[550px] rounded-[3px]"
        />
        <br />
        <label className="font-medium" htmlFor="country">
          Country
        </label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="border border-blue-700 px-1 w-[550px] rounded-[3px]"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label className="font-medium" htmlFor="streetAddress">
          {' '}
          StreetAddress
        </label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="border border-blue-700 px-1 w-[550px] rounded-[3px]"
        />
        <br />
        <label className="font-medium" htmlFor="city">
          {' '}
          City
        </label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Lucknow"
          value={formData.city}
          onChange={changeHandler}
          className="border border-blue-700 px-1 w-[550px] rounded-[3px]"
        />
        <br />
        <label className="font-medium" htmlFor="state">
          {' '}
          State / Province
        </label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="UttarPradesh"
          value={formData.state}
          onChange={changeHandler}
          className="border border-blue-700 px-1 w-[550px] rounded-[3px]"
        />
        <br />
        <label className="font-medium" htmlFor="postalcode">
          {' '}
          Postal Code
        </label>
        <br />
        <input
          type="text"
          name="postalcode"
          id="postalcode"
          placeholder="110077"
          value={formData.postalcode}
          onChange={changeHandler}
          className="border border-blue-700 px-1 w-[550px] rounded-[3px]"
        />
        <br />
        <fieldset>
          <legend className="font-medium pt-2">By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div className="items-center mt-3 pt-1 px-2">
              <label className="font-medium " htmlFor="comments">
                Comments
              </label>
              <p> Get Notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex ">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div className="items-center mt-3 pt-1 px-2">
              <label className="font-medium " htmlFor="candidates">
                Candidates
              </label>
              <p> Get Notified when candidates apply for a job.</p>
            </div>
          </div>

          <div className="flex ">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div className="items-center mt-3 pt-1 px-2">
              <label className="font-medium" htmlFor="offers">
                Offers
              </label>
              <p> Get Notified when candidates accept and reject offers.</p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-medium pt-2.5">Push Notification</legend>
          <p className="mb-1 ">
            These are delivered via a SMS to your mobile number
          </p>
          <input
            type="radio"
            name="pushNotification"
            id="pushEverything"
            value="Everything"
            onChange={changeHandler}
          />
          <label className="font-medium px-2.5 pt-2.5" htmlFor="pushEverything">
            EveryThing
          </label>

          <br />
          <input
            type="radio"
            name="pushNotification"
            id="pushEmail"
            value="Same as Email"
            onChange={changeHandler}
          />
          <label className="font-medium px-2.5 py-5" htmlFor="pushEmail">
            Same as Email
          </label>

          <br />
          <input
            type="radio"
            name="pushNotification"
            id="pushNothing"
            value="No push Notification"
            onChange={changeHandler}
          />
          <label className="font-medium px-2.5 py-5" htmlFor="pushNothing">
            No push Notification
          </label>
        </fieldset>
        <div className="pt-4">
          <button className="bg-blue-500 text-white font-bold rounded py-2 px-2 w-20">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
