import { receiveQuestion } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { toggleLoading } from "./loading";
import { getInitialData } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = 'sarahedo'

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
                .then(({users,questions})=>{
                    dispatch(receiveUsers(users))
                    dispatch(receiveQuestion(questions))
                    dispatch(setAuthedUser(AUTHED_ID))
                    dispatch(hideLoading())
                    dispatch(toggleLoading())
                })
    }
}