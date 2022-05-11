import React, { createContext, useReducer } from 'react';
import * as Types from '../reducers/ActionTypes';
import { SeasonsReducer } from '../reducers/SeasonsReducer';
import axios from '../api/axios';

const initialState = {
  isLoading: false,
  error: null,
  seasons: [],
};

export const SeasonContext = createContext();

export const SeasonProvider = (props) => {
  const [state, dispatch] = useReducer(SeasonsReducer, initialState);

  const addSeasons = (show_id) => {
    dispatch({
      type: Types.SEASONS_LOADING,
    });
    setTimeout(async () => {
      try {
        const res = await axios.get(`/shows/${show_id}/seasons`);
        dispatch({
          type: Types.SEASONS_LOADED,
          payload: res.data,
        });
      } catch (error) {
        if (error.response) {
          dispatch({
            type: Types.SEASONS_ERROR,
            payload: error.response.data,
          });
        } else if (error.request) {
          dispatch({
            type: Types.SEASONS_ERROR,
            payload: error.request,
          });
        } else {
          dispatch({
            type: Types.SEASONS_ERROR,
            payload: error.message,
          });
        }
      }
    }, 2500);
  };

  return (
    <SeasonContext.Provider value={{ seasons: state, addSeasons }}>
      {props.children}
    </SeasonContext.Provider>
  );
};
