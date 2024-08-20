export const fetchMeals = async (setMeals) => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
  );
  const data = await response.json();

  setMeals(data.meals);
};

export const fetchMealDescription = async (setMealDescrition, id) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  console.log(data.meals);

  setMealDescrition(data.meals[0]);
};
