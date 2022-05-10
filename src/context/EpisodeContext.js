import React, { createContext, useReducer } from 'react';
import { EpisodesReducer } from '../reducers/EpisodesReducer';
import * as Types from '../reducers/ActionTypes';
import axios from './../api/axios';

const initialState = {
  episodes: [],
  isLoading: false,
  error: null,
};

export const EpisodeContext = createContext();

export const EpisodeProvider = (props) => {
  const [state, dispatch] = useReducer(EpisodesReducer, initialState);

  const addEpisodes = (id) => {
    dispatch({
      type: Types.EPISODES_LOADING,
    });

    setTimeout(async () => {
      try {
        const res = await axios.get(`/seasons/${id}/episodes`);
        dispatch({
          type: Types.EPISODES_LOADED,
          payload: res.data,
        });
      } catch (error) {
        if (error.response) {
          dispatch({
            type: Types.EPISODES_ERROR,
            payload: error.response.data,
          });
        } else if (error.request) {
          dispatch({
            type: Types.EPISODES_ERROR,
            payload: error.request,
          });
        } else {
          dispatch({
            type: Types.EPISODES_ERROR,
            payload: error.message,
          });
        }
      }
    }, 2500);
  };

  return (
    <EpisodeContext.Provider value={{ episodes: state, addEpisodes }}>
      {props.children}
    </EpisodeContext.Provider>
  );
};
