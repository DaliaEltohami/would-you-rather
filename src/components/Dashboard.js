import React, {Component} from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Dashboard extends Component{
    state = {
        view : 'unanswered'
    }
    viewAnswered = (e) =>{
        this.setState(()=>({
            view : 'answered'
        }))
    }
    viewUnanswered = (e) =>{
        this.setState(()=>({
            view : 'unanswered'
        }))
    }
    render(){
        console.log(this.props)
        const {view} = this.state
        const {answeredQuestions, unansweredQuestions} = this.props
        return(
            <div className = "dashboard-container">
                <div className = "dashboard-buttons">
                    <p className = {view === 'unanswered'?"questions-view-active":"questions-view" } onClick = {this.viewUnanswered}>Unanswered Questions</p>
                    <p className = {view === 'answered'?"questions-view-active":"questions-view" } onClick = {this.viewAnswered}>Answered Questions</p>
                </div>
                {view === 'answered'
                ? answeredQuestions.map(id=>(
                    <li key = {id}>
                        <Poll view = {view} id = {id}/>
                    </li>
                  ))
                : unansweredQuestions.map(id=>(
                    <li>
                        <Poll view = {view} id = {id}/>
                    </li>
                  ))
                }
            </div>
        )
    }
}

function mapStateToProps({questions, users ,authedUser}){
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
    return {
        answeredQuestions : answeredQuestionsIds.sort((a,b)=> questions[b].timestamp - questions[a].timestamp ),
        unansweredQuestions : unansweredQuestionsIds.sort((a,b)=> questions[b].timestamp - questions[a].timestamp )
    }
}

export default connect(mapStateToProps)(Dashboard)