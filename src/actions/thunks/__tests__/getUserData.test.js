import { getUserData } from '../getUserData';

import { isLoading, hasErrored, setCloudData, setUserData } from '../../index';

import { getCloudData } from '../getCloudData';

jest.mock('../getCloudData', () => ({
  getCloudData: jest.fn()
}))

describe('getUserData', () => {
  const mockDispatch = jest.fn();
  let user;
  
  beforeEach(() => {
    user = 'aweissman11'
  })

  it('calls isLoading to kick things off', () => {
    const thunk = getUserData(user);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading('Getting User Data', true))
  })

  it('should dispatch Error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, response: { statusText: 'Error has occured' }
    }))

    const thunk = getUserData(user);

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('User data fetch failed', true))
  })


  it('should dispatch getCloudData if the response is ok', async () => {
    const cloudData = { name: 4, url: 9, merge: 20 }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(cloudData)
    }))
    const thunk = getUserData(user)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(getCloudData(user))
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

    expect(mockDispatch).toHaveBeenCalledWith(isLoading('User data retrieved', false))
  })


})