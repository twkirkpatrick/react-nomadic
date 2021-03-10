import {
  ADD_LOCATION,
  REMOVE_LOCATION,
  SET_CURRENT,
  GET_LOCATIONS,
  SET_LOADING
} from "./types";
import axios from "axios";

export const getLocations = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get("/api/locations");
    dispatch({
      type: GET_LOCATIONS,
      payload: res.data
    });
  } catch (err) {
    console.error("something went wrong");
  }
};

export const setCurrent = (location) => {
  return {
    type: SET_CURRENT,
    payload: location
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
