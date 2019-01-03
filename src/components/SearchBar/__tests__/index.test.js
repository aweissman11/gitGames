import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../index';

describe('SearchBar', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar loginPage={{user: 'me'}} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})
