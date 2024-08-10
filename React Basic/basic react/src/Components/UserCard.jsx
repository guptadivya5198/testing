import React from 'react';

function UserCard({ name, email, rollno }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{rollno}</p>
    </div>
  );
}

export default UserCard;
