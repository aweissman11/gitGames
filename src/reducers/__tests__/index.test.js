import { cloudData } from '../cloudData';
import { rootReducer } from '../index';

describe('cloudData', () => {
  it('should set camps list', () => {
    const mockAction = {
      type: 'SET_CAMPS_LIST',
      cloudData: [1, 2, 3]
    }
    const expected = [1, 2, 3];
    const result = cloudData(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = []
    const result = cloudData(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('rootReducer', () => {
  it('should match the snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  })
  
})