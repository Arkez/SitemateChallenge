import { useEffect, useState} from 'react';
import { API } from './useApiConnection'

const useFetchData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await API.get('/top-headlines?country=us');
        setData(response);
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, []);

  return {
    data,
  };
};

export default useFetchData;