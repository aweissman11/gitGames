import { getCommitsData } from '../getCommitsData';

import { loadingCommits, hasErrored, setCommitsData } from '../../index';

describe('getCommitsData', () => {
  const mockDispatch = jest.fn();
  let user;
  
  beforeEach(() => {
    user = 'aweissman11'
  })

  it('calls loadingCommits to kick things off', () => {
    const thunk = getCommitsData(user);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(loadingCommits('Getting Commits Data', true))
  })

  it('should dispatch Error if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, response: { statusText: 'Error has occured' }
    }))

    const thunk = getCommitsData(user);

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Commits data fetch failed', true))
  })


  it('should dispatch setCommitsData if the response is ok', async () => {
    const CommitsData = { name: 4, url: 9, merge: 20 }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(CommitsData)
    }))
    const thunk = getCommitsData(user)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(setCommitsData(CommitsData))
  })

  it('should dispatch loadingCommits(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
        movies: []
      })
    }))

    const thunk = getCommitsData(user)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(loadingCommits('Commits data retrieved', false))
  })


})