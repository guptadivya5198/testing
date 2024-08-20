import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealDescription } from '../api/meals.api';

const MealDescription = () => {
  const [mealDetail, setMealDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchMealDescription(setMealDetail, id.substring(1));
  }, []);
  return (
    <div>
      <div>Category: {mealDetail.strCategory}</div>
      <img src={mealDetail.strMealThumb} alt="" />
      <div>Instruction</div>
      <div>{mealDetail.strInstructions}</div>
    </div>
  );
};

export default MealDescription;
