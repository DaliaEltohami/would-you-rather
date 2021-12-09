import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect, withRouter } from 'react-router-dom'

class Nav extends Component{
    handleLogout = () => {
        this.props.dispatch(setAuthedUser(null))
        this.props.history.push('/login')
    }
    render(){
        return(
            <nav className = "nav">
                <div>
                    <ul className = "nav-list">
                        <li>
                            <NavLink to = '/' exact activeClassName = "active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = '/add' activeClassName = "active">
                                New Question
                            </NavLink>  
                        </li>
                        <li>
                            <NavLink to = '/leaderboard' activeClassName = "active">
                                Leader Board
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {this.props.authedUser !== null && (
                    <div>
                    <ul className = "nav-list">
                        <li className = "nav-greating">
                            <span> Hello, {this.props.authedUser}</span>
                            <img
                                src = {this.props.avatar}
                                alt = {`avatar of ${this.props.authedUser}`}
                                className = "avatar-thumb"
                            />
                        </li>
                        <li onClick = {this.handleLogout} className = "logout">Logout</li>
                    </ul>
                </div>
                )}
            </nav>
        )
    }
}

function mapStateToProps({users,authedUser}){
    console.log(authedUser)
    const avatar = authedUser ? users[authedUser].avatarURL : null
    console.log(avatar)
    return{
        authedUser,
        avatar
    }
}

export default withRouter(connect(mapStateToProps)(Nav))