import React from 'react';
import { shallow } from 'enzyme';

import { SearchUsers } from '../index';
import { getUserData } from '../../../actions/thunks/getUserData';

import { mapDispatchToProps } from '../index';

describe('SearchUsers', () => {
  
  let wrapper;
  let mockEvent;

  const mockPreventDefault = jest.fn();
  const mockGetUserData = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchUsers 
                        loginPage={{user: 'me'}} 
                        getUserData={mockGetUserData}
                        />)
    mockEvent = {
      target: {
        value: 'ev',
      },
      preventDefault: mockPreventDefault
    }
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should MDTP', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.getUserData();


    expect(mockDispatch).toHaveBeenCalled()
  })

  it('handleSearchChange should set state', () => {
    wrapper.instance().handleSearchChange(mockEvent);
    expect(wrapper.instance().state.query).toEqual('ev')
  })
  
  it('should call handleSearchChange on text input', () => {
    const mockHandleChange = jest.fn();
    wrapper.instance().handleSearchChange = mockHandleChange;
    wrapper.instance().toggleSearchInput();
    wrapper.find('#search-input').simulate('change', mockEvent);
    expect(mockHandleChange).toHaveBeenCalledWith(mockEvent);
  });

  describe('toggleSearchInput', () => {

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<SearchUsers loginPage={{user: 'me'}} />)
    })

    it('should set to the right state', () => {
      wrapper.instance().toggleSearchInput();
      expect(wrapper.instance().state).toEqual({
        "boxWidth": "search-box-width",
        "formWidth": "search-form-width",
        "inputWidth": "search-input-width",
        "query": "",
        "searchInputIsToggled": true,
        "searchUsers": false,
        "svgToggled": "toggled"
      })
    })

    it('should set to the right state if search is toggled already', () => {
      wrapper.instance().toggleSearchInput();
      wrapper.instance().toggleSearchInput();
      expect(wrapper.instance().state).toEqual({
        "boxWidth": "",
        "formWidth": "",
        "inputWidth": "",
        "query": "",
        "searchInputIsToggled": false,
        "searchUsers": false,
        "svgToggled": ""
      })
    })
  })

  describe('submitSearch', () => {
    it('should call preventDefault', () => {
      wrapper.instance().submitSearch(mockEvent);
      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it('should call getUserData with the correct parameters', () => {
      wrapper.instance().toggleSearchInput();
      wrapper.instance().submitSearch(mockEvent);

      expect(mockGetUserData).toHaveBeenCalledWith({ username: ''})
    });
  });
})
