import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Poll extends Component{
    render(){
        const {questionAuthor, avatar, optionOne, optionTwo, id, view} = this.props
        return(
            <div className = "poll-container">
                <p className = "poll-heading"><span>{questionAuthor}</span> asks :</p>
                <div className = "poll-details">
                    <img
                        src = {avatar}
                        alt = {`avatar of ${questionAuthor}`}
                        className = "avatar"
                    />
                    <div className = "poll-data ">
                        <p className = "" style = {{fontWeight : 'bolder', fontSize : '20px'}}>Would You Rather</p>
                        <p className = "poll-option ">{optionOne}</p>
                        <p className = "poll-option ">{optionTwo}</p>
                        <p className = "poll-view">
                            <Link 
                                to = {`/questions/${id}`}
                                className = "poll-link">View Poll
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users, questions, authedUser},{id, view}){
    const questionAuthor = questions[id].author
    const avatar = users[questionAuthor].avatarURL
    const optionOne = questions[id].optionOne.text
    const optionTwo = questions[id].optionTwo.text
    return{
        questionAuthor,
        avatar,
        optionOne,
        optionTwo,
        view,
        id
    }
}

export default connect(mapStateToProps)(Poll)