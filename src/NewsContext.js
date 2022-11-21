import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = 'bc99b3ffd643484aa7b987cc660ffaa7';
  console.log(props.apiLink);

  useEffect(() => {
    axios
      .get(`${props.apiLink}&apiKey=${apiKey}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
