import React, { createContext } from 'react';
import * as Types from '../reducers/ActionTypes';
import { useShow } from './../custom-hooks/useShow';
import axios from './../api/axios';

const shows_ids = [169, 82, 123, 335, 491, 3928, 83, 527, 73, 179, 430, 22];

export const ShowContext = createContext();

export const ShowProvider = (props) => {
  const [state, dispatch] = useShow(shows_ids);

  const searchShows = (keyword) => {
    dispatch({
      type: Types.SHOWS_LOADING,
    });

    setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${keyword}`
        );
        dispatch({
          type: Types.SHOWS_LOADED,
          payload: res.data.map((data) => data.show),
        });
      } catch (error) {
        if (error.response) {
          dispatch({
            type: Types.SHOWS_ERROR,
            payload: error.response.data,
          });
        } else if (error.request) {
          dispatch({
            type: Types.SHOWS_ERROR,
            payload: error.request,
          });
        } else {
          dispatch({
            type: Types.SHOWS_ERROR,
            payload: error.message,
          });
        }
      }
    }, 2500);
  };

  return (
    <ShowContext.Provider value={{ shows: state, searchShows }}>
      {props.children}
    </ShowContext.Provider>
  );
};
