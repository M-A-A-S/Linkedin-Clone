import { combineReducers } from "redux";
import articleReducer from "./articleReducer";

import userReducer from "./userReducer";

const rootRdducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

export default rootRdducer;
