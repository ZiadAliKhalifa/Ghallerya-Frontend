import { combineReducers } from "redux";

import userReducer from "./reducers/userReducer";
import featuredImageReducer from "./reducers/featuredImageReducer";

const rootReducer = combineReducers({
    user: userReducer,
    featuredImages: featuredImageReducer
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;