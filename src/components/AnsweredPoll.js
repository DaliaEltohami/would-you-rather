import React, {Component} from 'react'
import { connect } from 'react-redux'

class AnsweredPoll extends Component{
    render(){
        const {questionAuthor, avatar, optionOne, optionTwo, completed1, completed2, question, authedUser} = this.props
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
                            <p className = "poll-option ">{optionOne}</p>
                            {question.optionOne.votes.includes(authedUser) && (
                            <p className = "your-vote">Your Vote</p>
                            )}
                            
                        </div>
                        <div
                            className = {question.optionTwo.votes.includes(authedUser) 
                                        ? "answer-yes" 
                                        : "answer-no"
                                        }
                        >
                            <p className = "poll-option ">{optionTwo}</p>
                            {question.optionTwo.votes.includes(authedUser) && (
                            <p className = "your-vote">Your Vote</p>
                            )}
                             
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser,users,questions},props){
    const {id} = props.match.params
    const questionAuthor = questions[id].author
    const avatar = users[questionAuthor].avatarURL
    const optionOne = questions[id].optionOne.text
    const optionTwo = questions[id].optionTwo.text
    const totalVotes = questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length
    const completed1 = (questions[id].optionOne.votes.length / totalVotes) * 100
    const completed2 = (questions[id].optionTwo.votes.length / totalVotes) * 100
    const question = questions[id]
    return{
        questionAuthor,
        question,
        avatar,
        optionOne,
        optionTwo,
        completed1,
        completed2,
        id,
        authedUser
    }
}

export default connect(mapStateToProps)(AnsweredPoll)