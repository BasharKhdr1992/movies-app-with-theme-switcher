import React, { createContext, useReducer } from 'react';
import * as Types from '../reducers/ActionTypes';
import { useShow } from './../custom-hooks/useShow';
import axios from './../api/axios';
import { ShowCastReducer } from './../reducers/ShowCastReducer';

const showsIds = [169, 82, 123, 335, 491, 3928, 83, 527, 73, 179, 430, 22];

export const ShowContext = createContext();

export const ShowProvider = (props) => {
  const [stateShow, dispatchShow] = useShow(showsIds);

  const [stateCast, dispatchCast] = useReducer(ShowCastReducer, {
    cast: [],
    isLoading: false,
    error: null,
  });

  const searchShows = (keyword) => {
    dispatchShow({
      type: Types.SHOWS_LOADING,
    });

    setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${keyword}`
        );
        dispatchShow({
          type: Types.SHOWS_LOADED,
          payload: res.data.map((data) => data.show),
        });
      } catch (error) {
        if (error.response) {
          dispatchShow({
            type: Types.SHOWS_ERROR,
            payload: error.response.data,
          });
        } else if (error.request) {
          dispatchShow({
            type: Types.SHOWS_ERROR,
            payload: error.request,
          });
        } else {
          dispatchShow({
            type: Types.SHOWS_ERROR,
            payload: error.message,
          });
        }
      }
    }, 2500);
  };

  const addCast = (showId) => {
    dispatchCast({
      type: Types.CAST_LOADING,
    });

    setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://api.tvmaze.com/shows/${showId}/cast`
        );
        dispatchCast({
          type: Types.CAST_LOADED,
          payload: res.data,
        });
      } catch (error) {
        if (error.response) {
          dispatchCast({
            type: Types.CAST_ERROR,
            payload: error.response.data,
          });
        } else if (error.request) {
          dispatchCast({
            type: Types.CAST_ERROR,
            payload: error.request,
          });
        } else {
          dispatchCast({
            type: Types.CAST_ERROR,
            payload: error.message,
          });
        }
      }
    }, 2500);
  };

  return (
    <ShowContext.Provider
      value={{ shows: stateShow, searchShows, cast: stateCast, addCast }}
    >
      {props.children}
    </ShowContext.Provider>
  );
};
