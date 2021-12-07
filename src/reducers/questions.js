import { RECEIVE_QUESTIONS, UPDATE_QUESTION_ANSWER, UPDATE_QUESTIONS} from "../actions/questions";

export default function questions(state = {}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case UPDATE_QUESTION_ANSWER:
            const {qid , answer, authedUser} = action.answerDetails
            return{
                ...state,
                [qid]: {
                  ...state[qid],
                  [answer]: {
                    ...state[qid][answer],
                    votes: state[qid][answer].votes.concat([authedUser])
                  }
                }
              }
        case UPDATE_QUESTIONS:
            const {formattedQuestion} = action
            return{
                ...state,
                [formattedQuestion.id] : formattedQuestion
            }
        default :
            return state
    }
}