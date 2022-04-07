import {useEffect, useState} from 'react';

const BASE_URL = 'https://api.spacexdata.com/v3/launches/';

const useFetch = ({endpoint}: {endpoint: string}) => {
  const [launches, setLaunches] = useState([]);

  const fetchData = async <T>(): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    setLaunches(data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {launches};
};

export default useFetch;
