import React, { useEffect, useState } from 'react'

export const UseFetch = (url: string) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  const [errors, setErrors] = useState<null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()
        setData(data)
      } catch (error) {
        setErrors(errors);
        
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      
      const controller = new AbortController();
      controller.abort();
    };
  }, [url])
  return { data, loading, errors }


}
