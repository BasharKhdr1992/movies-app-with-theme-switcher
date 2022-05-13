import React, { createContext, useReducer } from 'react';
import { EpisodesReducer } from '../reducers/EpisodesReducer';
import * as Types from '../reducers/ActionTypes';
import * as Api from '../api/api';

const initialState = {
  episodes: [],
  isLoading: false,
  error: null,
};

export const EpisodeContext = createContext();

export const EpisodeProvider = (props) => {
  const [state, dispatch] = useReducer(EpisodesReducer, initialState);

  const addEpisodes = (seasonId) => {
    dispatch({
      type: Types.EPISODES_LOADING,
    });

    setTimeout(() => Api.addEpisodes(seasonId, dispatch), 2500);
  };

  return (
    <EpisodeContext.Provider value={{ episodes: state, addEpisodes }}>
      {props.children}
    </EpisodeContext.Provider>
  );
};
