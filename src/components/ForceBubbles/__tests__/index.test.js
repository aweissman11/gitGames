import React from 'react';
import { shallow } from 'enzyme';

import ForceBubbles from '../index';

describe('ForceBubbles', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ForceBubbles />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})
