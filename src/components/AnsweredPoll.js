import React, {Component} from 'react'
import { connect } from 'react-redux'
import ProgressBar from './ProgressBar'
import { withRouter } from 'react-router-dom'

class AnsweredPoll extends Component{
    render(){
        const {question} = this.props
        if(question === undefined){
            return(
                <p>This Poll is not Existed</p>
            )
        }
        else{
            const {questionAuthor, avatar, optionOne, optionTwo, completed1, completed2, 
                    authedUser,totalVotes, optionOneVotes, optionTwoVotes} = this.props
            console.log(completed1,completed2)
            
            return(
                <div className = "answered-poll-container">
                    <p className = "poll-heading"><span>{questionAuthor}</span> asks :</p>
                    <div className = "poll-details">
                        <img
                            src = {avatar}
                            alt = {`avatar of ${questionAuthor}`}
                            className = "avatar-answered"
                        />
                        <div className = "poll-data ">
                            <p className = "" style = {{fontWeight : 'bolder', fontSize : '20px'}}>Results :-</p>
                            <div 
                                className = {question.optionOne.votes.includes(authedUser) 
                                            ? "answer-yes"
                                            : "answer-no"
                                            }
                            >
                                <div className = "poll-data1">
                                    <p className = "poll-option ">{optionOne}</p>
                                    {question.optionOne.votes.includes(authedUser) && (
                                    <p className = "your-vote">Your Vote</p>
                                    )}
                                </div>
                                <ProgressBar completed = {completed1}/>
                                <div className = "votes"><p>{optionOneVotes} out of {totalVotes} votes</p></div>
                            </div>
                            <div
                                className = {question.optionTwo.votes.includes(authedUser) 
                                            ? "answer-yes" 
                                            : "answer-no"
                                            }
                            >
                                <div className = "poll-data1">
                                    <p className = "poll-option ">{optionTwo}</p>
                                    {question.optionTwo.votes.includes(authedUser) && (
                                    <p className = "your-vote">Your Vote</p>
                                    )}
                                </div>
                                <ProgressBar completed = {completed2}/>
                                <div className = "votes"><p>{optionTwoVotes} out of {totalVotes} votes</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps({authedUser,users,questions},props){
    const {id} = props.match.params
    const question = questions[id]
    console.log(question)
    if(question !== undefined){
        const questionAuthor = questions[id].author
        const avatar = users[questionAuthor].avatarURL
        const optionOne = questions[id].optionOne.text
        const optionTwo = questions[id].optionTwo.text
        const totalVotes = questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length
        const optionOneVotes = questions[id].optionOne.votes.length
        const optionTwoVotes =  questions[id].optionTwo.votes.length
        const completed1 = Math.round(( optionOneVotes / totalVotes) * 100)
        const completed2 = Math.round(( optionTwoVotes / totalVotes) * 100)
        return{
            questionAuthor,
            question,
            avatar,
            optionOne,
            optionTwo,
            completed1,
            completed2,
            id,
            authedUser,
            totalVotes,
            optionOneVotes,
            optionTwoVotes
        }
    }
    return {
        question
    }
    
}

export default withRouter(connect(mapStateToProps)(AnsweredPoll))