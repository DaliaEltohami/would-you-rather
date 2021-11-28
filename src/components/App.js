import { connect } from 'react-redux'
import React from 'react';
import {handleInitialData} from '../actions/shared'
import {Fragment} from 'react'
import LoadingBar from 'react-redux-loading';
import Dashboard from './Dashboard';

class App extends React.Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    const {loading} = this.props

    return(
      <Fragment>
        <LoadingBar/>
        <div>
          {loading === true 
          ? null 
          : <Dashboard/>
          }
        </div>
      </Fragment>
    )
  }
}



function mapStateToProps({loading}){
  return{
    loading
  }
}

export default connect(mapStateToProps)(App);
