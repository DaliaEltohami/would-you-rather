import { RECEIVE_USERS, UPDATE_USER_ANSWERS, UPDATE_USER_QUESTIONS } from "../actions/users";

export default function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USERS :
            return {
                    ...state,
                    ...action.users
            }
        case UPDATE_USER_ANSWERS:
            const {qid, answer, authedUser} = action.answerDetails
            return{
                ...state,
                [authedUser]:{
                    ...state[authedUser],
                    answers :{
                        ...state[authedUser].answers,
                        [qid] : answer
                    }
                }
            }
        case UPDATE_USER_QUESTIONS:
            const {author} = action.formattedQuestion
            return{
                ...state,
                [author] : {
                    ...state[author],
                    questions: state[author].questions.concat([action.formattedQuestion.id])
                }
            }
        default :
            return state
    }
}