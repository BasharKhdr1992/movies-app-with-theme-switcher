import React, { createContext, useReducer, useState } from 'react';
import * as Types from '../reducers/ActionTypes';
import { useShow } from './../custom-hooks/useShow';
import { ShowCastReducer } from './../reducers/ShowCastReducer';
import { ShowImagesReducer } from '../reducers/ShowImagesReducer';
import * as Api from '../api/api';

const showsIds = [169, 82, 123, 335, 491, 3928, 83, 527, 73, 179, 430, 22];

export const ShowContext = createContext();

export const ShowProvider = (props) => {
  const [stateShow, dispatchShow] = useShow(showsIds);

  const [stateCast, dispatchCast] = useReducer(ShowCastReducer, {
    cast: [],
    isLoading: false,
    error: null,
  });

  const [stateImages, dispatchImages] = useReducer(ShowImagesReducer, {
    images: [],
    isLoading: false,
    error: null,
  });

  const [isImagesModal, setIsImagesModals] = useState(false);
  const [currentShow, setCurrentShow] = useState(null);

  const searchShows = (keyword) => {
    dispatchShow({
      type: Types.SHOWS_LOADING,
    });

    setTimeout(() => Api.searchShows(keyword, dispatchShow), 2500);
  };

  const addCast = (showId) => {
    dispatchCast({
      type: Types.CAST_LOADING,
    });

    setTimeout(() => Api.addCast(showId, dispatchCast), 2500);
  };

  const addImages = (showId) => {
    dispatchImages({
      type: Types.IMAGES_LOADING,
    });
    setTimeout(() => Api.addImages(showId, dispatchImages), 2500);
  };

  const openImagesModal = () => setIsImagesModals(true);
  const closeImagesModal = () => setIsImagesModals(false);

  return (
    <ShowContext.Provider
      value={{
        shows: stateShow,
        searchShows,
        cast: stateCast,
        addCast,
        images: stateImages,
        addImages,
        isImagesModal,
        openImagesModal,
        closeImagesModal,
        currentShow,
        setCurrentShow,
      }}
    >
      {props.children}
    </ShowContext.Provider>
  );
};
