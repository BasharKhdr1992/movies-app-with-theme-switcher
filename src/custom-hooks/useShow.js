import { useReducer, useEffect } from 'react';
import * as Types from '../reducers/ActionTypes';
import { ShowReducer } from '../reducers/ShowReducer';
import axios from '../api/axios';

const initialState = {
  shows: [],
  error: null,
  isLoading: false,
};

const fetchShow = async (id) => {
  try {
    const res = await axios.get(`/shows/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const useShow = (ids) => {
  const [state, dispatch] = useReducer(ShowReducer, initialState);

  useEffect(() => {
    const fetchShows = async () => {
      dispatch({
        type: Types.SHOWS_LOADING,
      });

      try {
        const promises = ids.map((id) => fetchShow(id));
        const shows = await Promise.all(promises);
        dispatch({
          type: Types.SHOWS_LOADED,
          payload: shows,
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
    };

    fetchShows(ids);
  }, [ids]);

  return [state, dispatch];
};
