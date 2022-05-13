import axios from './axios';
import * as Types from '../reducers/ActionTypes';

export const searchShows = async (keyword, dispatchShow) => {
  try {
    const res = await axios.get(`search/shows?q=${keyword}`);
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
};

export const addCast = async (showId, dispatchCast) => {
  try {
    const res = await axios.get(`shows/${showId}/cast`);
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
};

export const addImages = async (showId, dispatchImages) => {
  try {
    const res = await axios.get(`shows/${showId}/images`);
    dispatchImages({
      type: Types.IMAGES_LOADED,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      dispatchImages({
        type: Types.IMAGES_ERROR,
        payload: error.response.data,
      });
    } else if (error.request) {
      dispatchImages({
        type: Types.IMAGES_ERROR,
        payload: error.request,
      });
    } else {
      dispatchImages({
        type: Types.IMAGES_ERROR,
        payload: error.message,
      });
    }
  }
};

export const addEpisodes = async (seasonId, dispatchEpisodes) => {
  try {
    const res = await axios.get(`seasons/${seasonId}/episodes`);
    dispatchEpisodes({
      type: Types.EPISODES_LOADED,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      dispatchEpisodes({
        type: Types.EPISODES_ERROR,
        payload: error.response.data,
      });
    } else if (error.request) {
      dispatchEpisodes({
        type: Types.EPISODES_ERROR,
        payload: error.request,
      });
    } else {
      dispatchEpisodes({
        type: Types.EPISODES_ERROR,
        payload: error.message,
      });
    }
  }
};

export const addSeasons = async (showId, dispatchSeasons) => {
  try {
    const res = await axios.get(`shows/${showId}/seasons`);
    dispatchSeasons({
      type: Types.SEASONS_LOADED,
      payload: res.data,
    });
  } catch (error) {
    if (error.response) {
      dispatchSeasons({
        type: Types.SEASONS_ERROR,
        payload: error.response.data,
      });
    } else if (error.request) {
      dispatchSeasons({
        type: Types.SEASONS_ERROR,
        payload: error.request,
      });
    } else {
      dispatchSeasons({
        type: Types.SEASONS_ERROR,
        payload: error.message,
      });
    }
  }
};
