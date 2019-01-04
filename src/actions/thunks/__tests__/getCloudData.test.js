import { getCloudData } from '../getCloudData';

import { loadingWordCloud, hasErrored, setCloudData, setUserD, loadingWordClouda, loadingWordCloudta } from '../../index';

describe('getCloudData', () => {
  const mockDispatch = jest.fn();
  let user;
  
  beforeEach(() => {
    user = 'aweissman11'
  })

  it('calls loadingWordCloud to kick things off', () => {
    const thunk = getCloudData(user);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(loadingWordCloud('Getting Cloud Data', true))
  })

  it('should dispatch Error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, response: { statusText: 'Error has occured' }
    }))

    const thunk = getCloudData(user);

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Cloud data fetch failed', true))
  })


  it('should dispatch setCloudData if the response is ok', async () => {
    const cloudData = { name: 4, url: 9, merge: 20 }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(cloudData)
    }))
    const thunk = getCloudData(user)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setCloudData(cloudData))
  })

  it('should dispatch loadingWordCloud(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
        movies: []
      })
    }))

    const thunk = getCloudData(user)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(loadingWordCloud('Cloud data retrieved', false))
  })


})