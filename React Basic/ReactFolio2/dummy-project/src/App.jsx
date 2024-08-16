import React, { useEffect, useState } from 'react';
import { apiUrl, filterData } from './Data';
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import { toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error('Something went wrong');
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
