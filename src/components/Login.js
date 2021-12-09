import React,{Component} from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import { Redirect,withRouter } from 'react-router-dom'

class Login extends Component{

    state =  {
        value : "",
    }
    handleChange = (e) => {
        this.setState(()=>({
            value : e.target.value
        }))
    }
    submitChange = () => {
        if(this.state.value !== ""){
            let path = '/'
            this.props.dispatch(setAuthedUser(this.state.value))
            if(this.props.location.state){
                path = this.props.location.state.from
            }
            console.log(path)
            this.props.history.push(path)
        }else{
            alert('Please select User to login')
        }
    }
    render(){
        console.log(this.props)
        if(this.props.authedUser !== null){
            return <div className = "center">You are logged in</div>
        }
        return(
            <div className = "unanswered-poll-container">
                    <div className = "login-heading">
                        <h2 style = {{margin : '10px'}} >Welcome To The Would You Rather App!</h2>
                        <h4 style = {{margin : '5px'}}>Please sign in to continue</h4>
                    </div>
                    <div className = "login-details">
                        <p className = "sign-in">Sign in</p>
                        <select value = {this.state.value}
                        onChange = {this.handleChange}
                        placeholder = 'select user'
                        className = "login-select">
                            <option value="" defaultValue disabled hidden>Select User</option>
                            <option value="sarahedo" >Sarah Edo</option>
                            <option value="tylermcginnis">Tyler Mcginnis</option>
                            <option value="johndoe">John Doe</option>
                        </select>
                        <button className = "login-button" type = "submit" onClick = {this.submitChange}>Log In</button>
                    </div>
                </div>
        )
    }
}

function mapStateToProps({users, authedUser}){
    return{
        users,
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Login))