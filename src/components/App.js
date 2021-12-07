import { connect } from 'react-redux'
import React from 'react';
import {handleInitialData} from '../actions/shared'
import {Fragment} from 'react'
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';
import Nav from './Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AnsweredPoll from './AnsweredPoll';
import UnansweredPoll from './UnansweredPoll';
import NewPoll from './NewPoll'
import LeaderBoard from './LeaderBoard';

class App extends React.Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
    console.log('mounted')
  }

  render(){
    const {loading} = this.props
    console.log(loading)
    return(
      <Router>
          <LoadingBar/>
            {loading === true 
            ? null 
            : <Fragment> 
                <div className = "container">
                    <Nav/>
                    <Route path = "/" exact component = {Dashboard}/>
                    <Route path = "/answered-poll/:id" component = {AnsweredPoll}/>
                    <Route path = "/unanswered-poll/:id" component = {UnansweredPoll} />
                    <Route path = "/new-poll" component = {NewPoll}/>
                    <Route path = "/leader-board" component = {LeaderBoard}/>
                </div>
              </Fragment>
            }
      </Router>
    )
  }
}



function mapStateToProps({loading}){
  return{
    loading
  }
}

export default connect(mapStateToProps)(App);
