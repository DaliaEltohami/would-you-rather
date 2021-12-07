export const RECEIVE_USERS = "RECEIVE_USERS"
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS"
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS"

export function receiveUsers (users){
    return {
        type : RECEIVE_USERS,
        users
    }
}

export function updateUserAnswers (answerDetails){
    return {
        type : UPDATE_USER_ANSWERS,
        answerDetails
    }
}

export function updateUserQuestions(formattedQuestion){
    return{
        type : UPDATE_USER_QUESTIONS,
        formattedQuestion
    }
}