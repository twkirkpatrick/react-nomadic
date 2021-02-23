import alertReducer from "./alerts";
import locationReducer from "./locations";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  alert: alertReducer,
  location: locationReducer
});

export default allReducers;
