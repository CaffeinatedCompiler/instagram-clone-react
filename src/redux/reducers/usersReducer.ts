import users from '../../data/users'

const initialState = users
type UserAction = { type: string }
function usersReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    default:
      return state
  }
}
export default usersReducer
