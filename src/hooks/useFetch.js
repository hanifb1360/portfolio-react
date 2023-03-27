import { useEffect, useState } from 'react';

// Custom hook
const useFetch = (url) => {
  // Initializing state variables
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //  Fetching data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json(); // Convert response data to JSON format

        setData(json); // Set the data state to the JSON response
        setLoading(false);
      } catch (error) {
        setError(error); // Set error state to the caught error
        setLoading(false);
      }
    };
    fetchData(); // Call the fetchData function
  }, [url]); // useEffect dependency array with the URL as the dependency

  // Return an object with the current state values of loading, error and data
  return { loading, error, data };
};

export default useFetch;
