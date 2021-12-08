import { receiveQuestion, updateQuestionAnswers, updateQuestions } from "./questions";
import { receiveUsers, updateUserAnswers, updateUserQuestions } from "./users";
import { setAuthedUser } from "./authedUser";
import { toggleLoading } from "./loading";
import { getInitialData } from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";
import {_saveQuestionAnswer, _saveQuestion} from "../utils/_DATA"


const AUTHED_ID = 'tylermcginnis'

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
                .then(({users,questions})=>{
                    dispatch(receiveUsers(users))
                    dispatch(receiveQuestion(questions))
                    // dispatch(setAuthedUser(id))
                    dispatch(hideLoading())
                    dispatch(toggleLoading())
                })
    }
}

export function handlePollAnswer(answer, id){
    return (dispatch, getState) =>{
        const {authedUser} = getState()
        const answerDetails = {
            authedUser,
            answer,
            qid : id

        }
        dispatch(showLoading())
        return _saveQuestionAnswer(answerDetails)
                .then(()=>{
                    dispatch(updateQuestionAnswers(answerDetails))
                    dispatch(updateUserAnswers(answerDetails))
                    dispatch(hideLoading())
                })
    }

}

export function handleNewPoll(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const {authedUser} = getState()
        const question = {
            optionOneText,
            optionTwoText,
            author : authedUser
        }
        return _saveQuestion(question)
                .then((formattedQuestion)=>{
                    dispatch(showLoading())
                    dispatch(updateUserQuestions(formattedQuestion))
                    dispatch(updateQuestions(formattedQuestion))
                    dispatch(hideLoading())
                })
    }
}