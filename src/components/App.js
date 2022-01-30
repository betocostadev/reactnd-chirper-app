import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../store/actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData())
  }, [])

  // const params = useParams()

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {props.loading === true ? null : (
            <div>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/tweet/:id' element={<TweetPage />} />
                <Route path='/new' element={<NewTweet />} />
              </Routes>
            </div>
          )}
        </div>
      </Fragment>
    </Router>
  )
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
