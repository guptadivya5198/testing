import React from 'react';
import { useNavigate } from 'react-router-dom';

const MealCard = ({ name, image, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col border-2 rounded-2xl"
      onClick={() => navigate(`/meal/:${id}`)}
    >
      <p className="text-sm font-bold">{name}</p>
      <div className="w-64">
        <img src={image} alt="" className="w-64 rounded-full" />
      </div>
    </div>
  );
};

export default MealCard;
