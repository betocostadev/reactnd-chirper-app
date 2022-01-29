import { saveLikeToggle, saveTweet } from '../../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const ADD_TWEET = 'ADD_TWEET'

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}

export function toggleLike({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_LIKE,
    id,
    authedUser,
    hasLiked,
  }
}

export function handleToggleLike(info) {
  return async (dispatch) => {
    try {
      dispatch(toggleLike(info))
      await saveLikeToggle(info)
    } catch (error) {
      console.warn('error in handleToggleLike: ', error)
      dispatch(toggleLike(info))
      alert('There was an error.')
    }
  }
}

export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  }
}

export function handleAddTweet(text, replyingTo) {
  return async (dispatch, getState) => {
    try {
      const { authedUser } = getState()
      dispatch(showLoading())

      const tweet = await saveTweet({
        text,
        author: authedUser,
        replyingTo,
      })

      dispatch(addTweet(tweet))
      dispatch(hideLoading())
    } catch (error) {
      console.warn('There was an error: ', error)
    }
  }
}
