import React from 'react';

function Card({ course }) {
  return (
    <div>
      <div>
        <img src={course.image.url}></img>
      </div>
    </div>
  );
}

export default Card;