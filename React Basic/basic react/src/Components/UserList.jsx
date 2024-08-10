import React from 'react';
import UserCard from './UserCard';
import data from '../Utiles/data';
function UserList() {
  return (
    <div>
      {data.map(({ name, email, rollno }) => (
        <UserCard name={name} email={email} rollno={rollno} />
      ))}
    </div>
  );
}
export default UserList;
