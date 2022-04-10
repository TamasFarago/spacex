import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux"
import { addUpcomings } from '../store/launchList/actions/addUpcomings';

const BASE_URL = 'https://api.spacexdata.com/v3/launches/';

const useFetch = ({endpoint}: {endpoint: string}) => {
  const [launches, setLaunches] = useState([]);

  const dispatch =  useDispatch()

  const fetchData = async <T>(): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    dispatch(addUpcomings(data))
    setLaunches(data);
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {launches};
};

export default useFetch;
