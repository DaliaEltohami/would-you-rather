import React, {Component} from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component{
    
    render(){
        const {leaderBoard, sortedLeaderBoard, users} = this.props
        return(
            <div className = "leader-board-container">
                {sortedLeaderBoard.map((user,i)=>(
                    <li key = {user}>
                        <div className = "user-container">
                            <h2 className = "leader-board-header">{i+1}</h2>
                            <div className = "user-details-container">
                                <div>
                                    <img
                                        src = {users[user].avatarURL}
                                        alt = {`avatar of ${user}`}
                                        className = "avatar"
                                    />
                                </div>
                                <div className = "user-counts">
                                    <h2>{users[user].id}</h2>
                                    <div className = "count">
                                        <p>Answered questions</p>
                                        <p>{leaderBoard[user].answers}</p>
                                    </div>
                                    <hr/>
                                    <div className = "count">
                                        <p>Created questions</p>
                                        <p>{leaderBoard[user].questions}</p>
                                    </div>
                                </div>
                                <div className = "center user-score">
                                        <h1>score</h1>
                                        <h4>{leaderBoard[user].questions+leaderBoard[user].answers}</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}){
    // console.log(Object.keys(users))
    // console.log(Object.keys(users[authedUser].answers).length)
    let leaderBoard = {}
    Object.keys(users).map((user)=>{
      leaderBoard = {
          ...leaderBoard,
          [user] :{
              id : user,
              answers : Object.keys(users[user].answers).length,
              questions : users[user].questions.length
          }
      }
    })

    const sortedLeaderBoard = Object.keys(leaderBoard)
            .sort((a,b)=> (leaderBoard[b].answers + leaderBoard[b].questions) - (leaderBoard[a].answers + leaderBoard[a].questions))
    // const LeaderBoard = Object.keys(users)
    //     .sort((a,b)=> (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
    console.log(leaderBoard)
    console.log(sortedLeaderBoard)
    return {
        leaderBoard,
        sortedLeaderBoard,
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)