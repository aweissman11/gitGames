import React from 'react';
import { shallow } from 'enzyme';

import DataSlider from '../index';

describe('DataSlider', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DataSlider />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})
