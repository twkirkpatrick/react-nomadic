import {
  ADD_LOCATION,
  REMOVE_LOCATION,
  GET_LOCATIONS,
  SET_LOADING,
  SET_CURRENT,
  OPEN_LOCATION_MODAL,
  CLOSE_LOCATION_MODAL
} from "../actions/types";

const initialState = {
  locations: [],
  current: null,
  loading: null,
  locationModalOpen: false
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false
      };
    case ADD_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload],
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case OPEN_LOCATION_MODAL:
      return {
        ...state,
        locationModalOpen: true
      };
    case CLOSE_LOCATION_MODAL:
      return {
        ...state,
        locationModalOpen: false
      };

    default:
      return state;
  }
};

export default locationReducer;
