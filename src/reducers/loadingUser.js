const defaultState = {
  loadingUser: true,
  message: 'booting up...'
}

export const loadingUser = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOADING_USER' :
      const { message, loadingUser } = action
      return { message, loadingUser: loadingUser };
    default:
      return state;
  }
}

export default loadingUser;