export const setUserData = (userData) => {
  return {
    type: 'SET_USER_DATA',
    userData
  }
}

export const isLoading = (message, isLoading) => {
  return {
    type: 'LOADING',
    message,
    isLoading
  }
}

export const hasErrored = (message, hasErrored) => {
  return {
    type: 'HAS_ERRORED',
    message,
    hasErrored
  }
}