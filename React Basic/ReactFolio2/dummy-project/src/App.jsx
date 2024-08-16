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

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output);
    } catch (error) {
      toast.error('Something went wrong');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterData={filterData} />
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
    </div>
  );
}

export default App;
