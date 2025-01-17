import { getInitialData } from '../../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// Using a fake logged user
const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading())
    const { users, tweets } = await getInitialData()
    dispatch(receiveUsers(users))
    dispatch(receiveTweets(tweets))
    dispatch(setAuthedUser(AUTHED_ID))
    dispatch(hideLoading())
  }
}
