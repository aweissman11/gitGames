import React from 'react';
import { shallow } from 'enzyme';

import { mapDispatchToProps } from '../index';
import { mapStateToProps } from '../index';

import { MainPage } from '../index';

describe('MainPage', () => {
  const mockGetUserData = jest.fn();
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<MainPage getUserData={mockGetUserData} />)
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<MainPage getUserData={mockGetUserData} pageNotFound={true} />)
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<MainPage getUserData={mockGetUserData} hasErrored={true} pageNotFound={true} />)
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should get the user data', () => {
    const wrapper = shallow(<MainPage getUserData={mockGetUserData} username='aweissman11' />)
    wrapper.instance().forceUpdate()
    expect(wrapper.instance().props.getUserData).toHaveBeenCalled()
  })
  
  // it('should NOT get the user data', () => {
  //   const wrapper = shallow(<MainPage getUserData={mockGetUserData} />)
  //   wrapper.instance().forceUpdate()
  //   expect(wrapper.instance().props.getUserData).not.toHaveBeenCalled()
  // })
  
  it('should map the loading state to props', () => {
    const expected = {
      hasErrored: false,
      message: 'not errored'
    }
    const mockState = {
      hasErrored: expected
    }
    
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps.hasErrored).toEqual(expected)
  })

  it('should MDTP', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.getUserData();

    expect(mockDispatch).toHaveBeenCalled()
  })

})
