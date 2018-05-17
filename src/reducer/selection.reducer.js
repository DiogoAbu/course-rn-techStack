export default (state = -1, action) => {
  if(action.type === 'SELECT_LIBRARY'){
    return action.payload
  }

  return state
}