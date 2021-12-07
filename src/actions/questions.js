export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const UPDATE_QUESTION_ANSWER = "UPDATE_QUESTION_ANSWER"
export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS"

export function receiveQuestion(questions) {
    return {
        type : RECEIVE_QUESTIONS,
        questions
    }
}

export function updateQuestionAnswers (answerDetails){
    return{
        type : UPDATE_QUESTION_ANSWER,
        answerDetails 
    }
}

export function updateQuestions(formattedQuestion){
    return{
        type : UPDATE_QUESTIONS,
        formattedQuestion
    }
}