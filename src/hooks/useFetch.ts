import { useEffect, useState } from 'react';
import axios from 'axios';
import { IError } from '@interface/errorType';
import { formValues } from '@interface/formValues';
import { IOffer } from '@interface/offerType';

export const useFetch = (payload: formValues) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<IOffer>>([]);
  const [error, setError] = useState<IError | null>(null);

  useEffect(() => {
    setError(null);
    setLoading(true);

    const fetchData = async () => {
      try {
        const offers = await axios.post(
          'https://run.mocky.io/v3/8258eada-7c19-41f9-82d6-57a01350073b',
          JSON.stringify(payload),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        setData(offers.data);
      } catch (error) {
        setError(error as IError);
      }
      setLoading(false);
    };
    fetchData();
  }, [payload]);

  return { data, error, loading };
};
