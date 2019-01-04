import React from 'react';
import { shallow } from 'enzyme';

import SliderLoading from '../index';

describe('SliderLoading', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SliderLoading />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})
