import React, {Component} from 'react'
import { connect } from 'react-redux'
import AnsweredPoll from './AnsweredPoll'
import UnansweredPoll from './UnansweredPoll'
import {withRouter} from 'react-router-dom'

class Questions extends Component{
    render(){
        const {answeredQuestionsIds, unansweredQuestionsIds, id} = this.props
        return(
            <div>
                {answeredQuestionsIds.includes(id)
                ?<AnsweredPoll id = {id}/>
                :<UnansweredPoll id = {id}/>}
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users},props){
    const {id} = props.match.params
    const answeredQuestions = users[authedUser].answers
    console.log(users[authedUser].answers)
    const answeredQuestionsIds = Object.keys(answeredQuestions)
    console.log(answeredQuestionsIds)
    const unansweredQuestionsIds = []
    Object.keys(questions).map((id)=>{
        if(!answeredQuestionsIds.includes(id)){
            unansweredQuestionsIds.push(id)
        }
    })
    return{
        answeredQuestionsIds,
        unansweredQuestionsIds,
        id
    }
}

export default withRouter(connect(mapStateToProps)(Questions))