import { getInitialData } from '../../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'

// Using a fake logged user
const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
  return async (dispatch) => {
    const { users, tweets } = await getInitialData()
    dispatch(receiveUsers(users))
    dispatch(receiveTweets(tweets))
    dispatch(setAuthedUser(AUTHED_ID))
  }
}
