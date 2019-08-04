const INITIAL_STATE = {
  isSignedIn: null
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'SIGN_IN') {
    return { ...state, isSignedIn: true }
  }

  if (action.type === 'SIGN_OUT') {
    return { ...state, isSignedIn: false }
  }

  return state
}
