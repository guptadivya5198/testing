import { useEffect, useState } from 'react';
import { fetchMeals } from '../api/meals.api';
import MealCard from './MealCard';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMeals(setMeals);
  }, []);
  return (
    <div
      className="flex gap-4 overflow-x-auto overflow-y-hidden"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {meals.map((meal) => {
        return (
          <MealCard
            key={meal.idMeal}
            id={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
          />
        );
      })}
    </div>
  );
};
export default Meals;
