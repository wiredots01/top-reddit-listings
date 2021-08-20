import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import userPostsReducer from "./user-posts";

const rootReducer = combineReducers({
  redditPosts: userPostsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;