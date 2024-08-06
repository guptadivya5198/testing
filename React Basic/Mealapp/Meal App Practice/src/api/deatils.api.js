export const fetchDestails = async (setCategories) => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
  );

  const data = await response.json();
  setCategories(data.meals);
  console.log('data');
};
