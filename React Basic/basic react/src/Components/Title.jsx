import React from 'react';

function Title({ name, contactNo, RollNo }) {
  return (
    <div>
      <h1 style={{ color: 'red' }}>{name}</h1>
      <h1 style={{ color: 'red' }}>{contactNo}</h1>
      <h1 style={{ color: 'red' }}>{RollNo}</h1>
    </div>
  );
}

export default Title;
