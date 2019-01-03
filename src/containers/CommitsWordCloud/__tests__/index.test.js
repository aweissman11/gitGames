import React from 'react';
import { shallow } from 'enzyme';

import randomColor from 'randomcolor';


import { CommitsWordCloud } from '../index';
import { mapStateToProps } from '../index';

import { mockCloudData } from '../__mocks__/mockCloudData';

// jest.mock('randomcolor', () => ({
//   randomColor: () => ({
//     error: {
//       message: 'error message'
//     }
//   })
// }));

describe('CommitsWordCloud', () => {

  let wrapper;
  // const mockForceUpdate = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CommitsWordCloud
                        // onClick={mockForceUpdate}
                        cloudData={mockCloudData}
                        loadingWordCloud={{
                          loadingWordCloud: false,
                          message: 'not loading'
                        }}
                      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should forceUpdate', () => {
    const mockForceUpdate = jest.fn();
    wrapper.instance().forceUpdate = mockForceUpdate    
    wrapper.find('.tag-cloud').simulate('click')
    expect(mockForceUpdate).toHaveBeenCalled()
  })
  
  // it('should get a randomColor', () => {
  //   // randomColor = jest.fn();
  //   wrapper.find('.tag-cloud').simulate('click')
  //   expect(randomColor).toHaveBeenCalled()
  // })

  describe('getFontSize', () => {
    let styles;
    
    beforeEach(() => {
      styles = {
        small: {
          fontSize: 14,
          opacity: 0.7
        },
        medium: {
          fontSize: 22,
        },
        big: {
          fontSize: 30,
        },
        huge: {
          fontSize: 50,
          fontWeight: 'bold'
        }
      }
    })
    
    it('should get small font', () => {
      const expected = styles.small
      const result = wrapper.instance().getFontSize(1)
      expect(result).toEqual(expected)
    })

    it('should get medium font', () => {
      const expected = styles.medium
      const result = wrapper.instance().getFontSize(5)
      expect(result).toEqual(expected)
    })

    it('should get big font', () => {
      const expected = styles.big
      const result = wrapper.instance().getFontSize(15)
      expect(result).toEqual(expected)
    })

    it('should get huge font', () => {
      const expected = styles.huge
      const result = wrapper.instance().getFontSize(25)
      expect(result).toEqual(expected)
    })
  })

  describe('mapStateToProps', () => {
    it('should map the campslist state to props', () => {
      const expected = mockCloudData
      const mockState = {
        cloudData: mockCloudData
      }
      
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.cloudData).toEqual(expected)
    })

    it('should map the loading state to props', () => {
      const expected = {
        loadingWordCloud: true,
        message: 'loading right now'
      }
      const mockState = {
        loadingWordCloud: expected
      }
      
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.loadingWordCloud).toEqual(expected)
    })
  })
  
})
