import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";
import { loadingBarReducer } from "react-redux-loading";
import { combineReducers } from "redux";
import loading from "./loading";

export default combineReducers({
    users,
    questions,
    authedUser,
    loading,
    loadingBar : loadingBarReducer
})