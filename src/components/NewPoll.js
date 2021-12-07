import React,{Component} from 'react'
import { connect } from 'react-redux'
import {handleNewPoll} from '../actions/shared'
import {withRouter} from 'react-router-dom'

class NewPoll extends Component{
    state = {
        optionOneText : "",
        optionTwoText : ""
    }
    handleOptionOneText = (e)=>{
        e.preventDefault()
        const text = e.target.value
        this.setState(()=>({
            optionOneText : text
        }))
    }
    handleOptionTwoText = (e)=>{
        e.preventDefault()
        const text = e.target.value
        this.setState(()=>({
            optionTwoText : text
        }))
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const {dispatch} = this.props
        const {optionOneText, optionTwoText} = this.state
        if (optionOneText !== "" && optionTwoText !== ""){
            dispatch(handleNewPoll(optionOneText,optionTwoText))
            this.props.history.push('/')
        }
        else{
            alert('Please Enter Your Options')
        }
    }
    render(){
        const {optionOneText, optionTwoText} = this.state
        return(
            <div className = "new-poll-container">
                <h2 className = "new-poll-header">Create New Question</h2>
                <p>Complete the question: </p>
                <h3>Would You Rather...</h3>
                <form className = "new-poll-form" onSubmit = {this.handleSubmit}>
                    <input type = "text" 
                        placeholder = "Enter Option One Text Here" 
                        className = "option-input"
                        value = {optionOneText}
                        onChange = {this.handleOptionOneText}
                        >    
                    </input>
                    <p className = "center">OR</p>
                    <input type = "text" 
                        placeholder = "Enter Option Two Text Here" 
                        className = "option-input"
                        value = {optionTwoText}
                        onChange = {this.handleOptionTwoText}
                        >    
                    </input>
                    <br/><br/>
                    <input type = "submit" value = "Submit " className = "center"></input>
                </form>
            </div>
        )
    }
}

function mapStateToProps(){
    return{

    }
}

export default withRouter(connect(mapStateToProps)(NewPoll))