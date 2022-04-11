import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  addUpcomings,
  addCompleted,
} from '../store/launchList/actions';

const BASE_URL = 'https://api.spacexdata.com/v3/launches/';

const useFetch = ({endpoint}: {endpoint: string}) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const fetchData = async <T>(): Promise<T> => {
    setLoading(true)
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (endpoint == 'past') {
      dispatch(addCompleted(data));
    } else {
      dispatch(addUpcomings(data));
    }
    setLoading(false)
    return data;
  };


  useEffect(() => {
    fetchData();
  }, []);

  return {loading}
};

export default useFetch;
