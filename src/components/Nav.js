import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component{
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
                            <NavLink to = '/ne' activeClassName = "active">
                                New Question
                            </NavLink>  
                        </li>
                        <li>
                            <NavLink to = '/n' activeClassName = "active">
                                Leader Board
                            </NavLink>
                        </li>
                    </ul>
                </div>
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
                        <li>Logout</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({users,authedUser}){
    console.log(authedUser)
    const avatar = users[authedUser].avatarURL
    console.log(avatar)
    return{
        authedUser,
        avatar
    }
}

export default connect(mapStateToProps)(Nav)