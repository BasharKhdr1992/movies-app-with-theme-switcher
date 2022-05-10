import * as Types from './ActionTypes';

export const EpisodesReducer = (state, action) => {
  switch (action.type) {
    case Types.EPISODES_LOADING: {
      return { ...state, isLoading: true, error: null };
    }

    case Types.EPISODES_LOADED: {
      return { ...state, isLoading: false, episodes: action.payload };
    }

    case Types.EPISODES_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
};
