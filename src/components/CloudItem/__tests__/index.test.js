import React from 'react';
import { shallow } from 'enzyme';

import CloudItem from '../index';

describe('CloudItem', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CloudItem text='word' instances={90} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})
