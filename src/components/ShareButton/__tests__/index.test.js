import React from 'react';
import { shallow } from 'enzyme';

import ShareButton from '../index';

describe('ShareButton', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ShareButton />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})
