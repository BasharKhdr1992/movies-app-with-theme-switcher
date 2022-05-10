import * as Types from './ActionTypes';

export const SeasonsReducer = (state, action) => {
  switch (action.type) {
    case Types.SEASONS_LOADING:
      return { ...state, isLoading: true, error: null };
    case Types.SEASONS_LOADED:
      return { ...state, isLoading: false, seasons: action.payload };
    case Types.SEASONS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
