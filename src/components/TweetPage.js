import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import { useParams } from 'react-router-dom'

const TweetPage = (props) => {
  const { id } = useParams()
  const { tweets } = props

  const replies = !tweets[id]
    ? []
    : tweets[id].replies.sort(
        (a, b) => tweets[b].timestamp - tweets[a].timestamp
      )

  return (
    <div style={{ marginTop: '1rem' }}>
      <Tweet id={id} />
      <NewTweet id={id} />
      {replies.length !== 0 && (
        <div>
          <h3 className='center'>Replies</h3>
          <ul>
            {replies.map((replyId) => (
              <li key={replyId}>
                <Tweet id={replyId} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function mapStateToProps({ authedUser, tweets, users }, props) {
  return {
    tweets,
  }
}

export default connect(mapStateToProps)(TweetPage)
