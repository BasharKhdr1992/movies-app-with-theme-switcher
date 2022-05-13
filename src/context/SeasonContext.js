import React, { createContext, useReducer } from 'react';
import * as Types from '../reducers/ActionTypes';
import { SeasonsReducer } from '../reducers/SeasonsReducer';
import * as Api from '../api/api';

const initialState = {
  isLoading: false,
  error: null,
  seasons: [],
};

export const SeasonContext = createContext();

export const SeasonProvider = (props) => {
  const [state, dispatch] = useReducer(SeasonsReducer, initialState);

  const addSeasons = (showId) => {
    dispatch({
      type: Types.SEASONS_LOADING,
    });
    setTimeout(() => Api.addSeasons(showId, dispatch), 2500);
  };

  return (
    <SeasonContext.Provider value={{ seasons: state, addSeasons }}>
      {props.children}
    </SeasonContext.Provider>
  );
};
