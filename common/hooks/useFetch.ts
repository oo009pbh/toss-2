import { useCallback } from 'react';

const useGet = (url: string) => {
  return useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    } else {
      return data;
    }
  }, [url]);
};

const usePost = (url: string) => {
  return useCallback(
    async (body: object) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      } else {
        return data;
      }
    },
    [url],
  );
};

export { useGet, usePost };
