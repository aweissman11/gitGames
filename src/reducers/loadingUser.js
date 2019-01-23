const defaultState = {
  loadingUser: false,
  message: 'search for something'
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