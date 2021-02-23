import {
  ADD_LOCATION,
  REMOVE_LOCATION,
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

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
