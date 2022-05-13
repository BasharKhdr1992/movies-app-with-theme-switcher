import * as Types from './ActionTypes';

export const ShowImagesReducer = (state, action) => {
  switch (action.type) {
    case Types.IMAGES_LOADING: {
      return { ...state, isLoading: true, error: null };
    }

    case Types.IMAGES_LOADED: {
      return { ...state, isLoading: false, images: action.payload };
    }

    case Types.IMAGES_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
};
