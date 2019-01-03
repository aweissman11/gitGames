import { isLoading, hasErrored, setCloudData, setUserData, loadingUser } from '../../index';

import { getUserData } from '../getUserData';

// jest.mock('../getUserData', () => ({
//   getUserData: jest.fn()
// }))

describe('getUserData', () => {
  const mockDispatch = jest.fn();
  let user;
  
  beforeEach(() => {
    user = 'aweissman11'
  })

  it('calls loadingUser to kick things off', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, response: { statusText: 'Error has occured' }
    }))
    const thunk = getUserData(user);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(loadingUser('Getting User Data', true))
  })

  it('should dispatch Error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, response: { statusText: 'Error has occured' }
    }))

    const thunk = getUserData(user);

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('User data fetch failed', true))
  })

  it('should dispatch Error if the user doesnt exist', async () => {
    const mockError = { error: 'Error has occured' }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockError)
    }))

    const thunk = getUserData(user);

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(mockError.error, true))
  })

  it('should stop loading if the user doesnt exist', async () => {
    const mockError = { error: 'Error has occured' }

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockError)
    }))

    const thunk = getUserData(user);

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(loadingUser('User data has errored', false))
  })

  it('should dispatch setUserData if the response is ok', async () => {
    const cloudData = { name: 4, url: 9, merge: 20 }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(cloudData)
    }))
    const thunk = getUserData(user)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setUserData(cloudData))
  })


  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
        movies: []
      })
    }))

    const thunk = getUserData(user)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(loadingUser('User data retrieved', false))
  })


})