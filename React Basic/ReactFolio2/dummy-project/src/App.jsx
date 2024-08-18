import React, { useEffect, useState } from 'react';
import { apiUrl, filterData } from './Data';
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import { toast } from 'react-toastify';
import Spinner from './Components/Spinner';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error('Something went wrong');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-700">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap items-center justify-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
