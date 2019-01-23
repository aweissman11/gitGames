const defaultState = {
  hasErrored: false,
  message: 'nope'
}

export const hasErrored = (state = defaultState, action) => {
  switch(action.type) {
    case 'HAS_ERRORED' :
    const { message, hasErrored } = action
      console.log('has errored!!!!! -----------------------------------------');
      return { message, hasErrored: hasErrored };
    default:
      return state;
  }
}

export default hasErrored;