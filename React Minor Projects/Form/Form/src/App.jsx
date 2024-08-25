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

  return (
    <div className="flex flex-col items-center mt-2">
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Love"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline rounded-sm"
        />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Babbar"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline  rounded-sm"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Babbar12@fmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline  rounded-sm"
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress"> StreetAddress</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline  rounded-sm"
        />
        <br />
        <label htmlFor="city"> City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Lucknow"
          value={formData.city}
          onChange={changeHandler}
          className="outline  rounded-sm"
        />
        <br />
        <label htmlFor="state"> State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="UttarPradesh"
          value={formData.state}
          onChange={changeHandler}
          className="outline  rounded-sm"
        />
        <br />
        <label htmlFor="postalcode"> Postal Code</label>
        <br />
        <input
          type="text"
          name="postalcode"
          id="postalcode"
          placeholder="110077"
          value={formData.postalcode}
          onChange={changeHandler}
          className="outline  rounded-sm"
        />
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
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
            <div>
              <label htmlFor="candidates">Candidates</label>
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
            <div>
              <label htmlFor="offers">Offers</label>
              <p> Get Notified when candidates accept and reject offers.</p>
            </div>
          </div>
        </fieldset>
        <br />

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via a SMS to your mobile number</p>
          <input
            type="radio"
            name="pushNotification"
            id="pushEverything"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">EveryThing</label>

          <br />
          <input
            type="radio"
            name="pushNotification"
            id="pushEmail"
            value="Same as Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as Email</label>

          <br />
          <input
            type="radio"
            name="pushNotification"
            id="pushNothing"
            value="No push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No push Notification</label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
