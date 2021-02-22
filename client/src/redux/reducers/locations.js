import { ADD_LOCATION, REMOVE_LOCATION, GET_LOCATIONS } from '../actions';

const locationReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return [...state, action.payload]; // need to spread the new data into the state array
    case REMOVE_LOCATION:
      return state.filter((location) => location.id !== action.payload);
    case GET_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;
