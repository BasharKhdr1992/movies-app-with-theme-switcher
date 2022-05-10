import React, { createContext } from 'react';
import { useShow } from './../custom-hooks/useShow';

const shows_ids = [169, 82, 123, 335, 491, 3928, 83, 527, 73, 179, 430, 22];

export const ShowContext = createContext();

export const ShowProvider = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useShow(shows_ids);

  return (
    <ShowContext.Provider value={{ shows: state }}>
      {props.children}
    </ShowContext.Provider>
  );
};
