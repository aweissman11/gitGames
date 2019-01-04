import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from '../index';

describe('LoginPage', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<LoginPage pageNotFound={true} />)
    expect(wrapper).toMatchSnapshot()
  })
  
})
