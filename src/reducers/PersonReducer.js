import * as Types from './ActionTypes';

export const PersonReducer = (state, action) => {
  switch (action.type) {
    case Types.PERSON_LOADING: {
      return { ...state, isLoading: true, error: null };
    }

    case Types.PERSON_LOADED: {
      return { ...state, isLoading: false, person: action.payload };
    }

    case Types.PERSON_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
};
