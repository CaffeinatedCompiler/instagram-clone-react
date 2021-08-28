import { posts } from '../../data/posts'

const initialState = posts
type PostAction = { type: string }
function postsReducer(state = initialState, action: PostAction) {
  switch (action.type) {
    default:
      return state
  }
}
export default postsReducer
