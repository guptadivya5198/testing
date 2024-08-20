import { useEffect, useState } from 'react';
import Meals from '../components/Meals';
import { fetchDetails } from '../api/details.api';

function Home() {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetchDetails(setCategories, setAreas);
  }, []);
  return (
    <>
      <div>
        <h1>Categories</h1>
        <div className="flex gap-2">
          {categories.map((category, index) => {
            return <div key={index}>{category.strCategory}</div>;
          })}
        </div>
      </div>
      <div>
        <h1>Areas</h1>
        <div className="flex gap-2">
          {areas.map((area, index) => {
            return <div key={index}>{area.strArea}</div>;
          })}
        </div>
      </div>
      {/* <div>
        <h1>Ingredients</h1>
      </div> */}
      <Meals />
    </>
  );
}

export default Home;
