import React,{Component} from "react"
import { connect } from 'react-redux'
import { handlePollAnswer } from '../actions/shared'
import { withRouter } from 'react-router-dom'

class UnansweredPoll extends Component{
    state = {
        answer : null
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        let answer = null
        const {dispatch , id} = this.props
        const options = document.getElementsByName('answer')
        console.log(options)
        for(let i = 0; i <options.length; i++ ){
            if(options[i].checked){
                console.log(options[i])
                answer = options[i].value
            }
        }
        if (answer !== null){
            dispatch(handlePollAnswer(answer, id))
            this.props.history.push(`/questions/${id}`)
        }
        else{
            alert('please choose answer')
        }
    }
    render(){
        console.log(this.state.answer)
        const {question} = this.props
        if(question === undefined){
            return(
                <p>This Poll is not Existed</p>
            )
        }
        else{
            const {questionAuthor, avatar, optionOne, optionTwo, authedUser} = this.props
            
            return(
                <div className = "unanswered-poll-container">
                    <p className = "poll-heading"><span>{questionAuthor}</span> asks :</p>
                    <div className = "poll-details">
                        <img
                            src = {avatar}
                            alt = {`avatar of ${questionAuthor}`}
                            className = "avatar-answered"
                        />
                        <div className = "poll-data ">
                          <h3>Would You Rather</h3>
                          <form className = "form" onSubmit = {this.handleSubmit}>
                            <input type="radio" id="radio" name="answer" value="optionOne"/>
                              <label htmlFor ="option-one">{optionOne}</label><br/>
                            <input type="radio" id="radio" name="answer" value="optionTwo"/>
                              <label htmlFor ="option-two">{optionTwo}</label><br/><br/>
                            <input type="submit" value="Submit"></input>
                          </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps({questions,users,authedUser},props){
    const {id} = props
    const question = questions[id]
    if ( question !== undefined){
        const questionAuthor = questions[id].author
        const avatar = users[questionAuthor].avatarURL
        const optionOne = questions[id].optionOne.text
        const optionTwo = questions[id].optionTwo.text
        return {
            question,
            questionAuthor,
            avatar,
            optionOne,
            optionTwo,
            authedUser,
            id
        }
    }
    return {
        question
    }

}

export default withRouter(connect(mapStateToProps)(UnansweredPoll))